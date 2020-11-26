# @nativescript-community/expo-nativescript-adapter

An adapter to allow NativeScript to consume Expo Unimodules.

## Installation

```sh
npm install --save @unimodules/core
ns plugin add @nativescript-community/expo-nativescript-adapter
```

## Status

*See [@unimodules/react-native-adapter](https://github.com/expo/expo/tree/master/packages/%40unimodules/react-native-adapter) to understand what modules I'm referring to here.*

<table>
    <tbody>
        <tr>
            <td align="right" valign="bottom" rowspan="2">
                <h3>Feature</h3>
            </td>
            <td align="center" valign="middle" colspan="2">
                <h3>Support</h3>
            </td>
            <td align="left" valign="bottom" rowspan="2">
                <h3>Comments</h3>
            </td>
        </tr>
        <tr>
            <td align="center" valign="middle">
                <h3>iOS</h3>
            </td>
            <td align="center" valign="middle">
                <h3>Android</h3>
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3>Constants</h3>
            </td>
            <td align="center" valign="middle">
                ✅
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="left" valign="middle">
                Just need help writing the Android equivalent to <code>UMNativeModulesProxy.ios.ts</code>.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3>Methods</h3>
            </td>
            <td align="center" valign="middle">
                ✅
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="left" valign="middle">
                Just need help writing the Android equivalent to <code>UMNativeModulesProxy.ios.ts</code>.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3>Module registry</h3>
            </td>
            <td align="center" valign="middle">
                ✅
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="left" valign="middle">
                Just need help writing the Android equivalent to <code>UMNativeModulesProxy.ios.ts</code>.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3>Native modules proxy</h3>
            </td>
            <td align="center" valign="middle">
                ✅
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="left" valign="middle">
                Just need help filling in the Android implementation in <code>NativeModulesProxy.ts</code>.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3>Errors</h3>
            </td>
            <td align="center" valign="middle">
                ✅
            </td>
            <td align="center" valign="middle">
                ✅
            </td>
            <td align="left" valign="middle">
                This is simply a JS API, so there wasn't much to it!
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3>Events</h3>
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="left" valign="middle">
                Need help understanding NativeScript's event model to port <code>UMReactNativeEventEmitter</code>.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3>Logging</h3>
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="left" valign="middle">
                Need help understanding NativeScript's logging model to port <code>UMReactLogHandler</code>.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3>Fonts</h3>
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="left" valign="middle">
                Looks surmountable. Seems we'd need to implement <code>UMFontInterface</code>.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3>UI</h3>
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="left" valign="middle">
                We'll need to port <code>UMViewManagerAdapter</code> and <code>UMViewManagerAdapterRegistry</code>, which would involve implementing <code>RCTViewManager</code>. Not totally sure of feasibility, yet.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3>Bridge?</h3>
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="left" valign="middle">
                I'm not sure whether we need to implement <code>UMBridgeModule</code>. 🤷‍♂️
            </td>
        </tr>
    </tbody>
</table>


## Structure

`expo-nativescript-adapter` has the following peer dependencies:

* `@unimodules/core` – more specifically, its native modules for iOS (`UMCore`) and Android (`org.unimodules.core`).

Thus, you will need to explicitly install **both** `expo-nativescript-adapter` and `@unimodules/core` to use any Expo native module in NativeScript.

`@unimodules/core` implements a common API for all Expo Unimodules, and provides interfaces for platforms like NativeScript (and, in fact, React Native) to implement in order to "adapt" Expo Unimodules for the given platform.

## Usage

As a library user, you wouldn't be using these APIs directly.

As a library developer... more details to come. Until I've written up some docs, just see how we use it in `expo-permissions-nativescript-plugin` and `expo-contacts-nativescript-plugin`.

## License

MIT
