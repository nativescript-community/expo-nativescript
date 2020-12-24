# React demo

## Running the app

### Prerequisites

1. Ensure that you have followed the initial monorepo setup steps (`npm run setup` and `npm start`, selecting `@nativescript-community.build-all`, in the root directory of the monorepo).
2. Ensure you [have your environment set up for NativeScript development](https://react-nativescript.netlify.app/docs/getting-started/installation).
3. Run one of the following commands to build (if not yet built) and run the iOS app, depending on where you'd prefer your terminal to be focused:

### If your terminal is in `demo-react`

```sh
# Full NativeScript CLI options here: https://docs.nativescript.org/tooling/docs-cli/start
ns run ios
```

Android support is incomplete, so the equivalent `ns run android` command won't be of much use right now.

### If your terminal is in the root of the monorepo

You can alternatively use the nx workspace's convenience command, which simply runs `ns run ios` under-the-hood:

```sh
npm start
# Select: apps.demo-react.ios
```

Android support is incomplete, so the equivalent `apps.demo-react.android` command won't be of much use right now.