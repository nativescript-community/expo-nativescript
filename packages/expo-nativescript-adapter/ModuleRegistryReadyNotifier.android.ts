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
import { BaseJavaModule } from "./BaseJavaModule.android";

@NativeClass
class ModuleRegistryReadyNotifier extends BaseJavaModule {
    private mModuleRegistry: ModuleRegistry;

    constructor(moduleRegistry: ModuleRegistry){
        super();

        this.mModuleRegistry = moduleRegistry;

        // necessary when extending TypeScript constructors
        return global.__native(this);
    }

    getName(): string {
        return null;
    }

    public initialize(): void {
        this.mModuleRegistry.ensureIsInitialized();
    }
}

export { ModuleRegistryReadyNotifier };