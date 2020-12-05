/// <reference path="../typings/java!android-17-core-5.5.1.d.ts" />
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
} from "./nativeTypeAliases.android";

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

export {
    NativeScriptModuleRegistryProvider
};