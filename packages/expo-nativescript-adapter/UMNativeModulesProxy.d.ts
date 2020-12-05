import type { UMNativeModulesProxyBase } from "./UMNativeModulesProxyCommon";
import type { ExpoEvent } from "./UMNativeModulesProxyCommon";

export declare class UMNativeModulesProxy extends UMNativeModulesProxyBase {
    constructor(provider: any);
    callMethod(moduleName: string, methodName: string, ...args: any[]): Promise<unknown>;
    getConstant(moduleName: string, constantName: string): unknown;
    get events(): ExpoEvent[];
}

export declare const umNativeModulesProxy: UMNativeModulesProxy;
export type { ExpoEvent };