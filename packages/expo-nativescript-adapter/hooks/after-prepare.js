const path = require("path");
const pluginDir = path.dirname(__dirname);
const hook = require('@nativescript/hook')(pluginDir);
const fs = require("fs");
const writeSettings = require("./writeSettings");

const moduleName = "@nativescript-community/expo-nativescript-adapter";
const packageName = ":unimodules-core";
const nativeScriptAppRoot = hook.findProjectDir();
const platformsDir = path.resolve(nativeScriptAppRoot, "platforms");
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
