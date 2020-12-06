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
 * @see https://github.com/facebook/react-native/blob/d72e078df41f1ba2eb94e4eb4fb28b8d0232a8a1/ReactAndroid/src/main/java/com/facebook/react/ReactPackage.java
 */
export interface NativeScriptPackage {
    /**
     * @param reactContext react application context that can be used to create modules
     * @return list of native modules to register with the newly created catalyst instance
     */
    createNativeModules(nativeScriptContext: NativeScriptApplicationContext): List<NativeModule>;
  
    /** @return a list of view managers that should be registered with {@link UIManagerModule} */
    createViewManagers(nativeScriptContext: NativeScriptApplicationContext): List<ViewManager>;
}