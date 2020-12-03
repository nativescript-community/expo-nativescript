import { NativeScriptConfig } from '@nativescript/core';

export default {
	id: 'org.nativescript.plugindemo',
	appResourcesPath: '../../tools/assets/App_Resources',
	android: {
        discardUncaughtJsExceptions: false,
        v8Flags: '--nolazy --expose_gc',
        markingMode: "none",
        suppressCallJSMethodExceptions: false,
	},
	appPath: 'src',
} as NativeScriptConfig;
