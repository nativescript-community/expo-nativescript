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
import { NativeScriptContext } from "./NativeScriptContext.android";

/**
 * @see NativeModulesProxy.java
 * @see expo-flutter-adapter.java
 */
class UMNativeModulesProxy extends UMNativeModulesProxyBase {
    /* TODO */
    // private readonly viewManagerClassesRegistry: UMViewManagerAdapterClassesRegistry = UMViewManagerAdapterClassesRegistry.alloc().init();
    private readonly moduleRegistry: org.unimodules.core.ModuleRegistry;
    private internalServicesModule?: InternalServicesModule;

    private static readonly UNEXPECTED_ERROR: string = "E_UNEXPECTED_ERROR";
    /**
     * Each NativeScript-adapted Expo plugin must call UMNativeModulesProxy.addPackage() to add
     * the corresponding Expo package (e.g. expo-permissions) to this list of packages.
     * 
     * The one thing we need to be careful to coordinate is that this array must be populated by
     * the time we construct this instance. This may require moving logic out of the constructor
     * and performing a post-init operation instead.
     * 
     * @see ReactPackagesProvider.java to see how to decouple it from NativeModulesProxy.
     * @see ExpoPermissionsPlugin.java
     * @example
        public class ExpoPermissionsPlugin {
            public static void registerWith(Registrar registrar) {
                ExpoFlutterAdapterPlugin.addPackage(new PermissionsPackage());
            }
        }
     */
    private static readonly sInitialPackages: List<Package> = new java.util.ArrayList();

    static addPackages(packages: List<Package>): void {
        UMNativeModulesProxy.sInitialPackages.addAll(packages);
    }

    static addPackage(pkg: Package): void {
        UMNativeModulesProxy.sInitialPackages.add(pkg);
    }

    // ExpoFlutterAdapterPlugin.addPackage(new PermissionsPackage());

    constructor(private provider: NativeScriptModuleRegistryProvider, context: NativeScriptContext){
        super();
        
        this.moduleRegistry = this.provider.get(context);
        this.moduleRegistry.initialize();

        /**
         * TODO: handle InternalModules
         * @see ReactModuleRegistryProvider.java
         */

        this.moduleRegistry.ensureIsInitialized(); // Likely redundant – but seen in getConstants()
        const exportedModules: Collection<ExportedModule> = this.moduleRegistry.getAllExportedModules();
        exportedModules.forEach((module: ExportedModule) => {
            const moduleName: string = module.getName();
            this.moduleExports[moduleName] = {};
            this.constantsToExport[exportedMethodsKey][moduleName] = [];
    
            this.initialiseExportedMethods(module, moduleName);
            this.initialiseExportedConstants(module, moduleName);
        });

        const viewManagers: Collection<ViewManager> = this.moduleRegistry.getAllViewManagers();
        viewManagers.forEach((module: ViewManager) => {
            const moduleName: string = module.getName();
            this.constantsToExport[viewManagersNamesKey].push(moduleName);
        });

        // necessary when extending TypeScript constructors
        return global.__native(this);
    }

    private initialiseExportedConstants(module: ExportedModule, moduleName: string): void {
        const constants: java.util.Map<string, any>|null = module.getConstants();
        if(constants === null){
            this.constantsToExport[modulesConstantsKey][moduleName] = null;
            return;
        }

        this.constantsToExport[modulesConstantsKey][moduleName] = {};
        constants.forEach((key: string, value: any) => {
            this.constantsToExport[modulesConstantsKey][moduleName][key] = value;

            if(!this.moduleExports[moduleName].constants){
                this.moduleExports[moduleName].constants = {};
            }
            this.moduleExports[moduleName].constants[key] = value;
        });     
    }

    private initialiseExportedMethods(module: ExportedModule, moduleName: string): void {
        const methods: java.util.Map<string, java.lang.reflect.Method>|null = module.getExportedMethods();
        if(methods === null){
            console.warn(`module.getExportedMethods() returned null for moduleName "${moduleName}"`);
            return;
        }

        const methodInfos: MethodInfo[] = new Array(methods.size());
        methods.entrySet().forEach((entry: java.util.Map.Entry<string, java.lang.reflect.Method>) => {
            const exportedName: string = entry.getKey();
            const method: java.lang.reflect.Method = entry.getValue();

            if(!this.moduleExports[moduleName].methods){
                this.moduleExports[moduleName].methods = {};
            }

            if(!this.moduleExports[moduleName].methods){
                this.moduleExports[moduleName].methods = {};
            }


            methodInfos.push({
                [methodInfoNameKey]: exportedName,
                // - 1 is for the Promise
                [methodInfoArgumentsCountKey]: method.getParameterTypes().length - 1,
            });

            this.moduleExports[moduleName].methods[exportedName] = function callNativeMethod<T = unknown>(): Promise<T> {
                const argumentsArray: any[] = Array.from(arguments);
                const argumentsCollection: Collection<any> = new java.util.ArrayList(argumentsArray.length + 1);
                for(let i = 0; i < argumentsArray.length; i++){
                    argumentsCollection.add(argumentsArray[i]);
                }
                
                return new Promise<T>((resolve, reject) => {
                    try {
                        argumentsCollection.add(new PromiseWrapper<T>(resolve, reject));
                        module.invokeExportedMethod(
                            exportedName,
                            argumentsCollection,
                        )
                    } catch (e) {
                        reject(e);
                    }
                });
            };
        });

        this.assignExportedMethodsKeys(methodInfos, moduleName);
    }

    private assignExportedMethodsKeys(exportedMethods: MethodInfo[], moduleName: string) {
        if(!this.exportedMethodsKeys[moduleName]){
            this.exportedMethodsKeys[moduleName] = {};
        }
        if(!this.exportedMethodsReverseKeys[moduleName]){
            this.exportedMethodsReverseKeys[moduleName] = {};
        }
        for(let i = 0; i < exportedMethods.length; i++){
            const methodInfo = exportedMethods[i];

            if(typeof methodInfo[methodInfoNameKey] !== "string"){
                throw new Error(`Empty method name in method info: Method info of a method in module ${moduleName} has no method name.`);
            }

            const methodName: string = methodInfo[methodInfoNameKey];
            const previousIndex: number|undefined = this.exportedMethodsKeys[moduleName][methodName];
            // The strict check is accurate here, for consistency with the React Native Android adapter implementation.
            if(typeof previousIndex === "number"){
                const newKey: number = Object.keys(this.exportedMethodsKeys[moduleName]).length;
                methodInfo[methodInfoKeyKey] = newKey;
                this.exportedMethodsKeys[moduleName][methodName] = newKey;
                this.exportedMethodsReverseKeys[moduleName][newKey] = methodName;
            } else {
                methodInfo[methodInfoKeyKey] = previousIndex;
            }
        }
    }

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

    get events(): ExpoEvent[] {
        if(this._events === null){
            // TODO: Not sure how to set up events.
            console.warn(`Not implemented: NativeModulesProxyIos.prototype.events`);
            return [];
        }
        return this._events;
    }
}

@NativeClass
class PromiseWrapper<T> extends org.unimodules.core.Promise {
    private readonly _resolve: (value?: T | PromiseLike<T>) => void;
    private readonly _reject: (reason?: any) => void;

    constructor(
        resolve: (value?: T | PromiseLike<T>) => void,
        reject: (reason?: any) => void,
    ){
        super();

        this._resolve = resolve;
        this._reject = reject;

        // necessary when extending TypeScript constructors
        return global.__native(this);
    }

    resolve(value: T): void {
        this._resolve(value);
    }

    reject(code: string, message: string, throwable: java.lang.Throwable): void; // 0
    reject(throwable: java.lang.Throwable): void; // 1
    reject(code: string, message: string): void; // 2
    reject(code: string, throwable: java.lang.Throwable): void; // 3
    reject(
        codeOrThrowable: string|java.lang.Throwable,
        messageOrThrowable?: string|java.lang.Throwable,
        throwable?: java.lang.Throwable,
    ): void {
        const sw: java.io.StringWriter = new java.io.StringWriter();
        const pw: java.io.PrintWriter = new java.io.PrintWriter(sw);

        let optionalCode: string|undefined;
        let optionalMessage: string|undefined;
        let optionalThrowable: java.lang.Throwable|undefined;

        if(typeof codeOrThrowable === "string"){
            // Overload 0|2|3
            optionalCode = codeOrThrowable;
            if(typeof messageOrThrowable === "string"){
                // Overload 0|2
                optionalMessage = messageOrThrowable;
                if(typeof throwable === "undefined"){
                    // Overload 2
                } else {
                    // Overload 0
                    optionalThrowable = throwable;
                }
            } else if(typeof messageOrThrowable !== "undefined"){
                // Overload 3
                optionalThrowable = messageOrThrowable;
            }
        } else {
            // Overload 1
            optionalThrowable = codeOrThrowable;
        }

        if(optionalThrowable){
            optionalThrowable.printStackTrace(pw);
        }

        const error = new Error(optionalMessage || "Unknown error");
        error.name = "EXPO_MODULE_ERROR";
        /* Let's not set the code, for now. */
        // if(optionalCode){
        //     (error as any).code = optionalCode;
        // }

        this._reject(error);
    }
}

export const umNativeModulesProxy = new UMNativeModulesProxy(
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
export type { ExpoEvent };