export const methodInfoKeyKey = "key";
export const methodInfoNameKey = "name";
export const methodInfoArgumentsCountKey = "argumentsCount";

export const modulesConstantsKey = 'modulesConstants';
export const exportedMethodsKey = 'exportedMethods';
export const viewManagersNamesKey = 'viewManagersNames';

export type ExpoModuleExports = {
    [moduleName: string]: {
        methods?: {
            [methodName: string]: (...args: any[]) => Promise<any>;
        };
        constants?: {
            [constantName: string]: any;
        };
        viewManagers?: {
            [viewManagerName: string]: any;
        };
    }
};

export interface MethodInfo {
    [methodInfoNameKey]: string;
    [methodInfoArgumentsCountKey]: number;
    [methodInfoKeyKey]?: number;
}

export interface ConstantsToExport {
    [viewManagersNamesKey]: string[];
    [exportedMethodsKey]: {
        [exportedModuleName: string]: MethodInfo[];
    };
    [modulesConstantsKey]: {
        [exportedModuleName: string]: Record<string, any>|null;
    };
};

export type ExportedMethodsKeys = {
    [moduleName: string]: {
        /**
         * Where the number returned is an index (key) into the exported methods.
         */
        [methodName: string]: number;
    }
}
export type ExportedMethodsReverseKeys = {
    [moduleName: string]: {
        /**
         * Where the string returned is the name of the exported method.
         */
        [index: number]: string;
    }
}

export interface ExpoEvent {
    readonly name: string;
    readonly body: Record<string, any>;
}

export abstract class UMNativeModulesProxyBase {
    /**
     * @see ExpoFlutterAdapterPlugin.m
     */
    protected readonly moduleExports: ExpoModuleExports = {};
    /**
     * I haven't yet seen a use for this in our NativeScript plugin (everything is exposed to the NativeScript runtime to begin with),
     * but it was simple to implement, so I've implemented it if only to aid debugging.
     * @see https://github.com/expo/expo/blob/c2f6f870ca5059a9157320c0ba72ce1f38e93f31/packages/%40unimodules/react-native-adapter/ios/UMReactNativeAdapter/UMNativeModulesProxy/UMNativeModulesProxy.m#L52
     * 
     * I was actually interested in it because it mentioned ViewManagers. We could potentially implement UI plugins by implementing these...
     * @see https://github.com/facebook/react-native/blob/master/React/Views/RCTViewManager.h
     * @see https://github.com/expo/expo/blob/c2f6f870ca5059a9157320c0ba72ce1f38e93f31/packages/%40unimodules/react-native-adapter/ios/UMReactNativeAdapter/UMViewManagerAdapter/UMViewManagerAdapter.h
     */
    readonly constantsToExport: ConstantsToExport = {
        [viewManagersNamesKey]: [],
        [exportedMethodsKey]: {},
        [modulesConstantsKey]: {},
    };
    protected readonly exportedMethodsKeys: ExportedMethodsKeys = {};
    protected readonly exportedMethodsReverseKeys: ExportedMethodsReverseKeys = {};

    abstract callMethod(moduleName: string, methodKeyOrName: number|string, ...args: any[]): any;
    abstract getConstant(moduleName: string, constantName: string): any;
    protected _events: ExpoEvent[]|null = null;
    abstract get events(): ExpoEvent[];
}