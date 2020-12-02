export type ExportedModule = org.unimodules.core.ExportedModule;
export type ModuleRegistry = org.unimodules.core.ModuleRegistry;
export type ModuleRegistryProvider = org.unimodules.core.ModuleRegistryProvider;
export type ViewManager<V = any> = org.unimodules.core.ViewManager<V>;
export type Function<Param0, ReturnType> = org.unimodules.core.interfaces.Function<Param0, ReturnType>;
export type InternalModule = org.unimodules.core.interfaces.InternalModule;
export type Package = org.unimodules.core.interfaces.Package;
// export const BasePackage = org.unimodules.core.BasePackage;
export type SingletonModule = org.unimodules.core.interfaces.SingletonModule;
export type List<E> = java.util.List<E>;
export type Collection<E> = java.util.Collection<E>;
export type Context = globalAndroid.content.Context;
// export const ViewManagerType = org.unimodules.core.ViewManager.ViewManagerType;

/**
 * Stub for now.
 * @see com.facebook.react.bridge.ReactApplicationContext
 * @see https://github.com/facebook/react-native/blob/d72e078df41f1ba2eb94e4eb4fb28b8d0232a8a1/ReactAndroid/src/main/java/com/facebook/react/bridge/ReactApplicationContext.java
 */
export interface NativeScriptApplicationContext extends Context {

}
/**
 * Stub for now.
 * @see com.facebook.react.bridge.ReactContext
 * @see https://github.com/facebook/react-native/blob/d72e078df41f1ba2eb94e4eb4fb28b8d0232a8a1/ReactAndroid/src/main/java/com/facebook/react/bridge/ReactContext.java
 */
export interface NativeScriptContext extends android.content.ContextWrapper {

}
/**
 * Stub for now.
 * @see com.facebook.react.uimanager.ViewManager
 * @see https://github.com/facebook/react-native/blob/d72e078df41f1ba2eb94e4eb4fb28b8d0232a8a1/ReactAndroid/src/main/java/com/facebook/react/uimanager/ViewManager.java
 */
export type NativeScriptViewManager<V = any> = ViewManager<V>;

/**
 * @see com.facebook.react.bridge.NativeModule
 * @see https://github.com/facebook/react-native/blob/d72e078df41f1ba2eb94e4eb4fb28b8d0232a8a1/ReactAndroid/src/main/java/com/facebook/react/bridge/NativeModule.java
 */
export interface NativeModule {
    /**
     * @return the name of this module. This will be the name used to {@code require()} this module
     *     from javascript.
     * States @NonNull, and yet ModuleRegistryReadyNotifier returns null from it, so I'll allow null.
     */
    getName(): string|null;

    /**
     * This is called at the end of {@link CatalystApplicationFragment#createCatalystInstance()} after
     * the CatalystInstance has been created, in order to initialize NativeModules that require the
     * CatalystInstance or JS modules.
     */
    initialize(): void;

    /**
     * Return true if you intend to override some other native module that was registered e.g. as part
     * of a different package (such as the core one). Trying to override without returning true from
     * this method is considered an error and will throw an exception during initialization. By
     * default all modules return false.
     */
    canOverrideExistingModule(): boolean;

    /** Called before {CatalystInstance#onHostDestroy} */
    onCatalystInstanceDestroy(): void;
}