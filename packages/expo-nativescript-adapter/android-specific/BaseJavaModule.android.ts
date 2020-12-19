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

// @NativeClass
abstract class BaseJavaModule extends java.lang.Object implements NativeModule {
    // taken from Libraries/Utilities/MessageQueue.js
    static readonly METHOD_TYPE_ASYNC: string = "async";
    static readonly METHOD_TYPE_PROMISE: string = "promise";
    static readonly METHOD_TYPE_SYNC: string = "sync";

    abstract getName(): string;

    /** @return a map of constants this module exports to JS. Supports JSON types. */
    getConstants(): Map<string, java.lang.Object>|null {
        return null;
    }

    initialize(): void {
        // do nothing
    }

    canOverrideExistingModule(): boolean {
        // TODO(t11394819): Make this final and use annotation
        return false;
    }

    onCatalystInstanceDestroy(): void {
        // do nothing
    }

    hasConstants(): boolean {
        return false;
    }

    // Cleanup Logic for TurboModules
    invalidate(): void {
        // Do nothing
    }
}

export { BaseJavaModule };