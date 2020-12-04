const fs = require("fs");
const path = require("path");

const logLabel = "[@nativescript-community/expo-nativescript-adapter before-buildAndroidPlugin hook]";
const failedTestAssertionMessage = `${logLabel} failed test assertion`;

const matchExp = /(\/\*\* 'unimodules-core' injected support START \*\*\/).*(\/\*\* 'unimodules-core' injected support END \*\*\/)/s;

const startBlock = "/** 'unimodules-core' injected support START **/";
const explanatoryText = "// Everything from here until the corresponding END comment will be subject to text replacement upon '@nativescript-community/expo-nativescript-adapter' plugin installation.";
const includeStatement = "include ':unimodules-core'";
const projectAssignment = "project(':unimodules-core').projectDir = new File(rootProject.projectDir, '../../node_modules/@unimodules/core/android')";
const endBlock = "/** 'unimodules-core' injected support END **/";

/**
 * TODO: Split this out and run it as part of the repo's tests, rather than in advance of actual work.
 */
function testCase(){
    const prefix = `rootProject.name = "plugindemoreact"\ninclude ':app'//, ':runtime', ':runtime-binding-generator'`;
    const injectedBlock = [
        startBlock,
        explanatoryText,
        includeStatement,
        projectAssignment,
        endBlock,
    ].join("\n");
    const suffix = `//project(':runtime-binding-generator').projectDir = new File("\${System.env.ANDROID_RUNTIME_HOME}/test-app/runtime-binding-generator")\n//project(':runtime').projectDir = new File("\${System.env.ANDROID_RUNTIME_HOME}/test-app/runtime")`;

    const matchingCase = [prefix, injectedBlock, suffix].join("\n");
    const missingCase = [prefix, suffix].join("\n");

    const matchingCaseMatches = matchingCase.match(matchExp);
    const missingCaseMatches = missingCase.match(matchExp);

    console.assert(missingCaseMatches === null, failedTestAssertionMessage);
    console.assert(matchingCaseMatches !== null, failedTestAssertionMessage);
    console.assert(matchingCaseMatches.length === 3, failedTestAssertionMessage);
    console.assert(matchingCaseMatches[0] === injectedBlock, failedTestAssertionMessage);
}

/**
 * This is an undocumented hook. If it is ever removed, we might try after-prepare instead.
 * @see https://github.com/NativeScript/nativescript-hook/issues/11#issuecomment-457705213
 * @see https://docs.npmjs.com/cli/v6/using-npm/scripts#pre--post-scripts
 * @see https://github.com/NativeScript/nativescript-app-templates/blob/master/packages/template-hello-world-ts/hooks/after-createProject/after-createProject.js
 * @see https://www.nsplugins.com/plugin/nativescript
 * @see https://github.com/NativeScript/plugins/tree/31b0f5157d02fdf17e89ac29233585cb7e4ebf6f/packages/localize/hooks
 * @see https://github.com/NativeScript/nativescript-cli/blob/master/extending-cli.md
 */
module.exports = function (hookArgs) {
    if(!hookArgs.ProjectData){
        console.warn(`${logLabel} Unable to run hook, as hookArgs.ProjectData was unexpectedly falsy.`);
        return;
    }

    if(!hookArgs.ProjectData.platformsDir){
        console.warn(`${logLabel} Unable to run hook, as hookArgs.ProjectData.platformsDir was unexpectedly falsy.`);
        return;
    }

    const androidFolder = path.resolve(hookArgs.ProjectData.platformsDir, "android");
    const settingsGradlePath = path.resolve(androidFolder, "settings.gradle");
    const installationAdvice = `After having added your Android platform (i.e. via \`tns platform add android\`), please run \`ns plugin add @nativescript-community/expo-nativescript-adapter\` again so that this hook can ensure that 'unimodules-core' gets included into your automatically-generated 'settings.gradle' file.`;

    testCase();

    if(!fs.existsSync(androidFolder)){
        console.warn(`${logLabel} Unable to run hook, as Android folder at "${androidFolder}" was unexpectedly missing. ${installationAdvice}`);
        return;
    }

    if(!fs.existsSync(settingsGradlePath)){
        console.warn(`${logLabel} Unable to run hook, as failed to read settings.gradle file at "${settingsGradlePath}". ${installationAdvice}`);
        return;
    }

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

    const injectedBlock = [startBlock, explanatoryText, includeStatement, projectAssignment, endBlock].join("\n");

    /** @type {string} */
    let updatedSettingsGradleContents;
    const matches = settingsGradleContents.match(matchExp);
    if(matches === null){
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

        updatedSettingsGradleContents = [prefix, injectedBlock, suffix].join("\n");
    }

    if(settingsGradleContents === updatedSettingsGradleContents){
        console.log(`${logLabel} Successfully ran hook; 'unimodules-core' was already found included in settings.gradle (and will be available upon building your app).`);
        return;
    }

    try {
        fs.writeFileSync(settingsGradlePath, settingsGradleContents);
        console.log(`${logLabel} Successfully ran hook; 'unimodules-core' is now included in settings.gradle (and will be available upon building your app).`);
    } catch (error) {
        console.error(`${logLabel} Unable to run hook due to unexpected error overwriting settings.gradle file at "${settingsGradlePath}". ${installationAdvice}`, error);
    }
};