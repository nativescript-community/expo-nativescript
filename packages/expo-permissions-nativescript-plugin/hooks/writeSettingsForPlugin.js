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
    const { moduleName, platformsDir, mode, hookName } = args;

    const writeSettingsCommonArgs = {
        platformsDir,
        logLabel: `[${moduleName}] ${hookName} hook: `,
        moduleLabel: moduleName,
        packageLabel: `${expoPermissionsPackageName}`,
        mode,
    };

    const expoPermissionsPackageName = ":expo-permissions";
    writeSettings({
        ...writeSettingsCommonArgs,
        matchExp: /(\/\*\* ':expo-permissions' injected support START \*\*\/).*(\/\*\* ':expo-permissions' injected support END \*\*\/)/s,
        injectedBlock: mode === "clean" ? 
            "" : 
            [
                `/** '${expoPermissionsPackageName}' injected support START **/`,
                `// Everything from here until the corresponding END comment will be subject to text replacement upon '${moduleName}' plugin installation.`,
                `include '${expoPermissionsPackageName}'`,
                /* If we could ever get expo-permissions working directly, rather than a fork of it, this would be the path we'd use: */
                // `project('${expoPermissionsPackageName}').projectDir = new File(rootProject.projectDir, '../../node_modules/expo-permissions/android')`,
                `project('${expoPermissionsPackageName}').projectDir = new File(rootProject.projectDir, '../../node_modules/@nativescript-community/expo-permissions/platforms/android')`,
                `/** '${expoPermissionsPackageName}' injected support END **/`,
            ].join("\n")
    });

    const unimodulesPermissionsInterfacePackageName = ":unimodules-permissions-interface";
    writeSettings({
        ...writeSettingsCommonArgs,
        matchExp: /(\/\*\* ':unimodules-permissions-interface' injected support START \*\*\/).*(\/\*\* ':unimodules-permissions-interface' injected support END \*\*\/)/s,
        injectedBlock: mode === "clean" ? 
            "" : 
            [
                `/** '${unimodulesPermissionsInterfacePackageName}' injected support START **/`,
                `// Everything from here until the corresponding END comment will be subject to text replacement upon '${moduleName}' plugin installation.`,
                `include '${unimodulesPermissionsInterfacePackageName}'`,
                `project('${unimodulesPermissionsInterfacePackageName}').projectDir = new File(rootProject.projectDir, '../../node_modules/unimodules-permissions-interface/android')`,
                `/** '${unimodulesPermissionsInterfacePackageName}' injected support END **/`,
            ].join("\n")
    });
}
