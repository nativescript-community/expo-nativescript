# @nativescript-community/expo-nativescript

This is a monorepo of various libraries from the [Expo ecosystem](https://docs.expo.io/versions/latest/), which is primarily a React Native ecosystem, adapted for use with NativeScript. The endgame is for the Expo ecosystem (or at least Expo [Unimodules](https://www.youtube.com/watch?v=-9CJZRv7uOY), which are [a large part of it](https://docs.expo.io/bare/unimodules-full-list/)) to be fully supported on NativeScript as it is on React Native. But this is a long way off for now!

It's in proof-of-concept stage right now. Expo <a href="https://docs.expo.io/versions/v39.0.0/sdk/contacts/">Contacts</a> (and Expo <a href="https://docs.expo.io/versions/v39.0.0/sdk/permissions/">Permissions</a>, which it depends upon) is working fully on iOS. Android support is blocked, however – [see details](packages/expo-nativescript-adapter/README.md) in the `expo-nativescript-adapter` project.

Please don't look too closely at [apps/demo](apps/demo) and [apps/demo-angular](apps/demo-angular), as I have only been developing with [demo-react](apps/demo-react). They're there only as templates to be filled in properly later.

I hope at some point to simplify this monorepo by removing the packages [@nativescript-community/expo-permissions](packages/expo-permissions) and [@nativescript-community/expo-nativescript-react-native-shim](packages/expo-nativescript-react-native-shim), which only exist to support Android. But for now, we have to put up with them.

And as Android support still isn't working even with best-effort hacks, I'll only be publishing [@nativescript-community/expo-nativescript-adapter](packages/expo-nativescript-adapter), [@nativescript-community/expo-permissions-nativescript-plugin](packages/expo-permissions-nativescript-plugin), and [@nativescript-community/expo-contacts-nativescript-plugin](packages/expo-contacts-nativescript-plugin) to npm for now.

For more information on this project (and particularly if you'd like to help – especially so if it's for getting the Android side working), you can contact Jamie Birch on Twitter at [@LinguaBrowse](https://twitter.com/intent/follow?screen_name=LinguaBrowse), or on the [NativeScript Slack](https://app.slack.com/client/T0L97VCSY/CJ2B77CJ1) in the `#react` channel, or on the [NativeScript Discord](https://discord.com/channels/603595811204366337/606457751995940866), again in the `#react` channel.

<a href="https://twitter.com/intent/follow?screen_name=LinguaBrowse">
    <img src="https://img.shields.io/twitter/follow/LinguaBrowse.svg?style=social&logo=twitter"/>
</a>

```
npm run setup
npm start
```

# What are these packages?

As this project grows, we aim to implement, for each Expo Unimodule such as `expo-contacts`, a corresponding `@nativescript-community/expo-contacts-nativescript-plugin` NativeScript plugin.

<table>
    <tbody>
        <tr>
            <td align="right">
                <h3><a href="/nativescript-community/expo-nativescript/packages/expo-contacts-nativescript-plugin">expo-contacts-nativescript-plugin</a></h3>
            </td>
            <td align="left">
                <h3>The Expo SDK's <a href="https://docs.expo.io/versions/v39.0.0/sdk/contacts/">Contacts</a> API, implemented for NativeScript, using the exact same <a href="https://github.com/expo/expo/tree/master/packages/expo-contacts">expo-contacts</a> native code and largely a copy-paste of the TypeScript code. Developed with reference to the now-removed <a href="https://github.com/expo/expo/tree/a2aad4ea6e9f327d03a9852102e18387420f3254/packages/expo-contacts-flutter-plugin">expo-contacts-flutter-plugin</a>.</h3>
            </td>
        </tr>
        <tr>
            <td align="right">
                <h3><a href="/nativescript-community/expo-nativescript/packages/expo-nativescript-adapter">expo-nativescript-adapter</a></h3>
            </td>
            <td align="left">
                <h3>An implementation of all the Expo APIs (e.g. module registration and function-calling) for NativeScript. Essentially a port of <a href="https://github.com/expo/expo/tree/master/packages/%40unimodules/react-native-adapter">@unimodules/react-native-adapter</a> to Nativescript (with reference to the now-removed <a href="https://github.com/expo/expo/tree/a2aad4ea6e9f327d03a9852102e18387420f3254/packages/expo-flutter-adapter">expo-flutter-adapter</a>).</h3>
            </td>
        </tr>
        <tr>
            <td align="right">
                <h3><a href="/nativescript-community/expo-nativescript/packages/expo-nativescript-react-native-shim">expo-nativescript-react-native-shim</a></h3>
            </td>
            <td align="left">
                <h3>A shim for any interfaces from the React Native ecosystem that Expo plugins rely upon. Currently only relevant to the Android implementation of expo-permissions, implementing the <a href="https://github.com/facebook/react-native/blob/3b31e69e284074da72108edfb11e41ee74d7100e/ReactAndroid/src/main/java/com/facebook/react/modules/core/PermissionAwareActivity.java">PermissionAwareActivity</a> and <a href="https://github.com/facebook/react-native/blob/3b31e69e284074da72108edfb11e41ee74d7100e/ReactAndroid/src/main/java/com/facebook/react/modules/core/PermissionListener.java">PermissionListener</a> interfaces.</h3>
            </td>
        </tr>
        <tr>
            <td align="right">
                <h3><a href="/nativescript-community/expo-nativescript/packages/expo-permissions">expo-permissions</a></h3>
            </td>
            <td align="left">
                <h3>A fork of <a href="https://github.com/expo/expo/tree/master/packages/expo-permissions">expo-permissions</a> (distinguished by namespacing it under the @nativescript-community organisation), differing only by changing the Android code to make it easier for NativeScript to build. No success yet.</h3>
            </td>
        </tr>
        <tr>
            <td align="right">
                <h3><a href="/nativescript-community/expo-nativescript/packages/expo-permissions-nativescript-plugin">expo-permissions-nativescript-plugin</a></h3>
            </td>
            <td align="left">
                <h3>The Expo SDK's <a href="https://docs.expo.io/versions/v39.0.0/sdk/permissions/">Permissions</a> API, implemented for NativeScript, using the exact same <a href="https://github.com/expo/expo/tree/master/packages/expo-permissions">expo-permissions</a> native code and largely a copy-paste of the TypeScript code. Developed with reference to the now-removed <a href="https://github.com/expo/expo/tree/a2aad4ea6e9f327d03a9852102e18387420f3254/packages/expo-permissions-flutter-plugin">expo-permissions-flutter-plugin</a>.</h3>
            </td>
        </tr>
    </tbody>
</table>

# How to operate this monorepo?

This workspace manages the suite of plugins listed above.

In general, when in doubt with what to do, just `npm start`.

## How to add a new package to workspace?

```
npm run add
```

At the prompt, enter the name of the new package.

- This adds a plugin harness in `packages` with the necessary boilerplate to just start developing
- Updates all demo app flavors to support demoing the new package
- Adds shared code in `tools/demo` where you can write demo code **once** and share across all demo flavors
- Updates build tooling to support the new package
- Updates the `npm start` interactive display
- Updates the README here to list the new package

## How to add Angular compatibility to a package

```
npm run add-angular
```

At the prompt, enter the name of the package to add an `angular` folder to it with the necessary boilerplate to provide Angular support to the package.

## How to focus on just 1 package to develop in isolation

```
npm start
```

- Choose the focus commands for the package you wish to focus on and hit enter.
- All the demo app's will be updated to isolate that 1 package and for supported IDE's (currently VS Code), the source code will also become isolated in the workspace.

Note: _good to always clean the demo you plan to run after focusing. (You can clean any demo from `npm start` as well)_

## How to publish packages?

```
npm run publish-packages
```

- You will be prompted for the package names to publish. Leaving blank and hitting enter will publish them all.
- You will then be prompted for the version to use. Leaving blank will auto bump the patch version (it also handles prerelease types like alpha, beta, rc, etc. - It even auto tags the corresponding prelease type on npm).
- You will then be given a brief sanity check 🧠😊

<h3 align="center">Made with ❤️</h3>

## Why don't we hoist `@nativescript/android` and `@nativescript/ios` in this monorepo?

See https://github.com/NativeScript/nativescript-cli/issues/5444
