# @nativescript-community/expo-permissions-nativescript-plugin

```javascript
npm install --save @unimodules/core expo-permissions unimodules-permissions-interface
ns plugin add @nativescript-community/expo-nativescript-adapter
ns plugin add @nativescript-community/expo-permissions-nativescript-plugin
```

## Structure

`expo-permissions-nativescript-plugin` has the following peer dependencies:

* `@unimodules/core` – for its native modules for iOS (`UMCore`) and Android (`org.unimodules.core`), which implement a platform-agnostic API for consuming Expo Unimodules.
* `@nativescript-community/expo-nativescript-adapter` – to adapt Expo Unimodules to NativeScript.
* `expo-permissions` – for its native modules for iOS (`EXPermissions`) and Android (`expo.modules.permissions`).
* `unimodules-permissions-interface` – for its native modules for iOS (`UMPermissionsInterface`) and Android (`org.unimodules.interfaces.permissions`). It's the interface that `expo-permissions` implements.

## Status

*See [Permissions](https://docs.expo.io/versions/v39.0.0/sdk/permissions/) in the Expo SDK API docs for full documentation.*

<table>
    <tbody>
        <tr>
            <td align="right" valign="bottom" rowspan="2">
                <h3>API</h3>
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
                <h3><code>usePermissions</code> React hook</h3>
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="left" valign="middle">
                Has some kind of dependency on React Native. Won't boter implementing.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3>Everything else</h3>
            </td>
            <td align="center" valign="middle">
                ✅
            </td>
            <td align="center" valign="middle">
                ✅
            </td>
            <td align="left" valign="middle">
                Should just work! Note that Android support is pending implementation of <code>expo-nativescript-adapter</code>.
            </td>
        </tr>
    </tbody>
</table>

## Usage

*Again, see [Permissions](https://docs.expo.io/versions/v39.0.0/sdk/permissions/) in the Expo SDK API docs for full documentation.*

Note that you can *only* use `expo-permissions-nativescript-plugin` to check or request permissions for other Expo Unimodules that you have installed. So, for example, you wouldn't be able to use it to request Contacts permissions unless you also had `expo-contacts-nativescript-plugin` installed. That's just the way it works.

Also, before asking for any permission, just as with native app development, you will still need to have the corresponding property listed in the appropriate place in your app, for example:

* (for iOS): `App_Resources/iOS/Info.plist` file, e.g. `<key>NSContactsUsageDescription</key>`
* (for Android): `App_Resources/Android/src/main/AndroidManifest.xml` file, e.g. `<uses-permission android:name="android.permission.READ_CONTACTS" /> <uses-permission android:name="android.permission.WRITE_CONTACTS" />`.

... otherwise, your app may immediately crash without explanation 🤕

These NativeScript Expo plugins will not enter these properties for you; it's **your** responsibility to add them! Remember that when developing NativeScript apps, you'll have to run a rebuild of the app (e.g. `tns build ios`) to copy your latest `Info.plist` or `AndroidManifest.xml` into the app bundle; it's not simply something that Webpack will do for you in watch mode (to my understanding).

## License

MIT
