const path = require("path");
const fs = require("fs");
const writeSettings = require("./writeSettings");

/**
 * hook.findProjectDir() was returning undefined for this hook, but luckily we get passed hookArgs to after-prepare.
 * @see https://github.com/NativeScript/nativescript-hook/issues/11#issuecomment-457705213
 * @see https://docs.npmjs.com/cli/v6/using-npm/scripts#pre--post-scripts
 * @see https://github.com/NativeScript/nativescript-app-templates/blob/master/packages/template-hello-world-ts/hooks/after-createProject/after-createProject.js
 * @see https://www.nsplugins.com/plugin/nativescript
 * @see https://github.com/NativeScript/plugins/tree/31b0f5157d02fdf17e89ac29233585cb7e4ebf6f/packages/localize/hooks
 * @see https://github.com/NativeScript/nativescript-cli/blob/master/extending-cli.md
 */
module.exports = function (hookArgs) {
    // console.log(`${logLabel} hookArgs`, hookArgs);

    if(!hookArgs.projectData){
        console.warn(`${logLabel} Unable to run hook, as hookArgs.projectData was unexpectedly falsy.`);
        return;
    }

    if(!hookArgs.projectData.platformsDir){
        console.warn(`${logLabel} Unable to run hook, as hookArgs.projectData.platformsDir was unexpectedly falsy.`);
        return;
    }

    const moduleName = "@nativescript-community/expo-nativescript-adapter";
    const packageName = ":unimodules-core";
    const platformsDir = hookArgs.projectData.platformsDir;
    const androidDir = path.resolve(platformsDir, "android");
    if(fs.existsSync(androidDir)){
        writeSettings({
            platformsDir,
            mode: "inject",
            logLabel: `[${moduleName}] after-prepare hook: `,
            moduleLabel: moduleName,
            packageLabel: `${packageName}`,
            matchExp: /(\/\*\* ':unimodules-core' injected support START \*\*\/).*(\/\*\* ':unimodules-core' injected support END \*\*\/)/s,
            injectedBlock: [
                `/** '${packageName}' injected support START **/`,
                `// Everything from here until the corresponding END comment will be subject to text replacement upon '${moduleName}' plugin installation.`,
                `include '${packageName}'`,
                `project('${packageName}').projectDir = new File(rootProject.projectDir, '../../node_modules/@unimodules/core/android')`,
                `/** '${packageName}' injected support END **/`,
            ].join("\n")
        });
    } else {
        /*
         * It may well be an iOS-only project, so fine to exit silently here.
         */
    }
}

