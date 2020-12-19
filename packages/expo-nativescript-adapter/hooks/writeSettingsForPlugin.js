const writeSettings = require("./writeSettings");

/**
 * 
 * @param {object} args – The arguments.
 * @param {string} args.platformsDir – The path to the NativeScript app's "platforms" directory.
 * @param {"inject"|"clean"} args.mode – Whether to inject the settings ("inject"), or clean them ("clean"), from settings.gradle.
 * @param {string} args.moduleName – The name of the npm module.
 * @param {RegExp} args.matchExp – The Regex expression to match.
 * @param {RegExp} args.hookName – The name of the hook that's running.
 */
module.exports = function writeSettingsForPlugin(args){
    const moduleName = args.moduleName;
    const platformsDir = args.platformsDir;
    const mode = args.mode;
    const hookName = args.hookName;
    const packageName = ":unimodules-core";

    writeSettings({
        platformsDir,
        logLabel: `[${moduleName}] ${hookName} hook: `,
        moduleLabel: moduleName,
        packageLabel: `${packageName}`,
        mode,
        matchExp: /(\/\*\* ':unimodules-core' injected support START \*\*\/).*(\/\*\* ':unimodules-core' injected support END \*\*\/)/s,
        injectedBlock: mode === "clean" ? 
            "" : 
            [
                `/** '${packageName}' injected support START **/`,
                `// Everything from here until the corresponding END comment will be subject to text replacement upon '${moduleName}' plugin installation.`,
                `include '${packageName}'`,
                `project('${packageName}').projectDir = new File(rootProject.projectDir, '../../node_modules/@unimodules/core/android')`,
                `/** '${packageName}' injected support END **/`,
            ].join("\n")
    });
}
