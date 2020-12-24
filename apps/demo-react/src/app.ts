import * as React from 'react';

/* Controls react-nativescript log verbosity. true: all logs; false: only error logs. */
Object.defineProperty(global, '__DEV__', { value: false });

/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import * as ReactNativeScript from 'react-nativescript';
import { mainStackNavigator as AppContainer } from './components/Navigator';

ReactNativeScript.start(React.createElement(AppContainer, {}, null));

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/

/* BEGIN NOTE TO SELF: How I got expo.modules.permissions (though apparently none of its constituent Kotlin files) to compile for Android.
 * I used @nativescript-community/expo-permissions for the Android implementation
 * and @nativescript-community/expo-permissions-nativescript-plugin + expo-permissions to provide both the iOS implementation and
 * cross-platform TS implementation.
 * @nativescript-community/react-native-shim may or may not have been needed. Maybe it unexpectedly just worked.
 * As a next step, we could move the contents of @nativescript-community/expo-permissions into the android folder of
 * @nativescript-community/expo-permissions-nativescript-plugin.
 */
// rootProject.name = "plugindemoreact"
// include ':app'//, ':runtime', ':runtime-binding-generator'

// //project(':runtime').projectDir = new File("${System.env.ANDROID_RUNTIME_HOME}/test-app/runtime")
// //project(':runtime-binding-generator').projectDir = new File("${System.env.ANDROID_RUNTIME_HOME}/test-app/runtime-binding-generator")

// file("google-services.json").renameTo(file("./app/google-services.json"))

// include ':expo-permissions'
// project(':expo-permissions').projectDir = new File(rootProject.projectDir, '../../node_modules/@nativescript-community/expo-permissions/platforms/android')

// // throw new GradleException('Got this far: ' + project(':expo-permissions').projectDir);

// include ':unimodules-permissions-interface'
// project(':unimodules-permissions-interface').projectDir = new File(rootProject.projectDir, '../../node_modules/unimodules-permissions-interface/android')

// /** ':unimodules-core' injected support START **/
// // Everything from here until the corresponding END comment will be subject to text replacement upon '@nativescript-community/expo-nativescript-adapter' plugin installation.
// include ':unimodules-core'
// project(':unimodules-core').projectDir = new File(rootProject.projectDir, '../../node_modules/@unimodules/core/android')
// /** ':unimodules-core' injected support END **/
/* END NOTE TO SELF */