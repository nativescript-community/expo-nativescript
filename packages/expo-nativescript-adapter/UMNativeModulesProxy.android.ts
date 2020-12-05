/// <reference path="./typings/java!android-17-core-5.5.1.d.ts" />
import { UMNativeModulesProxyBase, methodInfoArgumentsCountKey, methodInfoNameKey, methodInfoKeyKey, MethodInfo } from "./UMNativeModulesProxyCommon";
import type { ExpoEvent } from "./UMNativeModulesProxyCommon";
import { NativeScriptAdapterPackage } from "./android-adapter/NativeScriptAdapterPackage.android";
import type {
    ExportedModule,
    ModuleRegistry,
    ModuleRegistryProvider,
    ViewManager,
    Function,
    InternalModule,
    Package,
    SingletonModule,
    List,
    Collection,
    Context,

    NativeScriptApplicationContext,
    NativeScriptViewManager,
    NativeModule,
} from "./android-adapter/nativeTypeAliases.android";
import { NativeScriptModuleRegistryProvider } from "./android-adapter/NativeScriptModuleRegistryProvider.android";

/**
 * @see NativeModulesProxy.java
 */
class UMNativeModulesProxy extends UMNativeModulesProxyBase {
    /* TODO */
    // private readonly viewManagerClassesRegistry: UMViewManagerAdapterClassesRegistry = UMViewManagerAdapterClassesRegistry.alloc().init();
    private readonly provider: UMModuleRegistryProvider = UMModuleRegistryProvider.alloc().init();
    private readonly moduleRegistry: org.unimodules.core.ModuleRegistry;
    private internalServicesModule?: InternalServicesModule;

    constructor(){
        super();
        
        // TODO

        // necessary when extending TypeScript constructors
        return global.__native(this);
    }

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