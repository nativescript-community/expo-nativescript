/// <reference path="./typings/java!android-17-core-5.5.1.d.ts" />
import { ModuleRegistryReadyNotifier } from "./ModuleRegistryReadyNotifier.android";
import { NativeScriptAdapterPackage } from "./NativeScriptAdapterPackage.android";
import { NativeScriptModuleRegistryProvider } from "./NativeScriptModuleRegistryProvider.android";
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
// import NativeModulesProxy from "./NativeModulesProxy";

/**
 * @see com.facebook.react.ReactPackage
 * @see https://github.com/facebook/react-native/blob/d72e078df41f1ba2eb94e4eb4fb28b8d0232a8a1/ReactAndroid/src/main/java/com/facebook/react/ReactPackage.java
 */
interface NativeScriptPackage {
    createNativeModules(context: NativeScriptApplicationContext): List<NativeModule>;
    createViewManagers(context: NativeScriptApplicationContext): List<NativeModule>;
}

/**
 * @see ModuleRegistryAdapter.java
 */
@NativeClass
class ModuleRegistryAdapter extends java.lang.Object implements NativeScriptPackage {
    protected mModuleRegistryProvider: NativeScriptModuleRegistryProvider;
    protected mNativeScriptAdapterPackage: NativeScriptAdapterPackage = new NativeScriptAdapterPackage();

    constructor(moduleRegistryProvider: NativeScriptModuleRegistryProvider){
        super();

        this.mModuleRegistryProvider = moduleRegistryProvider;

        // necessary when extending TypeScript constructors
        return global.__native(this);
    }

    createNativeModules(context: NativeScriptApplicationContext): List<NativeModule> {
        const moduleRegistry: ModuleRegistry = this.mModuleRegistryProvider.get(context);

        this.mNativeScriptAdapterPackage.createInternalModules(context).forEach((im: InternalModule) => {
            moduleRegistry.registerInternalModule(im);
        });

        return this.getNativeModulesFromModuleRegistry(context, moduleRegistry);
    
        // return getNativeModulesFromModuleRegistry(reactContext, moduleRegistry);
    }

    protected getNativeModulesFromModuleRegistry(context: NativeScriptApplicationContext, moduleRegistry: ModuleRegistry): List<NativeModule> {
        const nativeModulesList: List<NativeModule> = new java.util.ArrayList<NativeModule>(2);
    
        /* TODO: Write NativeModulesProxy for Android */
        // nativeModulesList.add(new NativeModulesProxy(context, moduleRegistry));
    
        // Add listener that will notify org.unimodules.core.ModuleRegistry when all modules are ready
        nativeModulesList.add(new ModuleRegistryReadyNotifier(moduleRegistry));
    
        /* TODO: Port ReactPackagesProvider to NativeScript */
        // const reactPackagesProvider: ReactPackagesProvider = moduleRegistry.getModule(ReactPackagesProvider.class);
        // reactPackagesProvider.getReactPackages().forEach((reactPackage: ReactPackage) => {
        //     nativeModulesList.addAll(reactPackage.createNativeModules(context));
        // });
    
        return nativeModulesList;
    }

    createViewManagers(context: NativeScriptApplicationContext): List<NativeModule> {
        const viewManagerList: List<ViewManager> = new java.util.ArrayList<ViewManager>(this.mModuleRegistryProvider.getNativeScriptViewManagers(context));

        this.mModuleRegistryProvider.getViewManagers(context).forEach((viewManager: ViewManager) => {
            switch(viewManager.getViewManagerType()){
                case org.unimodules.core.ViewManager.ViewManagerType.GROUP:
                    /* TODO: Port from React to NativeScript */
                    // viewManagerList.add(new ViewGroupManagerAdapter(viewManager));
                    break;
                case org.unimodules.core.ViewManager.ViewManagerType.SIMPLE:
                    /* TODO: Port from React to NativeScript */
                    // viewManagerList.add(new SimpleViewManagerAdapter(viewManager));
                    break;
            }
        });

        return viewManagerList;
    }
}

export { ModuleRegistryAdapter };
