# @nativescript-community/expo-permissions-nativescript-plugin

```sh
npm install --save @unimodules/core expo-permissions unimodules-permissions-interface
ns plugin add @nativescript-community/expo-nativescript-adapter
ns plugin add @nativescript-community/expo-permissions-nativescript-plugin
```

## Structure

`expo-permissions-nativescript-plugin` has the following peer dependencies:

<table>
    <tbody>
        <tr>
            <td align="right" valign="bottom" rowspan="2">
                <h3>Package</h3>
            </td>
            <td align="center" valign="middle" colspan="2">
                <h3>Native Module</h3>
            </td>
            <td align="center" valign="bottom" rowspan="2">
                <h3>Optional?</h3>
            </td>
            <td align="left" valign="bottom" rowspan="2">
                <h3>Purpose</h3>
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
                <h3><code>@unimodules/core</code></h3>
            </td>
            <td align="center" valign="middle">
                <code>UMCore</code>
            </td>
            <td align="center" valign="middle">
                <code>org.unimodules.core</code>
            </td>
            <td align="left" valign="middle">
                Mandatory
            </td>
            <td align="left" valign="middle">
                Implements the platform-agnostic API for consuming Expo Unimodules.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3><code>@nativescript-community/expo-nativescript-adapter</code></h3>
            </td>
            <td align="center" valign="middle">
                <code>UMNativeModulesProxy</code>
            </td>
            <td align="center" valign="middle">
                <code>org.unimodules.adapters.nativescript</code>
            </td>
            <td align="left" valign="middle">
                Mandatory
            </td>
            <td align="left" valign="middle">
                Adapts Expo Unimodules to NativeScript (and auto-installs the native modules for the above node module).
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3><code>unimodules-permissions-interface</code></h3>
            </td>
            <td align="center" valign="middle">
                <code>UMPermissionsInterface</code>
            </td>
            <td align="center" valign="middle">
                <code>org.unimodules.interfaces.permissions</code>
            </td>
            <td align="left" valign="middle">
                Mandatory
            </td>
            <td align="left" valign="middle">
                It's the interface that <code>expo-permissions</code> implements.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3><code>expo-permissions</code></h3>
            </td>
            <td align="center" valign="middle" rowspan="2">
                <code>EXPermissions</code>
            </td>
            <td align="center" valign="middle" rowspan="2">
                <code>expo.modules.permissions</code>
            </td>
            <td align="left" valign="middle" rowspan="2">
                Mandatory
            </td>
            <td align="left" valign="middle">
                Provides the Expo <a href="https://docs.expo.io/versions/v39.0.0/sdk/permissions/">Permissions</a> APIs.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3><code>@nativescript-community/expo-permissions-nativescript-plugin</code></h3>
            </td>
            <td align="left" valign="middle">
                Same as above (this auto-installs the native modules for the above node module).
            </td>
        </tr>
    </tbody>
</table>


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
