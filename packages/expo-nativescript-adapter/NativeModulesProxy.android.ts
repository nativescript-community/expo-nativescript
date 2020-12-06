import { umNativeModulesProxy } from './UMNativeModulesProxy';
import { ProxyNativeModule } from './NativeModulesProxy.types';
import { exportedMethodsKey, modulesConstantsKey } from "./UMNativeModulesProxyCommon";

const NativeModulesProxy: { [moduleName: string]: ProxyNativeModule } = {};

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
});

export default NativeModulesProxy;