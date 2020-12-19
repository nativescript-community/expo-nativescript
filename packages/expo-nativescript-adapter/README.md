# @nativescript-community/expo-nativescript-adapter

An adapter to allow NativeScript to consume Expo Unimodules.

## Installation

```sh
npm install --save @unimodules/core
ns plugin add @nativescript-community/expo-nativescript-adapter
```

## Structure

`expo-nativescript-adapter` has the following peer dependencies:

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
    </tbody>
</table>

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
                Blocked on the Android adapter. See "Android support" section below.
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
                Blocked on the Android adapter. See "Android support" section below.
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
                Blocked on the Android adapter. See "Android support" section below.
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

### Android support 🚧

I've spent weeks trying to implement Android support, but there are difficulties on both the Expo/React Native side and the NativeScript side, so I am stuck and need proper help on this front.

* **`expo-permissions` imports two interfaces from React Native**, which is why I've had to introduce `expo-nativescript-react-native-shim` to provide those interfaces. I think that's working by now, but there might be a race condition involving order of installation. Not too sure.
* **Unimodules expect to find a `package.json` file in the parent directory of the Android app root** (otherwise it will throw a `GradleException`); this means the `platforms` folder for NativeScript. As a workaround, I've written a hook in `expo-nativescript-adapter` to populate a dummy `package.json` in that location, but of course hooks are limited and very fragile to depend upon.
* **React Native plugins typically build from native source bundled in `node_modules`**, rather than downloading JARs/AARs from an online repository. This is simply not a pattern used in NativeScript development, so there is no prior art to study as regards best practices. One particular issue is that Gradle projects *must* be declared up front, in the app's `settings.gradle` – you cannot simply declare them in each plugin's `include.gradle`. This is an enormous pain, as NativeScript provides no APIs to modify `settings.gradle`. So again, I've written some hooks to populate it, but inevitably they are fragile.
* `expo-permissions` – and if I recall, various other Expo Unimodules – **are written in Kotlin** rather than Java. Although it seems possible to consume JARs/AARs that were generated from Kotlin sources, I have not found any prior art regarding creating NativeScript plugins by compiling directly from local Kotlin sources. I've tried various approaches, but even though I can get the Kotlin to compile to a JAR, I find it to contain no classes except `BuildConfig.class` inside.
* **Expo Unimodules need to register themselves into the Expo Adapter at the start of the app's lifecycle.** Aside from the difficulty of implementing the necessary `Package` API for each plugin, NativeScript doesn't provide any lifecycle hooks for the plugins to auto-register themselves before the user-land code begins. Flutter, by contrast, does, through its `registerWithRegistrar` plugins API. React Native might admittedly be a bit more fiddly, but at least has a far more flexible build system for Android apps than NativeScript has. The only workaround I can think of for this would be to force the user to write some code into their NativeScript app's entrypoint (`app.ts`) which would call a `register()` function exported by each plugin. Yet again, this would introduce greater onboarding friction and chance of failure, and would be purely to fill in support for Android.
* Generating TypeScript typings for the native sources of NativeScript plugins, while reasonably easy for iOS, **is seriously laborious for Android**.
* Unlike on iOS (as far as I've seen), **Unimodules for Android depend upon a concept of "Application Context"**. This is a significant extra complexity which entails hooking up NativeScript app lifecycle events to the Expo NativeScript Adapter. I've tried to stub it out for now, but I've no idea how that'll go.

So although I've made a lot of progress on all fronts, I've decided to wave the towel. **If anyone can get `expo-permissions` to compile for Android** (such that we could access its APIs via the NativeScript Android runtime), that would unblock me and I could have another try. But until then, I'm truly stuck and won't be spending any more time on Android support.

## Usage

As a library user, you wouldn't be using these APIs directly. See `apps/demo-react` for examples of invoking the APIs; they're designed to map 1:1 to the Expo React Native APIs (as those are also written in TypeScript).

As a library developer... more details to come. Until I've written up some docs, just see how we use it in `expo-permissions-nativescript-plugin` and `expo-contacts-nativescript-plugin`.

## License

MIT
