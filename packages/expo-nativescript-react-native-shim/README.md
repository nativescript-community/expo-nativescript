# @nativescript-community/expo-nativescript-react-native-shim

## About

This plugin provides any React Native dependencies that any Expo modules depend upon. For now, that constitutes just a couple of interfaces depended upon by the Android native implementation of `expo-permissions`.

As we've had to fork `expo-permissions` anyway, we might later merge this into `@nativescript-community/expo-permissions` and remove this package altogether.

There is no JS/TS code distributed by this shim, so as this also contains no iOS native code, installing it in an iOS project is fine and won't affect the app size.

## Installation

```javascript
ns plugin add @nativescript-community/expo-nativescript-react-native-shim
```

## License

MIT
