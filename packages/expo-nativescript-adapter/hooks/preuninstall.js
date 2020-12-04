const pluginDir = path.dirname(__dirname);
const hook = require('@nativescript/hook')(pluginDir);
const path = require("path");
const fs = require("fs");
const writeSettings = require("./writeSettings");

/**
 * By calling this, each entry specified in the `nativescript.hooks` field in this
 * plugin's package.json will be removed from the app's own "hooks" folder where it
 * had originally been written with a sanitised name corresponding to the project
 * and into a subfolder that corresponded to the hook.
 * @example demo-react/hooks/after-prepare/nativescript-community-expo-nativescript-adapter.js
 * @see @nativescript/hook/index.js
 */
hook.preuninstall();

const moduleName = "@nativescript-community/expo-nativescript-adapter";
const packageName = ":unimodules-core";
const nativeScriptAppRoot = hook.findProjectDir();
const platformsDir = path.resolve(nativeScriptAppRoot, "platforms");
const androidDir = path.resolve(platformsDir, "android");
if(fs.existsSync(androidDir)){
    writeSettings({
        platformsDir,
        mode: "clean",
        logLabel: `[${moduleName}] preuninstall hook: `,
        moduleLabel: moduleName,
        packageLabel: `${packageName}`,
        matchExp: /(\/\*\* ':unimodules-core' injected support START \*\*\/).*(\/\*\* ':unimodules-core' injected support END \*\*\/)/s,
        injectedBlock: "",
    });
} else {
    /*
     * It may well be an iOS-only project, so fine to exit silently here.
     * Or even if it is an Android project, the user may simply not yet have run a build.
     * If so, no worries – there is no settings.gradle to clean up in the first place.
     */
}
