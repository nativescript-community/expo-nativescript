import { UMNativeModulesProxy } from './UMNativeModulesProxy';
import { ProxyNativeModule } from './NativeModulesProxy.types';
import { exportedMethodsKey, modulesConstantsKey } from "./UMNativeModulesProxyCommon";

const umNativeModulesProxy = new UMNativeModulesProxy(UMModuleRegistryProvider.alloc().init());
const NativeModulesProxy: { [moduleName: string]: ProxyNativeModule } = {};

/**
 * As React Native has always been limited to JSON communication, we can expect to be dealing with JSON-serialisable values.
 * @see https://twitter.com/sjchmiela/status/1330499930994171904?s=20
 * 
 * ... with the exception of some methods that resolve nil, which we should translate as undefined.
 * We'd only get nil as the resolution itself, rather than a nested property in the NSDictionary, though.
 * @see https://twitter.com/sjchmiela/status/1330500505706127363?s=20
 */
function marshalIos(nativeValue: unknown): any {
  if(nativeValue instanceof NSDictionary){
    const obj: any = {};
    nativeValue.enumerateKeysAndObjectsUsingBlock((key: string, value: any, stop: interop.Reference<boolean>) => {
      obj[key] = marshalIos(value);
    });
    return obj;
  } else if (nativeValue instanceof NSArray){
    const arr: any[] = [];
    nativeValue.enumerateObjectsUsingBlock((value: any, index: number, stop: interop.Reference<boolean>) => {
      arr[index] = marshalIos(value);
    });
    return arr;
  } else {
    /**
     * NSDate, NSString, NSNumber, and NSNull should all be automatically marshalled as Date, string, number, and null.
     * @see https://docs.nativescript.org/core-concepts/ios-runtime/marshalling-overview#primitive-exceptions
     * 
     * NULL, Nil, and nil are all implicitly converted to null.
     * @see https://docs.nativescript.org/core-concepts/ios-runtime/marshalling-overview#null-values
     */
    return nativeValue as Date|string|number|null;
  }
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
        if(resolution === null){
          /**
           * If the resolution itself (rather than the value of an NSDictionary field) is null, then we can assume it's an Obj-C nil value.
           * @see marshalIos
           */
          return void 0;
        }

        try {
          return marshalIos(resolution);
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
    console.warn(`NativeModulesProxy[moduleName].addListener() hasn't been implemented yet.`);
  };
  NativeModulesProxy[moduleName].removeListeners = (...args) => {
    // NativeModules.UMReactNativeEventEmitter.removeProxiedListeners(moduleName, ...args);
    console.warn(`NativeModulesProxy[moduleName].removeListeners() hasn't been implemented yet.`);
  }
});

export default NativeModulesProxy;