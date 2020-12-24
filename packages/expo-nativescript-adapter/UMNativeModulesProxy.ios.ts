/// <reference path="./typings/objc!UMCore.d.ts" />

import { UMNativeModulesProxyBase, methodInfoArgumentsCountKey, methodInfoNameKey, methodInfoKeyKey, MethodInfo, modulesConstantsKey, viewManagersNamesKey, exportedMethodsKey } from "./UMNativeModulesProxyCommon";
import type { ExpoEvent } from "./UMNativeModulesProxyCommon";

export class UMNativeModulesProxy extends UMNativeModulesProxyBase {
    /* TODO */
    // private readonly viewManagerClassesRegistry: UMViewManagerAdapterClassesRegistry = UMViewManagerAdapterClassesRegistry.alloc().init();
    // private readonly provider: UMModuleRegistryProvider = UMModuleRegistryProvider.alloc().init();
    private readonly moduleRegistry: UMModuleRegistry;
    private internalServicesModule?: InternalServicesModule;

    /**
     * @param provider the Unimodules registry provider.
     * @param context Android-only; ignored by iOS.
     */
    constructor(private provider: UMModuleRegistryProvider, context?: any){
        super();
        
        this.moduleRegistry = this.provider.moduleRegistry();

        /**
         * One could add some modules to the Module Registry after creating it.
         * Here is our last call for finalizing initialization.
         * @see https://github.com/expo/expo/blob/c2f6f870ca5059a9157320c0ba72ce1f38e93f31/packages/%40unimodules/react-native-adapter/ios/UMReactNativeAdapter/UMModuleRegistryAdapter/UMModuleRegistryAdapter.m#L66
         */
        this.moduleRegistry.initialize();

        /**
         * The internal modules are effectively a collection of all the modules that UM_REGISTER_MODULE() was called for.
         * 
         * @see expo/packages/unimodules/core/ios/UMCore/UMModuleRegistryProvider/UMModuleRegistryProvider.m
         * @see https://github.com/expo/expo/blob/79d295e4b31fa44ebb74eaf3bceb5329d9cfbb3d/packages/%40unimodules/core/ios/UMCore/UMModuleRegistryProvider/UMModuleRegistryProvider.m#L115-L139
         * 
         * @example <UMUtilities: 0x600001bd3970>
         * @example <EXReactNativeUserNotificationCenterProxy: 0x600001bd39c0>
         * @example <EXPermissions: 0x6000017fb5a0>
         * 
         * The Obj-C runtime doesn't seem to call load for us (even though it would
         * for a true Obj-C class), so we'll call it ourselves. It's safe to call again.
         */
        const internalModules: NSArray<UMInternalModule> = this.moduleRegistry.getAllInternalModules();
        for(let i = 0; i < internalModules.count; i++){
            const module: UMInternalModule = internalModules[i];
            if(module.isKindOfClass(InternalServicesModule)){
                this.initialiseInternalService(module);
                break;
            }
        }

        const exportedModules: NSArray<UMExportedModule> = this.moduleRegistry.getAllExportedModules();
        for(let i = 0; i < exportedModules.count; i++){
            const module: UMExportedModule = exportedModules[i];
            const moduleName: string = UMExportedModule.exportedModuleName.apply(module.constructor);
            this.moduleExports[moduleName] = {};
            this.constantsToExport[exportedMethodsKey][moduleName] = [];

            this.initialiseExportedMethods(module, moduleName);
            this.initialiseExportedConstants(module, moduleName);
        }

        const viewManagers: NSArray<UMViewManager> = this.moduleRegistry.getAllViewManagers();
        for(let i = 0; i < viewManagers.count; i++){
            const module: UMViewManager = viewManagers[i];
            this.constantsToExport[viewManagersNamesKey].push(module.viewName());
        }
    }

    private initialiseInternalService(module: UMInternalModule): void {
        /**
         * In the Flutter adapter, FlutterEventChannels were set up at this point.
         * I'm not sure what the equivalent might be in NativeScript.
         */
        this.internalServicesModule = module as InternalServicesModule;
    }

    private initialiseExportedConstants(module: UMExportedModule, moduleName: string): void {
        const constants: NSDictionary<string, any>|null = module.constantsToExport();
        if(constants === null){
            this.constantsToExport[modulesConstantsKey][moduleName] = null;
            return;
        }

        this.constantsToExport[modulesConstantsKey][moduleName] = {};
        constants.enumerateKeysAndObjectsUsingBlock((key: string, value: string, stop: interop.Reference<boolean>) => {
            this.constantsToExport[modulesConstantsKey][moduleName][key] = value;
        });

        const constantsKeys: NSArray<string> = constants.allKeys;
        for(let i = 0; i < constantsKeys.count; i++){
            const constantKey: string = constantsKeys[i];
            if(!this.moduleExports[moduleName].constants){
                this.moduleExports[moduleName].constants = {};
            }
            this.moduleExports[moduleName].constants[constantKey] = constants.objectForKey(constantKey);
        }
    }

    /**
     * @see ExpoNativeScriptAdapterPlugin.m handleMethodCall()
     */
    private initialiseExportedMethods(module: UMExportedModule, moduleName: string): void {
        const methods: NSDictionary<string, string>|null = module.getExportedMethods();
        if(methods === null){
            console.warn(`module.getExportedMethods() returned null for moduleName "${moduleName}"`);
            return;
        }

        methods.enumerateKeysAndObjectsUsingBlock((exportedName: string, selectorName: string, stop: interop.Reference<boolean>) => {
            if(!this.moduleExports[moduleName].methods){
                this.moduleExports[moduleName].methods = {};
            }

            if(!this.moduleExports[moduleName].methods){
                this.moduleExports[moduleName].methods = {};
            }
            this.constantsToExport[exportedMethodsKey][moduleName].push({
                [methodInfoNameKey]: exportedName,
                // - 3 is for resolver and rejecter of the Promise and the last, empty component
                [methodInfoArgumentsCountKey]: selectorName.split(":").length - 3,
            });
            

            if(
                module.conformsToProtocol(UMEventEmitter) && 
                (exportedName === "startObserving" || exportedName === "stopObserving")
            ){
                const eventEmitter: UMEventEmitter = module as unknown as UMEventEmitter;

                this.moduleExports[moduleName].methods[exportedName] = function callNativeMethod(): Promise<void> {
                    if(exportedName === "startObserving"){
                        eventEmitter.startObserving();
                    } else if(exportedName === "stopObserving"){
                        eventEmitter.stopObserving();
                    }

                    return Promise.resolve();
                };
                return;
            }

            this.moduleExports[moduleName].methods[exportedName] = function callNativeMethod<T = unknown>(): Promise<T> {
                const argumentsArray: any[] = Array.from(arguments);
                return new Promise<T>((resolve, reject) => {
                    try {
                        module.callExportedMethodWithArgumentsResolverRejecter(
                            exportedName,
                            argumentsArray,
                            (result: T) => resolve(result),
                            (code: string, message: string, error: NSError) => reject(error || new Error(message)),
                        );
                    } catch (e) {
                        reject(e);
                    }
                });
            };
        });
        this.assignExportedMethodsKeys(this.constantsToExport[exportedMethodsKey][moduleName], moduleName);
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
            const previousMethodKey: number|undefined = this.exportedMethodsKeys[moduleName][methodName];
            // The truthy check is accurate here. We want both undefined values, and values of 0, to evaluate as false for consistency with the React Native iOS adapter implementation.
            if(previousMethodKey){
                methodInfo[methodInfoKeyKey] = previousMethodKey;
            } else {
                const newKey: number = Object.keys(this.exportedMethodsKeys[moduleName]).length;
                methodInfo[methodInfoKeyKey] = newKey;
                this.exportedMethodsKeys[moduleName][methodName] = newKey;
                this.exportedMethodsReverseKeys[moduleName][newKey] = methodName;
            }
        }
    }

    /**
     * @see expo/expo-flutter-adapter/lib/expo_flutter_adapter.dart
     * 
     * @see expo/expo-sensors-flutter-plugin/lib/accelerometer.dart
     * @example NativeModulesProxy.callMethod("ExponentAccelerometer", "startObserving");
     * @example NativeModulesProxy.callMethod("ExponentAccelerometer", "stopObserving");
     * @example NativeModulesProxy.callMethod("ExponentAccelerometer", "setUpdateInterval", 100);
     * 
     * @see expo/expo-sensors-flutter-plugin/lib/device_motion.dart
     * @example NativeModulesProxy.callMethod("ExponentDeviceMotion", "startObserving");
     * @example NativeModulesProxy.callMethod("ExponentDeviceMotion", "stopObserving");
     * @example NativeModulesProxy.callMethod("ExponentDeviceMotion", "setUpdateInterval", 100);
     */
    callMethod(moduleName: string, methodKeyOrName: number|string, ...args: any[]): Promise<unknown> {
        let methodName: string;
        if(typeof methodKeyOrName === "string"){
            methodName = methodKeyOrName;
        } else if(typeof methodKeyOrName === "number"){
            methodName = this.exportedMethodsReverseKeys[moduleName][methodKeyOrName];
        } else {
            const error = new Error("Unexpected Error: Method key is neither a string nor a number – don't know how to map it to method name.")
            error.name = "E_UNEXPECTED_ERROR";
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
    /**
     * @see https://flutter.dev/docs/development/platform-integration/platform-channels
     * @see expo/expo-flutter-adapter/lib/expo_flutter_adapter.dart
     * @see ExpoNativeScriptAdapterPlugin.m initWithRegistrar()
     * @see InternalServicesModule.m sendEventWithName()
     * 
     * @see expo/expo-sensors-flutter-plugin/lib/device_motion.dart
     * @example NativeModulesProxy.ExponentDeviceMotion.startObserving();
     * @example NativeModulesProxy.ExponentDeviceMotion.stopObserving();
     * @example NativeModulesProxy.events; // ExpoEvent[] where an expoEvent.name may equal "deviceMotionDidUpdate"
     */
    get events(): ExpoEvent[] {
        if(this._events === null){
            // TODO: Not sure how to set up events.
            console.warn(`Not implemented: NativeModulesProxyIos.prototype.events`);
            return [];
        }
        return this._events;
    }
}
