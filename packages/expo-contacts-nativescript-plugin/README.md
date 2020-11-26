# @nativescript-community/expo-contacts-nativescript-plugin

```sh
npm install --save @unimodules/core expo-permissions unimodules-permissions-interface unimodules-file-system-interface expo-contacts
ns plugin add @nativescript-community/expo-nativescript-adapter
ns plugin add @nativescript-community/expo-permissions-nativescript-plugin
ns plugin add @nativescript-community/expo-contacts-nativescript-plugin

## Once our plugin for the file system is released, you may install these, too:
# npm install --save expo-file-system
# ns plugin add @nativescript-community/expo-file-system-nativescript-plugin
```

## Structure

`expo-contacts-nativescript-plugin` has the following peer dependencies:

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
                <h3><code>expo-contacts</code></h3>
            </td>
            <td align="center" valign="middle">
                <code>EXContacts</code>
            </td>
            <td align="center" valign="middle">
                <code>expo.modules.contacts</code>
            </td>
            <td align="left" valign="middle">
                Mandatory
            </td>
            <td align="left" valign="middle">
                Provides the Expo <a href="https://docs.expo.io/versions/v39.0.0/sdk/contacts/">Contacts</a> APIs.
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
                It's an interface that <code>expo-contacts</code> implements. Required for the app to build, even if you're not planning to use any permissions-related APIs.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3><code>unimodules-file-system-interface</code></h3>
            </td>
            <td align="center" valign="middle">
                <code>UMFileSystemInterface</code>
            </td>
            <td align="center" valign="middle">
                <code>org.unimodules.interfaces.filesystem</code>
            </td>
            <td align="left" valign="middle">
                Mandatory
            </td>
            <td align="left" valign="middle">
                It's an interface that <code>expo-contacts</code> implements. Required for the app to build, even if you're not planning to use any filesystem-related APIs.
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
                Optional
            </td>
            <td align="left" valign="middle">
                If you don't have this installed, you'll get an error "Error: Permissions module not found. Are you sure that Expo modules are properly linked" at runtime when trying to use the APIs <code>getPermissionsAsync()</code> and <code>requestPermissionsAsync()</code>.
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
        <tr>
            <td align="right" valign="middle">
                <h3><code>expo-file-system</code></h3>
            </td>
            <td align="center" valign="middle" rowspan="2">
                <code>EXFileSystem</code>
            </td>
            <td align="center" valign="middle" rowspan="2">
                <code>expo.modules.filesystem</code>
            </td>
            <td align="left" valign="middle" rowspan="2">
                Optional
            </td>
            <td align="left" valign="middle">
                If you don't have this installed, you'll get an error "Error: FileSystem module not found. Are you sure that Expo modules are properly linked" at runtime when trying to use the API <code>writeContactToFileAsync()</code>.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3><code>@nativescript-community/expo-file-system-nativescript-plugin</code></h3>
            </td>
            <td align="left" valign="middle">
                Same as above (this auto-installs the native modules for the above node module).
            </td>
        </tr>
    </tbody>
</table>

## Status

*See [Contacts](https://docs.expo.io/versions/v39.0.0/sdk/contacts/) in the Expo SDK API docs for full documentation.*

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
                <h3><code>createGroupAsync()</code></h3>
            </td>
            <td align="center" valign="middle">
                🥈
            </td>
            <td align="center" valign="middle">
                🥈
            </td>
            <td align="left" valign="middle">
                Unlike the corresponding Expo method, in this implementation, the <code>name</code> param is not optional; this is because the <code>uuidv4</code> library doesn't work out-of-the-box in NativeScript. I've left it up to the consumer to provide their own unique <code>name</code>.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3><code>writeContactToFileAsync()</code></h3>
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="left" valign="middle">
                The method is implemented, but we haven't ported <code>expo-file-system</code> to NativeScript yet, so this will fail at runtime in practice.
            </td>
        </tr>
        <tr>
            <td align="right" valign="middle">
                <h3><code>shareContactAsync()</code></h3>
            </td>
            <td align="center" valign="middle">
                🚫
            </td>
            <td align="center" valign="middle">
                ✅
            </td>
            <td align="left" valign="middle">
                On iOS, this requires writing to the file system. The method is implemented, but we haven't ported <code>expo-file-system</code> to NativeScript yet, so this will fail at runtime on iOS in practice.
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
                Implemented exactly as in Expo! Note that Android support is pending implementation of <code>expo-nativescript-adapter</code>.
            </td>
        </tr>
    </tbody>
</table>

## Usage

*Again, see [Contacts](https://docs.expo.io/versions/v39.0.0/sdk/contacts/) in the Expo SDK API docs for full documentation.*

In practice, you'll probably need to request permissions to access contacts before using just about any of the Contacts APIs; so you should probably start off by calling `getPermissionsAsync()` or `requestPermissionsAsync()`; these APIs, as noted above, require both `expo-permissions` and `@nativescript-community/expo-permissions-nativescript-plugin` to be installed.

## License

MIT
