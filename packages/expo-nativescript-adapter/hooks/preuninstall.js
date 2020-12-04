require('@nativescript/hook')(require("path").dirname(__dirname)).preuninstall();/**
 * By calling this, each entry specified in the `nativescript.hooks` field in this
 * plugin's package.json will be removed from the app's own "hooks" folder where it
 * had originally been written with a sanitised name corresponding to the project
 * and into a subfolder that corresponded to the hook.
 * @example demo-react/hooks/after-prepare/nativescript-community-expo-nativescript-adapter.js
 * @see @nativescript/hook/index.js
 */
