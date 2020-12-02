/// <reference path="./typings/java!android-17-core-5.5.1.d.ts" />
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
    NativeScriptContext,
} from "./nativeTypeAliases.android";

@NativeClass
class NativeScriptAdapterPackage extends org.unimodules.core.BasePackage {
    createInternalModules(context: Context): List<InternalModule> {
        /* STUB; none of these have been implemented yet. */
        return java.util.Arrays.asList([
            // new CookieManagerModule(context as NativeScriptContext),
            // new UIManagerModuleWrapper(context as NativeScriptContext),
            // new EventEmitterModule(context as NativeScriptContext),
            // new FontManagerModule(),
            // new RuntimeEnvironmentModule()
        ]);
    }
}

export { NativeScriptAdapterPackage };