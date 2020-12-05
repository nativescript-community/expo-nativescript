/// <reference path="./typings/java!android-17-core-5.5.1.d.ts" />
import { UMNativeModulesProxyBase, modulesConstantsKey, exportedMethodsKey, viewManagersNamesKey, methodInfoArgumentsCountKey, methodInfoNameKey, methodInfoKeyKey, MethodInfo } from "./UMNativeModulesProxyCommon";
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

    private static readonly UNEXPECTED_ERROR: string = "E_UNEXPECTED_ERROR";

    constructor(){
        super();
        
        // TODO

        // necessary when extending TypeScript constructors
        return global.__native(this);
    }

    getConstant(moduleName: string, constantName: string): unknown {
        if(!this.moduleExports[moduleName]){
            const error = new Error(`No exported module was found for the name "${moduleName}". Are you sure all the packages are linked correctly?`);
            error.name = "E_NO_MODULE";
            throw error;
        }
        if(!this.moduleExports[moduleName].constants){
            const error = new Error(`Module "${moduleName}" does not export any constants; unable to look up constant "${constantName}".`);
            error.name = "E_NO_CONSTANTS";
            throw error;
        }

        return this.moduleExports[moduleName].constants[constantName];
    }

    getConstants(): java.util.Map<string, any> {
        this.moduleRegistry.ensureIsInitialized();
        const exportedModules: Collection<ExportedModule> = this.moduleRegistry.getAllExportedModules();
        const viewManagers: Collection<ViewManager> = this.moduleRegistry.getAllViewManagers();
    
        const modulesConstants: java.util.Map<string, any> = new java.util.HashMap(exportedModules.size());
        const exportedMethodsMap: java.util.Map<string, any> = new java.util.HashMap(exportedModules.size());
        const viewManagersNames: List<string> = new java.util.ArrayList(viewManagers.size());

        exportedModules.forEach((exportedModule: ExportedModule) => {
            const moduleName: string = exportedModule.getName();
            modulesConstants.put(moduleName, exportedModule.getConstants());
      
            const exportedMethods: List<java.util.Map<string, any>> = this.transformExportedMethodsMap(exportedModule.getExportedMethods());
            this.assignExportedMethodsKeys(moduleName, exportedMethods);
      
            exportedMethodsMap.put(moduleName, exportedMethods);
        });

        viewManagers.forEach((viewManager: ViewManager) => {
            viewManagersNames.add(viewManager.getName());
        });
    
        const constants: java.util.Map<string, any> = new java.util.HashMap(2);
        constants.put(modulesConstantsKey, modulesConstants);
        constants.put(exportedMethodsKey, exportedMethodsMap);
        constants.put(viewManagersNamesKey, viewManagersNames);

        return constants;
    }

    /**
     * The only exported {@link ReactMethod}.
     * JavaScript can call native modules' exported methods ({@link ExpoMethod}) using this method as a proxy.
     * For native {@link ExpoMethod} `void put(String key, int value)` in `NativeDictionary` module
     * JavaScript could call `NativeModulesProxy.callMethod("NativeDictionary", "put", ["key", 42])`
     * or `NativeModulesProxy.callMethod("NativeDictionary", 2, ["key", 42])`, where the second argument
     * is a method's constant key.
     */
    callMethod(moduleName: string, methodKeyOrName: number|string, ...args: string[]): Promise<unknown> {
        let methodName: string;
        if(typeof methodKeyOrName === "string"){
            methodName = methodKeyOrName;
        } else if(typeof methodKeyOrName === "number"){
            methodName = this.exportedMethodsReverseKeys[moduleName][methodKeyOrName];
        } else {
            const error = new Error("Method key is neither a string nor a number – don't know how to map it to method name.");
            error.name = UMNativeModulesProxy.UNEXPECTED_ERROR;
            return Promise.reject(error);
        }

        if(!this.moduleExports[moduleName]){
            const error = new Error(`No exported module was found for the name "${moduleName}". Are you sure all the packages are linked correctly?`);
            error.name = "E_NO_MODULE";
            return Promise.reject(error);
        }
        if(!this.moduleExports[moduleName].methods){
            const error = new Error(`Module "${moduleName}" does not export any methods.`);
            error.name = "E_NO_METHODS";
            return Promise.reject(error);
        }
        if(!this.moduleExports[moduleName].methods[methodName]){
            const error = new Error(`Module "${moduleName}" does not export a method named "${methodName}".`);
            error.name = "E_NO_METHOD";
            return Promise.reject(error);
        }

        return this.moduleExports[moduleName].methods[methodName](...args);
    
        // try {
        //     const nativeArguments: List<any> = this.getNativeArgumentsForMethod(arguments, this.moduleRegistry.getExportedModule(moduleName).getExportedMethodInfos().get(methodName));
        //     /**
        //      * @see com.facebook.react.bridge.Promise
        //      * @see https://github.com/facebook/react-native/blob/d72e078df41f1ba2eb94e4eb4fb28b8d0232a8a1/ReactAndroid/src/main/java/com/facebook/react/bridge/Promise.java
        //      * @see com.facebook.react.bridge.PromiseImpl
        //      * @see https://github.com/facebook/react-native/blob/d72e078df41f1ba2eb94e4eb4fb28b8d0232a8a1/ReactAndroid/src/main/java/com/facebook/react/bridge/PromiseImpl.java
        //      */
        //     nativeArguments.add(new PromiseWrapper(promise));
        //     this.moduleRegistry.getExportedModule(moduleName).invokeExportedMethod(methodName, nativeArguments);
        // } catch (e) {
        //     const error = new Error("Encountered an exception while calling native method: " + e.message);
        //     error.name = UMNativeModulesProxy.UNEXPECTED_ERROR;
        //     return Promise.reject(error);
        // }
    }
    get events(): ExpoEvent[] {
        if(this._events === null){
            // TODO: Not sure how to set up events.
            console.warn(`Not implemented: NativeModulesProxyIos.prototype.events`);
            return [];
        }
        return this._events;
    }
}

export const umNativeModulesProxy = new UMNativeModulesProxy();
export type { ExpoEvent };