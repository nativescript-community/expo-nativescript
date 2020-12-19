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

    UIManager,
    EventEmitter,
    PermissionsManager,
    PermissionsListener,
    ActivityProvider,
} from "./nativeTypeAliases.android";
import { NativeScriptContext } from "./NativeScriptContext.android";

// class ExpoFlutterAdapterPlugin {
//     private static sRegistrar: Registrar;

//     public static registerWith(Registrar registrar): void {
//         sRegistrar = registrar;
//     }

//     public static addPackages(packages: List<Package>): void {
//         ExpoFlutterAdapterModule.addPackages(packages);
//     }

//     public static addPackage(Package pkg): void {
//         ExpoFlutterAdapterModule.addPackage(pkg);
//     }

//     public static initialize(): void {
//         // Just create an instance of the module. We don't need to hold a reference to it anywhere --
//         // it'll register itself to the `FlutterView` etc. to maintain its lifetime.
//         new ExpoFlutterAdapterModule(sRegistrar);
//     }
// }

class NativeScriptRegistrar {

}

/**
 * This is a stub implementation of ExpoFlutterAdapterModule to see how they approached it. In practice, however, I think we may take the React Native
 * approach instead (which is what all the other files in the android-adapter folder arose from).
 */
@NativeClass
class ExpoNativeScriptAdapterModule extends java.lang.Object implements InternalModule, EventEmitter, UIManager, PermissionsManager, ActivityProvider
{
    private static sInitialPackages: List<Package> = new java.util.ArrayList();
    private mModuleRegistry: ModuleRegistry;

    /**
     * The Flutter adapter takes in a registrar at this point
     * @see https://api.flutter.dev/javadoc/io/flutter/plugin/common/PluginRegistry.Registrar.html
     * Registrar has since been deprecated by FlutterPlugin.
     * @see https://api.flutter.dev/javadoc/io/flutter/embedding/engine/plugins/FlutterPlugin.html
     */
    constructor(){
        super();

        const self: InternalModule = this;

        const packages: List<Package> = new java.util.ArrayList(ExpoNativeScriptAdapterModule.sInitialPackages);
        packages.add(
            new org.unimodules.core.interfaces.Package({
                createInternalModules(param0: Context): List<InternalModule> {
                    return java.util.Collections.singletonList(self);
                },
                createExportedModules(param0: Context): List<SingletonModule> {
                    return java.util.Collections.emptyList();
                },
                createViewManagers(param0: Context): List<ExportedModule> {
                    return java.util.Collections.emptyList();
                },
                createSingletonModules(param0: Context): List<ViewManager> {
                    return java.util.Collections.emptyList();
                },
            })
        );

        const moduleRegistryProvider = new org.unimodules.core.ModuleRegistryProvider(packages);
        this.mModuleRegistry = moduleRegistryProvider.get(new NativeScriptContext());
        this.mModuleRegistry.initialize();

        // necessary when extending TypeScript constructors
        return global.__native(this);
    }

    public onDestroy(): void {
        throw new Error("Method not implemented.");
    }
    public onCreate(param0: org.unimodules.core.ModuleRegistry): void {
        throw new Error("Method not implemented.");
    }
    public getExportedInterfaces(): java.util.List<any> {
        throw new Error("Method not implemented.");
    }
    public emit(param0: number, param1: string, param2: globalAndroid.os.Bundle): void;
    public emit(param0: string, param1: globalAndroid.os.Bundle): void;
    public emit(param0: number, param1: org.unimodules.core.interfaces.services.EventEmitter.Event): void;
    public emit(param0: any, param1: any, param2?: any) {
        throw new Error("Method not implemented.");
    }
    public runOnUiQueueThread(param0: java.lang.Runnable): void {
        throw new Error("Method not implemented.");
    }
    public addUIBlock(param0: org.unimodules.core.interfaces.services.UIManager.GroupUIBlock): void;
    public addUIBlock(param0: number, param1: org.unimodules.core.interfaces.services.UIManager.UIBlock<any>, param2: java.lang.Class<any>): void;
    public addUIBlock(param0: any, param1?: any, param2?: any) {
        throw new Error("Method not implemented.");
    }
    public registerActivityEventListener(param0: org.unimodules.core.interfaces.ActivityEventListener): void {
        throw new Error("Method not implemented.");
    }
    public unregisterActivityEventListener(param0: org.unimodules.core.interfaces.ActivityEventListener): void {
        throw new Error("Method not implemented.");
    }
    public runOnClientCodeQueueThread(param0: java.lang.Runnable): void {
        throw new Error("Method not implemented.");
    }
    public unregisterLifecycleEventListener(param0: org.unimodules.core.interfaces.LifecycleEventListener): void {
        throw new Error("Method not implemented.");
    }
    public registerLifecycleEventListener(param0: org.unimodules.core.interfaces.LifecycleEventListener): void {
        throw new Error("Method not implemented.");
    }
    public getCurrentActivity(): globalAndroid.app.Activity {
        throw new Error("Method not implemented.");
    }
}

export { ExpoNativeScriptAdapterModule };