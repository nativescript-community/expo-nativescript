/// <reference path="android-declarations.d.ts"/>
// See: https://docs.nativescript.org/core-concepts/android-runtime/metadata/generating-typescript-declarations
// Generated for Android API level 26 via copy-pasting the org.unimodules.core modules following running this command:
// $ java -jar build/libs/dts-generator.jar -input /usr/local/share/android-sdk/platforms/android-26/android.jar /Users/jamie/Documents/git/expo-nativescript-nx/node_modules/@unimodules/core/android/build/intermediates/full_jar/release/full.jar 

declare module org {
	export module unimodules {
		export module core {
			export class ArgumentsHelper extends java.lang.Object {
				public static class: java.lang.Class<org.unimodules.core.ArgumentsHelper>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export class BasePackage extends java.lang.Object implements org.unimodules.core.interfaces.Package {
				public static class: java.lang.Class<org.unimodules.core.BasePackage>;
				public createInternalModules(param0: globalAndroid.content.Context): java.util.List<any>;
				public createSingletonModules(param0: globalAndroid.content.Context): java.util.List<any>;
				public createInternalModules(param0: globalAndroid.content.Context): java.util.List<org.unimodules.core.interfaces.InternalModule>;
				public createViewManagers(param0: globalAndroid.content.Context): java.util.List<org.unimodules.core.ViewManager<any>>;
				public createExportedModules(param0: globalAndroid.content.Context): java.util.List<any>;
				public createExportedModules(param0: globalAndroid.content.Context): java.util.List<org.unimodules.core.ExportedModule>;
				public createViewManagers(param0: globalAndroid.content.Context): java.util.List<any>;
				public createSingletonModules(param0: globalAndroid.content.Context): java.util.List<org.unimodules.core.interfaces.SingletonModule>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export class BuildConfig extends java.lang.Object {
				public static class: java.lang.Class<org.unimodules.core.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export abstract class ExportedModule extends java.lang.Object implements org.unimodules.core.interfaces.RegistryLifecycleListener {
				public static class: java.lang.Class<org.unimodules.core.ExportedModule>;
				public getConstants(): java.util.Map<string,any>;
				public getContext(): globalAndroid.content.Context;
				public constructor(param0: globalAndroid.content.Context);
				public getExportedMethodInfos(): java.util.Map<string,org.unimodules.core.ExportedModule.MethodInfo>;
				public getName(): string;
				public onDestroy(): void;
				public getExportedMethods(): java.util.Map<string,java.lang.reflect.Method>;
				public invokeExportedMethod(param0: string, param1: java.util.Collection<any>): any;
				public transformArgumentToClass(param0: any, param1: java.lang.Class<any>): any;
				public getExportedMethods(param0: java.lang.Class<any>): java.util.Map<string,java.lang.reflect.Method>;
				public onCreate(param0: org.unimodules.core.ModuleRegistry): void;
			}
			export module ExportedModule {
				export class MethodInfo extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.ExportedModule.MethodInfo>;
					public getParameterTypes(): native.Array<java.lang.Class<any>>;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export class InvalidArgumentException extends java.lang.Exception {
				public static class: java.lang.Class<org.unimodules.core.InvalidArgumentException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export class MapHelper extends java.lang.Object implements org.unimodules.core.interfaces.Arguments {
				public static class: java.lang.Class<org.unimodules.core.MapHelper>;
				public get(param0: string): any;
				public getList(param0: string): java.util.List<any>;
				public containsKey(param0: string): boolean;
				public getMap(param0: string): java.util.Map<any,any>;
				public getBoolean(param0: string, param1: boolean): boolean;
				public getLong(param0: string): number;
				public getInt(param0: string, param1: number): number;
				public size(): number;
				public getString(param0: string, param1: string): string;
				public getList(param0: string, param1: java.util.List<any>): java.util.List<any>;
				public getMap(param0: string, param1: java.util.Map<any,any>): java.util.Map<any,any>;
				public getDouble(param0: string): number;
				public getLong(param0: string, param1: number): number;
				public getArguments(param0: string): org.unimodules.core.interfaces.Arguments;
				public getBoolean(param0: string): boolean;
				public getDouble(param0: string, param1: number): number;
				public getString(param0: string): string;
				public isEmpty(): boolean;
				public constructor(param0: java.util.Map<any,any>);
				public getInt(param0: string): number;
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export class ModuleRegistry extends java.lang.Object {
				public static class: java.lang.Class<org.unimodules.core.ModuleRegistry>;
				public getExportedModuleOfClass(param0: java.lang.Class<any>): org.unimodules.core.ExportedModule;
				public getAllViewManagers(): java.util.Collection<org.unimodules.core.ViewManager<any>>;
				public ensureIsInitialized(): void;
				public getAllExportedModules(): java.util.Collection<org.unimodules.core.ExportedModule>;
				public registerSingletonModule(param0: org.unimodules.core.interfaces.SingletonModule): void;
				public constructor(param0: java.util.Collection<org.unimodules.core.interfaces.InternalModule>, param1: java.util.Collection<org.unimodules.core.ExportedModule>, param2: java.util.Collection<org.unimodules.core.ViewManager<any>>, param3: java.util.Collection<org.unimodules.core.interfaces.SingletonModule>);
				public getExportedModule(param0: string): org.unimodules.core.ExportedModule;
				public registerExtraListener(param0: org.unimodules.core.interfaces.RegistryLifecycleListener): void;
				public registerInternalModule(param0: org.unimodules.core.interfaces.InternalModule): void;
				public registerViewManager(param0: org.unimodules.core.ViewManager<any>): void;
				public registerExportedModule(param0: org.unimodules.core.ExportedModule): void;
				public initialize(): void;
				public getModule(param0: java.lang.Class<any>): any;
				public unregisterInternalModule(param0: java.lang.Class<any>): org.unimodules.core.interfaces.InternalModule;
				public getSingletonModule(param0: string, param1: java.lang.Class<any>): any;
				public onDestroy(): void;
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export class ModuleRegistryProvider extends java.lang.Object {
				public static class: java.lang.Class<org.unimodules.core.ModuleRegistryProvider>;
				public getPackages(): java.util.List<org.unimodules.core.interfaces.Package>;
				public createInternalModules(param0: globalAndroid.content.Context): java.util.Collection<org.unimodules.core.interfaces.InternalModule>;
				public createViewManagers(param0: globalAndroid.content.Context): java.util.Collection<org.unimodules.core.ViewManager<any>>;
				public createSingletonModules(param0: globalAndroid.content.Context): java.util.Collection<org.unimodules.core.interfaces.SingletonModule>;
				public get(param0: globalAndroid.content.Context): org.unimodules.core.ModuleRegistry;
				public createExportedModules(param0: globalAndroid.content.Context): java.util.Collection<org.unimodules.core.ExportedModule>;
				public constructor(param0: java.util.List<org.unimodules.core.interfaces.Package>);
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export class Promise extends java.lang.Object {
				public static class: java.lang.Class<org.unimodules.core.Promise>;
				/**
				 * Constructs a new instance of the org.unimodules.core.Promise interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					resolve(param0: any): void;
					reject(param0: string, param1: string, param2: java.lang.Throwable): void;
					reject(param0: java.lang.Throwable): void;
					reject(param0: string, param1: string): void;
					reject(param0: string, param1: java.lang.Throwable): void;
				});
				public constructor();
				public static UNKNOWN_ERROR: string;
				public resolve(param0: any): void;
				public reject(param0: string, param1: string, param2: java.lang.Throwable): void;
				public reject(param0: java.lang.Throwable): void;
				public reject(param0: string, param1: string): void;
				public reject(param0: string, param1: java.lang.Throwable): void;
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export abstract class ViewManager<V>  extends org.unimodules.core.interfaces.RegistryLifecycleListener {
				public static class: java.lang.Class<org.unimodules.core.ViewManager<any>>;
				public onDropViewInstance(param0: any): void;
				public getPropSetterInfos(): java.util.Map<string,org.unimodules.core.ViewManager.PropSetterInfo>;
				public updateProp(param0: any, param1: string, param2: any): void;
				public getExportedEventNames(): java.util.List<string>;
				public getName(): string;
				public onDestroy(): void;
				public createViewInstance(param0: globalAndroid.content.Context): any;
				public getViewManagerType(): org.unimodules.core.ViewManager.ViewManagerType;
				public constructor();
				public transformArgumentToClass(param0: any, param1: java.lang.Class<any>): any;
				public onCreate(param0: org.unimodules.core.ModuleRegistry): void;
			}
			export module ViewManager {
				export class PropSetterInfo extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.ViewManager.PropSetterInfo>;
					public getExpectedValueClass(): java.lang.Class<any>;
				}
				export class ViewManagerType {
					public static class: java.lang.Class<org.unimodules.core.ViewManager.ViewManagerType>;
					public static SIMPLE: org.unimodules.core.ViewManager.ViewManagerType;
					public static GROUP: org.unimodules.core.ViewManager.ViewManagerType;
					public static valueOf(param0: string): org.unimodules.core.ViewManager.ViewManagerType;
					public static values(): native.Array<org.unimodules.core.ViewManager.ViewManagerType>;
					public static valueOf(param0: java.lang.Class<any>, param1: string): java.lang.Enum<any>;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module arguments {
				export class MapArguments extends java.lang.Object implements org.unimodules.core.arguments.ReadableArguments {
					public static class: java.lang.Class<org.unimodules.core.arguments.MapArguments>;
					public get(param0: string): any;
					public isEmpty(): boolean;
					public getDouble(param0: string, param1: number): number;
					public getMap(param0: string): java.util.Map<any,any>;
					public getInt(param0: string): number;
					public getArguments(param0: string): org.unimodules.core.arguments.ReadableArguments;
					public toBundle(): globalAndroid.os.Bundle;
					public size(): number;
					public getBoolean(param0: string, param1: boolean): boolean;
					public getMap(param0: string, param1: java.util.Map<any,any>): java.util.Map<any,any>;
					public getString(param0: string): string;
					public getString(param0: string, param1: string): string;
					public containsKey(param0: string): boolean;
					public getBoolean(param0: string): boolean;
					public constructor();
					public getList(param0: string, param1: java.util.List<any>): java.util.List<any>;
					public getDouble(param0: string): number;
					public constructor(param0: java.util.Map<string,any>);
					public keys(): java.util.Collection<string>;
					public getInt(param0: string, param1: number): number;
					public getList(param0: string): java.util.List<any>;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module arguments {
				export class ReadableArguments extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.arguments.ReadableArguments>;
					/**
					 * Constructs a new instance of the org.unimodules.core.arguments.ReadableArguments interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						keys(): java.util.Collection<string>;
						containsKey(param0: string): boolean;
						get(param0: string): any;
						getBoolean(param0: string): boolean;
						getBoolean(param0: string, param1: boolean): boolean;
						getDouble(param0: string): number;
						getDouble(param0: string, param1: number): number;
						getInt(param0: string): number;
						getInt(param0: string, param1: number): number;
						getString(param0: string): string;
						getString(param0: string, param1: string): string;
						getList(param0: string): java.util.List<any>;
						getList(param0: string, param1: java.util.List<any>): java.util.List<any>;
						getMap(param0: string): java.util.Map<any,any>;
						getMap(param0: string, param1: java.util.Map<any,any>): java.util.Map<any,any>;
						getArguments(param0: string): org.unimodules.core.arguments.ReadableArguments;
						isEmpty(): boolean;
						size(): number;
						toBundle(): globalAndroid.os.Bundle;
					});
					public constructor();
					public get(param0: string): any;
					public isEmpty(): boolean;
					public getDouble(param0: string, param1: number): number;
					public getMap(param0: string): java.util.Map<any,any>;
					public getInt(param0: string): number;
					public getArguments(param0: string): org.unimodules.core.arguments.ReadableArguments;
					public toBundle(): globalAndroid.os.Bundle;
					public size(): number;
					public getBoolean(param0: string, param1: boolean): boolean;
					public getString(param0: string): string;
					public getMap(param0: string, param1: java.util.Map<any,any>): java.util.Map<any,any>;
					public getString(param0: string, param1: string): string;
					public containsKey(param0: string): boolean;
					public getBoolean(param0: string): boolean;
					public getList(param0: string, param1: java.util.List<any>): java.util.List<any>;
					public getDouble(param0: string): number;
					public keys(): java.util.Collection<string>;
					public getInt(param0: string, param1: number): number;
					public getList(param0: string): java.util.List<any>;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module errors {
				export abstract class CodedException extends java.lang.Exception implements org.unimodules.core.interfaces.CodedThrowable {
					public static class: java.lang.Class<org.unimodules.core.errors.CodedException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public getCode(): string;
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
					public getMessage(): string;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module errors {
				export abstract class CodedRuntimeException extends java.lang.RuntimeException implements org.unimodules.core.interfaces.CodedThrowable {
					public static class: java.lang.Class<org.unimodules.core.errors.CodedRuntimeException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public getCode(): string;
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
					public getMessage(): string;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module errors {
				export class CurrentActivityNotFoundException extends org.unimodules.core.errors.CodedException implements org.unimodules.core.interfaces.CodedThrowable {
					public static class: java.lang.Class<org.unimodules.core.errors.CurrentActivityNotFoundException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public getCode(): string;
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
					public getMessage(): string;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module errors {
				export class InvalidArgumentException extends org.unimodules.core.errors.CodedRuntimeException {
					public static class: java.lang.Class<org.unimodules.core.errors.InvalidArgumentException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public getCode(): string;
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
					public getMessage(): string;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module errors {
				export class ModuleNotFoundException extends org.unimodules.core.errors.CodedException implements org.unimodules.core.interfaces.CodedThrowable {
					public static class: java.lang.Class<org.unimodules.core.errors.ModuleNotFoundException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public getCode(): string;
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
					public getMessage(): string;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class ActivityEventListener extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.interfaces.ActivityEventListener>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.ActivityEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onActivityResult(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.Intent): void;
						onNewIntent(param0: globalAndroid.content.Intent): void;
					});
					public constructor();
					public onNewIntent(param0: globalAndroid.content.Intent): void;
					public onActivityResult(param0: globalAndroid.app.Activity, param1: number, param2: number, param3: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class ActivityProvider extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.interfaces.ActivityProvider>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.ActivityProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCurrentActivity(): globalAndroid.app.Activity;
					});
					public constructor();
					public getCurrentActivity(): globalAndroid.app.Activity;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class Arguments extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.interfaces.Arguments>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.Arguments interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						containsKey(param0: string): boolean;
						get(param0: string): any;
						getBoolean(param0: string): boolean;
						getBoolean(param0: string, param1: boolean): boolean;
						getDouble(param0: string): number;
						getDouble(param0: string, param1: number): number;
						getInt(param0: string): number;
						getInt(param0: string, param1: number): number;
						getLong(param0: string): number;
						getLong(param0: string, param1: number): number;
						getString(param0: string): string;
						getString(param0: string, param1: string): string;
						getList(param0: string): java.util.List<any>;
						getList(param0: string, param1: java.util.List<any>): java.util.List<any>;
						getMap(param0: string): java.util.Map<any,any>;
						getMap(param0: string, param1: java.util.Map<any,any>): java.util.Map<any,any>;
						getArguments(param0: string): org.unimodules.core.interfaces.Arguments;
						isEmpty(): boolean;
						size(): number;
					});
					public constructor();
					public get(param0: string): any;
					public getArguments(param0: string): org.unimodules.core.interfaces.Arguments;
					public isEmpty(): boolean;
					public getDouble(param0: string, param1: number): number;
					public getMap(param0: string): java.util.Map<any,any>;
					public getInt(param0: string): number;
					public size(): number;
					public getBoolean(param0: string, param1: boolean): boolean;
					public getString(param0: string): string;
					public getMap(param0: string, param1: java.util.Map<any,any>): java.util.Map<any,any>;
					public getString(param0: string, param1: string): string;
					public getLong(param0: string, param1: number): number;
					public containsKey(param0: string): boolean;
					public getBoolean(param0: string): boolean;
					public getList(param0: string, param1: java.util.List<any>): java.util.List<any>;
					public getDouble(param0: string): number;
					public getLong(param0: string): number;
					public getInt(param0: string, param1: number): number;
					public getList(param0: string): java.util.List<any>;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class CodedThrowable extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.interfaces.CodedThrowable>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.CodedThrowable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getCode(): string;
						getMessage(): string;
					});
					public constructor();
					public getCode(): string;
					public getMessage(): string;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class Consumer<T>  extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.interfaces.Consumer<any>>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.Consumer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: T): void;
					});
					public constructor();
					public apply(param0: T): void;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class DoNotStrip extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.unimodules.core.interfaces.DoNotStrip>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.DoNotStrip interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class ExpoMethod extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.unimodules.core.interfaces.ExpoMethod>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.ExpoMethod interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class ExpoProp extends java.lang.Object implements java.lang.annotation.Annotation {
					public static class: java.lang.Class<org.unimodules.core.interfaces.ExpoProp>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.ExpoProp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						name(): string;
						equals(param0: any): boolean;
						hashCode(): number;
						toString(): string;
						annotationType(): java.lang.Class<any>;
					});
					public constructor();
					public equals(param0: any): boolean;
					public name(): string;
					public toString(): string;
					public annotationType(): java.lang.Class<any>;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class Function<T, R>  extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.interfaces.Function<any,any>>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.Function<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: T): R;
					});
					public constructor();
					public apply(param0: T): R;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class InternalModule extends java.lang.Object implements org.unimodules.core.interfaces.RegistryLifecycleListener {
					public static class: java.lang.Class<org.unimodules.core.interfaces.InternalModule>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.InternalModule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getExportedInterfaces(): java.util.List<any>;
						onCreate(param0: org.unimodules.core.ModuleRegistry): void;
						onDestroy(): void;
					});
					public constructor();
					public onDestroy(): void;
					public onCreate(param0: org.unimodules.core.ModuleRegistry): void;
					public getExportedInterfaces(): java.util.List<any>;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class JavaScriptContextProvider extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.interfaces.JavaScriptContextProvider>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.JavaScriptContextProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getJavaScriptContextRef(): number;
					});
					public constructor();
					public getJavaScriptContextRef(): number;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class LifecycleEventListener extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.interfaces.LifecycleEventListener>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.LifecycleEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onHostResume(): void;
						onHostPause(): void;
						onHostDestroy(): void;
					});
					public constructor();
					public onHostResume(): void;
					public onHostDestroy(): void;
					public onHostPause(): void;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class Package extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.interfaces.Package>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.Package interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createInternalModules(param0: globalAndroid.content.Context): java.util.List<any>;
						createExportedModules(param0: globalAndroid.content.Context): java.util.List<any>;
						createViewManagers(param0: globalAndroid.content.Context): java.util.List<any>;
						createSingletonModules(param0: globalAndroid.content.Context): java.util.List<any>;
					});
					public constructor();
					public createExportedModules(param0: globalAndroid.content.Context): java.util.List<any>;
					public createSingletonModules(param0: globalAndroid.content.Context): java.util.List<any>;
					public createViewManagers(param0: globalAndroid.content.Context): java.util.List<any>;
					public createInternalModules(param0: globalAndroid.content.Context): java.util.List<any>;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class RegistryLifecycleListener extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.interfaces.RegistryLifecycleListener>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.RegistryLifecycleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onCreate(param0: org.unimodules.core.ModuleRegistry): void;
						onDestroy(): void;
					});
					public constructor();
					public onDestroy(): void;
					public onCreate(param0: org.unimodules.core.ModuleRegistry): void;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class RuntimeEnvironmentInterface extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.interfaces.RuntimeEnvironmentInterface>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.RuntimeEnvironmentInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						platformName(): string;
						platformVersion(): org.unimodules.core.interfaces.RuntimeEnvironmentInterface.PlatformVersion;
					});
					public constructor();
					public platformVersion(): org.unimodules.core.interfaces.RuntimeEnvironmentInterface.PlatformVersion;
					public platformName(): string;
				}
				export module RuntimeEnvironmentInterface {
					export class PlatformVersion extends java.lang.Object {
						public static class: java.lang.Class<org.unimodules.core.interfaces.RuntimeEnvironmentInterface.PlatformVersion>;
						/**
						 * Constructs a new instance of the org.unimodules.core.interfaces.RuntimeEnvironmentInterface$PlatformVersion interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							major(): number;
							minor(): number;
							patch(): number;
							prerelease(): string;
						});
						public constructor();
						public minor(): number;
						public major(): number;
						public prerelease(): string;
						public patch(): number;
					}
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export class SingletonModule extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.interfaces.SingletonModule>;
					/**
					 * Constructs a new instance of the org.unimodules.core.interfaces.SingletonModule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getName(): string;
					});
					public constructor();
					public getName(): string;
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export module services {
					export class EventEmitter extends java.lang.Object {
						public static class: java.lang.Class<org.unimodules.core.interfaces.services.EventEmitter>;
						/**
						 * Constructs a new instance of the org.unimodules.core.interfaces.services.EventEmitter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							emit(param0: number, param1: string, param2: globalAndroid.os.Bundle): void;
							emit(param0: string, param1: globalAndroid.os.Bundle): void;
							emit(param0: number, param1: org.unimodules.core.interfaces.services.EventEmitter.Event): void;
						});
						public constructor();
						public emit(param0: number, param1: string, param2: globalAndroid.os.Bundle): void;
						public emit(param0: string, param1: globalAndroid.os.Bundle): void;
						public emit(param0: number, param1: org.unimodules.core.interfaces.services.EventEmitter.Event): void;
					}
					export module EventEmitter {
						export abstract class BaseEvent extends java.lang.Object implements org.unimodules.core.interfaces.services.EventEmitter.Event {
							public static class: java.lang.Class<org.unimodules.core.interfaces.services.EventEmitter.BaseEvent>;
							public constructor();
							public canCoalesce(): boolean;
							public getEventBody(): globalAndroid.os.Bundle;
							public getEventName(): string;
							public getCoalescingKey(): number;
						}
						export class Event extends java.lang.Object {
							public static class: java.lang.Class<org.unimodules.core.interfaces.services.EventEmitter.Event>;
							/**
							 * Constructs a new instance of the org.unimodules.core.interfaces.services.EventEmitter$Event interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								canCoalesce(): boolean;
								getCoalescingKey(): number;
								getEventName(): string;
								getEventBody(): globalAndroid.os.Bundle;
							});
							public constructor();
							public canCoalesce(): boolean;
							public getEventBody(): globalAndroid.os.Bundle;
							public getEventName(): string;
							public getCoalescingKey(): number;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export module services {
					export class KeepAwakeManager extends java.lang.Object {
						public static class: java.lang.Class<org.unimodules.core.interfaces.services.KeepAwakeManager>;
						/**
						 * Constructs a new instance of the org.unimodules.core.interfaces.services.KeepAwakeManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							activate(param0: string, param1: java.lang.Runnable): void;
							deactivate(param0: string, param1: java.lang.Runnable): void;
							isActivated(): boolean;
						});
						public constructor();
						public isActivated(): boolean;
						public activate(param0: string, param1: java.lang.Runnable): void;
						public deactivate(param0: string, param1: java.lang.Runnable): void;
					}
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module interfaces {
				export module services {
					export class UIManager extends java.lang.Object {
						public static class: java.lang.Class<org.unimodules.core.interfaces.services.UIManager>;
						/**
						 * Constructs a new instance of the org.unimodules.core.interfaces.services.UIManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							addUIBlock(param0: number, param1: org.unimodules.core.interfaces.services.UIManager.UIBlock<any>, param2: java.lang.Class<any>): void;
							addUIBlock(param0: org.unimodules.core.interfaces.services.UIManager.GroupUIBlock): void;
							runOnUiQueueThread(param0: java.lang.Runnable): void;
							runOnClientCodeQueueThread(param0: java.lang.Runnable): void;
							registerLifecycleEventListener(param0: org.unimodules.core.interfaces.LifecycleEventListener): void;
							unregisterLifecycleEventListener(param0: org.unimodules.core.interfaces.LifecycleEventListener): void;
							registerActivityEventListener(param0: org.unimodules.core.interfaces.ActivityEventListener): void;
							unregisterActivityEventListener(param0: org.unimodules.core.interfaces.ActivityEventListener): void;
						});
						public constructor();
						public runOnUiQueueThread(param0: java.lang.Runnable): void;
						public addUIBlock(param0: org.unimodules.core.interfaces.services.UIManager.GroupUIBlock): void;
						public registerActivityEventListener(param0: org.unimodules.core.interfaces.ActivityEventListener): void;
						public unregisterActivityEventListener(param0: org.unimodules.core.interfaces.ActivityEventListener): void;
						public addUIBlock(param0: number, param1: org.unimodules.core.interfaces.services.UIManager.UIBlock<any>, param2: java.lang.Class<any>): void;
						public runOnClientCodeQueueThread(param0: java.lang.Runnable): void;
						public unregisterLifecycleEventListener(param0: org.unimodules.core.interfaces.LifecycleEventListener): void;
						public registerLifecycleEventListener(param0: org.unimodules.core.interfaces.LifecycleEventListener): void;
					}
					export module UIManager {
						export class GroupUIBlock extends java.lang.Object {
							public static class: java.lang.Class<org.unimodules.core.interfaces.services.UIManager.GroupUIBlock>;
							/**
							 * Constructs a new instance of the org.unimodules.core.interfaces.services.UIManager$GroupUIBlock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								execute(param0: org.unimodules.core.interfaces.services.UIManager.ViewHolder): void;
							});
							public constructor();
							public execute(param0: org.unimodules.core.interfaces.services.UIManager.ViewHolder): void;
						}
						export class UIBlock<T>  extends java.lang.Object {
							public static class: java.lang.Class<org.unimodules.core.interfaces.services.UIManager.UIBlock<any>>;
							/**
							 * Constructs a new instance of the org.unimodules.core.interfaces.services.UIManager$UIBlock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								resolve(param0: T): void;
								reject(param0: java.lang.Throwable): void;
							});
							public constructor();
							public reject(param0: java.lang.Throwable): void;
							public resolve(param0: T): void;
						}
						export class ViewHolder extends java.lang.Object {
							public static class: java.lang.Class<org.unimodules.core.interfaces.services.UIManager.ViewHolder>;
							/**
							 * Constructs a new instance of the org.unimodules.core.interfaces.services.UIManager$ViewHolder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								get(param0: any): globalAndroid.view.View;
							});
							public constructor();
							public get(param0: any): globalAndroid.view.View;
						}
					}
				}
			}
		}
	}
}

declare module org {
	export module unimodules {
		export module core {
			export module utilities {
				export class FileUtilities extends java.lang.Object {
					public static class: java.lang.Class<org.unimodules.core.utilities.FileUtilities>;
					public constructor();
					public static ensureDirExists(param0: java.io.File): java.io.File;
					public static generateOutputPath(param0: java.io.File, param1: string, param2: string): string;
				}
			}
		}
	}
}

//Generics information:
//org.unimodules.core.ViewManager:1
//org.unimodules.core.interfaces.Consumer:1
//org.unimodules.core.interfaces.Function:2
//org.unimodules.core.interfaces.services.UIManager.UIBlock:1

