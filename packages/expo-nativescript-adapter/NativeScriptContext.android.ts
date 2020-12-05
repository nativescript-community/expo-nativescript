/// <reference path="./typings/java!android-17-core-5.5.1.d.ts" />
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
} from "./android-adapter/nativeTypeAliases.android";

/**
 * Stub for now.
 * @see com.facebook.react.bridge.ReactApplicationContext
 * @see https://github.com/facebook/react-native/blob/d72e078df41f1ba2eb94e4eb4fb28b8d0232a8a1/ReactAndroid/src/main/java/com/facebook/react/bridge/ReactApplicationContext.java
 */
@NativeClass
class NativeScriptContext extends android.content.ContextWrapper {

}

export { NativeScriptContext };