const path = require("path");
const pluginDir = path.dirname(__dirname);
const hook = require('@nativescript/hook')(pluginDir);
const fs = require("fs");
const writeSettingsForPlugin = require("./writeSettingsForPlugin");

/**
 * By calling this, each entry specified in the `nativescript.hooks` field in this
 * plugin's package.json will be written into the app's own "hooks" folder with a
 * sanitised name corresponding to the project and into a subfolder that
 * corresponds to the hook.
 * @example demo-react/hooks/after-prepare/nativescript-community-expo-nativescript-adapter.js
 * @see @nativescript/hook/index.js
 */
hook.postinstall();

const moduleName = "@nativescript-community/expo-nativescript-adapter";
const nativeScriptAppRoot = hook.findProjectDir();
const platformsDir = path.resolve(nativeScriptAppRoot, "platforms");
const androidDir = path.resolve(platformsDir, "android");
if(fs.existsSync(androidDir)){
    writeSettingsForPlugin({
        moduleName,
        platformsDir,
        mode: "inject",
        hookName: "postinstall",
    });
    try {
        fs.writeFileSync(
            path.resolve(platformsDir, "package.json"),
            JSON.stringify({
                description: "All Expo Unimodules for Android expect this file to exist in order to allow installation! There's nothing more to it."
            }, null, 4)
        );
    } catch (error){
        console.error(`[${moduleName}] failed to complete postinstall hook; unable to write dummy package.json into platforms directory "${platformsDir}".`, error);
    }
} else {
    /*
     * It may well be an iOS-only project, so fine to exit silently here.
     * Or even if it is an Android project, the user may simply not yet have run a build.
     * If so, no worries – we'll have another chance to set things up upon the after-prepare hook.
     */
}
