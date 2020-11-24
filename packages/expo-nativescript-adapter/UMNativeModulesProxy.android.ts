import { UMNativeModulesProxyBase, methodInfoArgumentsCountKey, methodInfoNameKey, methodInfoKeyKey, MethodInfo } from "./UMNativeModulesProxyCommon";
import type { ExpoEvent } from "./UMNativeModulesProxyCommon";

class UMNativeModulesProxy extends UMNativeModulesProxyBase {
    callMethod(moduleName: string, methodName: string, ...args: string[]): Promise<unknown> {
        throw new Error("Method not implemented.");
    }
    getConstant(moduleName: string, constantName: string): unknown {
        throw new Error("Method not implemented.");
    }
    get events(): ExpoEvent[] {
        throw new Error("Method not implemented.");
    }
}

export const umNativeModulesProxy = new UMNativeModulesProxy();
export type { ExpoEvent };