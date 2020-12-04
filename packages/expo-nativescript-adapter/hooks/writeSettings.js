const fs = require("fs");
const path = require("path");

/**
 * @see https://github.com/NativeScript/nativescript-hook/issues/11#issuecomment-457705213
 * @see https://docs.npmjs.com/cli/v6/using-npm/scripts#pre--post-scripts
 * @see https://github.com/NativeScript/nativescript-app-templates/blob/master/packages/template-hello-world-ts/hooks/after-createProject/after-createProject.js
 * @see https://www.nsplugins.com/plugin/nativescript
 * @see https://github.com/NativeScript/plugins/tree/31b0f5157d02fdf17e89ac29233585cb7e4ebf6f/packages/localize/hooks
 * @see https://github.com/NativeScript/nativescript-cli/blob/master/extending-cli.md
 * 
 * @param {object} args – The arguments.
 * @param {string} args.platformsDir – The path to the NativeScript app's "platforms" directory.
 * @param {"inject"|"clean"} args.mode – Whether to inject the settings ("inject"), or clean them ("clean"), from settings.gradle.
 * @param {string|undefined} args.logLabel – The identifying prefix to give any log messages written out.
 * @param {string} args.moduleLabel – The label by which to refer to the npm module that this hook is run by, for logging purposes.
 * @param {string} args.packageLabel – The label by which to refer to the package that this hook is concerned with injecting, for logging purposes (e.g. ":unimodules-core").
 * @param {RegExp} args.matchExp – The Regex expression to match.
 * @param {string} args.injectedBlock – The contents to inject.
 */
module.exports = function(args){
    const platformsDir = args.platformsDir;
    const mode = args.mode;
    const logLabel = args.logLabel || "";
    const moduleLabel = args.moduleLabel;
    const packageLabel = args.packageLabel;
    const matchExp = args.matchExp;
    const injectedBlock = args.injectedBlock;
    const failedTestAssertionMessage = `${logLabel} failed test assertion`;

    const androidFolder = path.resolve(platformsDir, "android");
    const settingsGradlePath = path.resolve(androidFolder, "settings.gradle");
    const installationAdvice = `After having added your Android platform (i.e. via \`tns platform add android\`), please run \`ns plugin add ${moduleLabel}\` again so that this hook can ensure that '${packageLabel}' gets included into your automatically-generated 'settings.gradle' file.`;

    testCase(matchExp, injectedBlock, failedTestAssertionMessage);

    /**
     * From here, we read from the existing settings.gradle, in case the user has written their own changes into it.
     * Of interest, the original (template, before interpolation of values like __PROJECT_NAME__) comes from:
     * @see @nativescript/android/framework/settings.gradle
     */

    /** @type {string} */
    let settingsGradleContents;
    try {
        settingsGradleContents = fs.readFileSync(settingsGradlePath).toString();
    } catch (error) {
        if(err.code === 'ENOENT'){
            console.warn(`${logLabel} Unable to run hook, as settings.gradle file at "${settingsGradlePath}" was unexpectedly missing. ${installationAdvice}`);
            return;
        }
        console.error(`${logLabel} Unable to run hook due to unexpected error reading settings.gradle file at "${settingsGradlePath}". ${installationAdvice}`, error);
        return;
    }

    /** @type {string} */
    let updatedSettingsGradleContents;
    const matches = settingsGradleContents.match(matchExp);
    if(matches === null){
        if(mode === "clean"){
            console.log(`${logLabel} Successfully ran hook; '${packageLabel}' was already found to be absent from settings.gradle (so no need to remove it).`);
            return;
        }

        // Hasn't been injected yet.
        updatedSettingsGradleContents = settingsGradleContents + "\n\n" + injectedBlock + "\n";
    } else {
        // Has been injected before. Easiest just to overwrite it rather than re-validating it.
        /**
         * fullMatch contains the startBlock, the endBlock, and everything in between.
         */
        const fullMatch = matches[0];
        const indexOfMatch = matches.index;
        const prefix = settingsGradleContents.slice(0, indexOfMatch);
        const lengthOfMatch = fullMatch.length;
        const suffix = settingsGradleContents.slice(indexOfMatch + lengthOfMatch);
        console.assert(settingsGradleContents === [prefix, fullMatch, suffix].join(""), `${logLabel} Regex matching and string manipulation didn't work as expected. Will not run hook.`);

        updatedSettingsGradleContents = [
            prefix,
            mode === "inject" ? injectedBlock : "",
            suffix
        ]
        .join("");
    }

    if(settingsGradleContents === updatedSettingsGradleContents){
        /*
         * We'd get in here if'd we matched on the start & end blocks and none of the contents in between them had
         * been altered by the user at any point (e.g. running the install hook twice in a row).
         */
        console.log(`${logLabel} Successfully ran hook; '${packageLabel}' was already found included in settings.gradle (and will be available upon building your app).`);
        return;
    }

    try {
        fs.writeFileSync(settingsGradlePath, updatedSettingsGradleContents);
        console.log(`${logLabel} Successfully ran hook; '${packageLabel}' ${mode === "inject" ? "is now included in settings.gradle (and will be available upon building your app)." : "has now been removed from your settings.gradle."}`);
    } catch (error) {
        console.error(`${logLabel} Unable to run hook due to unexpected error overwriting settings.gradle file at "${settingsGradlePath}". ${installationAdvice}`, error);
    }
}


/**
 * TODO: Split this out and run it as part of the repo's tests, rather than in advance of actual work.
 */
function testCase(matchExp, injectedBlock, failedTestAssertionMessage){
    const prefix = `rootProject.name = "plugindemoreact"\ninclude ':app'//, ':runtime', ':runtime-binding-generator'`;
    const suffix = `//project(':runtime-binding-generator').projectDir = new File("\${System.env.ANDROID_RUNTIME_HOME}/test-app/runtime-binding-generator")\n//project(':runtime').projectDir = new File("\${System.env.ANDROID_RUNTIME_HOME}/test-app/runtime")`;

    const missingCase = [prefix, suffix].join("\n");
    const missingCaseMatches = missingCase.match(matchExp);
    
    console.assert(missingCaseMatches === null, failedTestAssertionMessage);
    if(injectedBlock !== ""){
        const matchingCase = [prefix, injectedBlock, suffix].join("\n");
        const matchingCaseMatches = matchingCase.match(matchExp);
        console.assert(matchingCaseMatches !== null, failedTestAssertionMessage);
        console.assert(matchingCaseMatches.length === 3, failedTestAssertionMessage);
        console.assert(matchingCaseMatches[0] === injectedBlock, failedTestAssertionMessage);
    }
}