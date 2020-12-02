/// <reference path="./typings/java!android-17-core-5.5.1.d.ts" />
import { UMNativeModulesProxyBase, methodInfoArgumentsCountKey, methodInfoNameKey, methodInfoKeyKey, MethodInfo } from "./UMNativeModulesProxyCommon";
import type { ExpoEvent } from "./UMNativeModulesProxyCommon";

type ExportedModule = org.unimodules.core.ExportedModule;
type ModuleRegistry = org.unimodules.core.ModuleRegistry;
type ModuleRegistryProvider = org.unimodules.core.ModuleRegistryProvider;
type ViewManager<V = any> = org.unimodules.core.ViewManager<V>;
type Function<Param0, ReturnType> = org.unimodules.core.interfaces.Function<Param0, ReturnType>;
type InternalModule = org.unimodules.core.interfaces.InternalModule;
type Package = org.unimodules.core.interfaces.Package;
type SingletonModule = org.unimodules.core.interfaces.SingletonModule;
type List<E> = java.util.List<E>;
type Collection<E> = java.util.Collection<E>;
type Context = globalAndroid.content.Context;

/**
 * Stub for now.
 * @see ReactApplicationContext
 */
type NativeScriptApplicationContext = Context;
/**
 * Stub for now.
 * @see com.facebook.react.uimanager.ViewManager
 */
type NativeScriptViewManager<V = any> = ViewManager<V>;

/**
 * @see ReactModuleRegistryProvider.java
 */
@NativeClass
class NativeScriptModuleRegistryProvider extends org.unimodules.core.ModuleRegistryProvider {
    /* TODO */
    private mNativeScriptViewManagers?: Collection<NativeScriptViewManager>;
    private mViewManagers?: Collection<ViewManager>;
    private mSingletonModules?: Collection<SingletonModule>;

    constructor(initialPackages: List<Package>){
        super(initialPackages);

        // necessary when extending TypeScript constructors
        return global.__native(this);
    }

    get(context: Context): ModuleRegistry {
        const internalModules: Collection<InternalModule> = new java.util.ArrayList();
        const exportedModules: Collection<ExportedModule> = new java.util.ArrayList();

        // const nativeScriptPackagesProvider: NativeScriptPackagesProvider = new NativeScriptPackagesProvider();

        this.getPackages().forEach((pkg: Package) => {
            internalModules.addAll(pkg.createInternalModules(context));
            exportedModules.addAll(pkg.createExportedModules(context));

            // if(pkg instanceof NativeScriptPackage){
            //     nativeScriptPackagesProvider.addPackage(pkg as NativeScriptPackage);
            // }
        });

        // internalModules.add(nativeScriptPackagesProvider);

        return new org.unimodules.core.ModuleRegistry(
            internalModules,
            exportedModules,
            this.getViewManagers(context),
            this.getSingletonModules(context),
        );
    };

    getSingletonModules(context: Context): Collection<SingletonModule> {
        if(!this.mSingletonModules){
            return this.mSingletonModules;
        }

        const singletonModules: Collection<SingletonModule> = new java.util.ArrayList();
        this.getPackages().forEach((pkg: Package) => {
            singletonModules.addAll(pkg.createSingletonModules(context));
        });
        return singletonModules;
    }

    getViewManagers(context: Context): Collection<ViewManager> {
        if(!this.mViewManagers){
            return this.mViewManagers;
        }

        const mViewManagers: Collection<SingletonModule> = new java.util.HashSet();
        mViewManagers.addAll(this.createViewManagers(context));
        return mViewManagers;
    }

    /**
     * Stub for now.
     */
    getNativeScriptViewManagers(context: NativeScriptApplicationContext): Collection<NativeScriptViewManager> {
        if(!this.mNativeScriptViewManagers){
            return this.mNativeScriptViewManagers;
        }

        const mNativeScriptViewManagers: Collection<SingletonModule> = new java.util.HashSet();
        // this.getPackages().forEach((pkg: Package) => {
        //     if(pkg instanceof NativeScriptViewManager){
        //         mNativeScriptViewManagers.addAll(this.createViewManagers(context));
        //     }
        // });
        return mNativeScriptViewManagers;
    }
}

interface NativeScriptPackage {

}

/**
 * @see ModuleRegistryAdapter.java
 */
@NativeClass
class ModuleRegistryAdapter extends java.lang.Object implements NativeScriptPackage {
    /* TODO */
    // protected ReactModuleRegistryProvider mModuleRegistryProvider;
    protected mModuleRegistryProvider: NativeScriptModuleRegistryProvider;

    constructor(moduleRegistryProvider: NativeScriptModuleRegistryProvider){
        super();

        this.mModuleRegistryProvider = moduleRegistryProvider;

        // necessary when extending TypeScript constructors
        return global.__native(this);
    }
}

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