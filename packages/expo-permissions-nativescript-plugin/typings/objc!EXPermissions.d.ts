
declare var EXPermissionExpiresNever: string;

declare class EXPermissions extends UMExportedModule implements UMModuleRegistryConsumer, UMPermissionsInterface {

	static alloc(): EXPermissions; // inherited from NSObject

	static new(): EXPermissions; // inherited from NSObject

	static permissionStringForStatus(status: UMPermissionStatus): string;

	static statusForPermission(permission: NSDictionary<any, any>): UMPermissionStatus;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	askForGlobalPermissionUsingRequesterClassWithResolverWithRejecter(requesterClass: typeof NSObject, resolver: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	askForPermissionUsingRequesterClassResolveReject(requesterClass: typeof NSObject, resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getPermissionUsingRequesterClass(requesterClass: typeof NSObject): NSDictionary<any, any>;

	getPermissionUsingRequesterClassResolveReject(requesterClass: typeof NSObject, resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	hasGrantedPermissionUsingRequesterClass(requesterClass: typeof NSObject): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerRequesters(newRequesters: NSArray<UMPermissionsRequester> | UMPermissionsRequester[]): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setModuleRegistry(moduleRegistry: UMModuleRegistry): void;
}

declare var EXPermissionsVersionNumber: number;

declare var EXPermissionsVersionString: interop.Reference<number>;

declare class EXReactNativeUserNotificationCenterProxy extends NSObject implements UMInternalModule, UMUserNotificationCenterProxyInterface {

	static alloc(): EXReactNativeUserNotificationCenterProxy; // inherited from NSObject

	static exportedInterfaces(): NSArray<any /* Protocol */>;

	static new(): EXReactNativeUserNotificationCenterProxy; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(); // inherited from UMInternalModule

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getNotificationSettingsWithCompletionHandler(completionHandler: (p1: UNNotificationSettings) => void): void;

	init(): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	requestAuthorizationWithOptionsCompletionHandler(options: UNAuthorizationOptions, completionHandler: (p1: boolean, p2: NSError) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}
