import { UMNativeModulesProxy } from './UMNativeModulesProxy';
import { ProxyNativeModule } from './NativeModulesProxy.types';
import { exportedMethodsKey, modulesConstantsKey } from "./UMNativeModulesProxyCommon";
import { NativeScriptModuleRegistryProvider } from './android-adapter/NativeScriptModuleRegistryProvider.android';
import { NativeScriptContext } from './android-adapter/NativeScriptContext.android';

const umNativeModulesProxy = new UMNativeModulesProxy(
  /**
   * TODO: Pass in a non-empty list of Packages.
   * @see NativeScriptAdapterModule.java
   * @see expo-flutter-adapter.java
   * 
   * @see expo/packages/expo-permissions/android/src/main/java/expo/modules/permissions/PermissionsPackage.kt
   */
  new NativeScriptModuleRegistryProvider(new java.util.ArrayList()),
  new NativeScriptContext(),
);

const NativeModulesProxy: { [moduleName: string]: ProxyNativeModule } = {};

/**
 * @see expo-flutter-adapter.java
 */
function marshalAndroid(nativeValue: unknown): any {
  throw new Error("marshalAndroid() not yet implemented.");
}

Object.keys(umNativeModulesProxy.constantsToExport[exportedMethodsKey]).forEach(moduleName => {
  NativeModulesProxy[moduleName] = (umNativeModulesProxy.constantsToExport[modulesConstantsKey][moduleName] || {}) as ProxyNativeModule;
  umNativeModulesProxy.constantsToExport[exportedMethodsKey][moduleName].forEach(methodInfo => {
    NativeModulesProxy[moduleName][methodInfo.name] = (...args: unknown[]): Promise<any> => {
      const { key, name, argumentsCount } = methodInfo;
      if (argumentsCount !== args.length) {
        return Promise.reject(
          new Error(
            `Native method ${moduleName}.${methodInfo.name} expects ${argumentsCount} ${
              argumentsCount === 1 ? 'argument' : 'arguments'
            } but received ${args.length}`
          )
        );
      }
      // return NativeProxy.callMethod(moduleName, key, args);
      return umNativeModulesProxy.callMethod(moduleName, name, ...args)
      .then((resolution: unknown) => {
        try {
          return marshalAndroid(resolution);
        } catch (error){
          throw new Error(`Failed to marshal native value to JS. Error: ${error.message || error}`);
        }
      })
    };
  });

  // These are called by EventEmitter (which is a wrapper for NativeEventEmitter)
  // only on iOS and they use iOS-specific native module, EXReactNativeEventEmitter.
  //
  // On Android only {start,stop}Observing are called on the native module
  // and these should be exported as Expo methods.
  NativeModulesProxy[moduleName].addListener = (...args) => {
    // NativeModules.UMReactNativeEventEmitter.addProxiedListener(moduleName, ...args);
    console.warn(`NativeModulesProxy[moduleName].addListener() is an iOS-only API; only a stub implementation is provided for Android.`);
  };
  NativeModulesProxy[moduleName].removeListeners = (...args) => {
    // NativeModules.UMReactNativeEventEmitter.removeProxiedListeners(moduleName, ...args);
    console.warn(`NativeModulesProxy[moduleName].removeListeners() is an iOS-only API; only a stub implementation is provided for Android.`);
  }
});

export default NativeModulesProxy;