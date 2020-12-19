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
    NativeScriptContext,
} from "./nativeTypeAliases.android";

/**
 * In Java, this is actually an interface. But it seems Java interfaces are exposed to NativeScript as
 * classes that extend java.lang.Object. This is fine, as we need to call instanceof on it in 
 * NativeScriptModuleRegistryProvider.
 * @see https://github.com/facebook/react-native/blob/d72e078df41f1ba2eb94e4eb4fb28b8d0232a8a1/ReactAndroid/src/main/java/com/facebook/react/ReactPackage.java
 */
export abstract class NativeScriptPackage extends java.lang.Object {
    /**
     * @param nativeScriptContext NativeScript application context that can be used to create modules
     * @return list of native modules to register with the newly created catalyst instance
     */
    abstract createNativeModules(nativeScriptContext: NativeScriptApplicationContext): List<NativeModule>;
  
    /** @return a list of view managers that should be registered with {@link UIManagerModule} */
    abstract createViewManagers(nativeScriptContext: NativeScriptApplicationContext): List<ViewManager>;
}