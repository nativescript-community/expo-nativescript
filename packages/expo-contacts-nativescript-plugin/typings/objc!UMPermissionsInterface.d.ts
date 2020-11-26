
declare const enum UMPermissionStatus {

	Denied = 0,

	Granted = 1,

	Undetermined = 2
}

interface UMPermissionsInterface {

	askForPermissionUsingRequesterClassResolveReject(requesterClass: typeof NSObject, resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	getPermissionUsingRequesterClassResolveReject(requesterClass: typeof NSObject, resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	hasGrantedPermissionUsingRequesterClass(requesterClass: typeof NSObject): boolean;

	registerRequesters(newRequesters: NSArray<UMPermissionsRequester> | UMPermissionsRequester[]): void;
}
declare var UMPermissionsInterface: {

	prototype: UMPermissionsInterface;
};

declare var UMPermissionsInterfaceVersionNumber: number;

declare var UMPermissionsInterfaceVersionString: interop.Reference<number>;

declare class UMPermissionsMethodsDelegate extends NSObject {

	static alloc(): UMPermissionsMethodsDelegate; // inherited from NSObject

	static askForPermissionWithPermissionsManagerWithRequesterResolveReject(permissionsManager: UMPermissionsInterface, requesterClass: typeof NSObject, resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	static getPermissionWithPermissionsManagerWithRequesterResolveReject(permissionsManager: UMPermissionsInterface, requesterClass: typeof NSObject, resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	static new(): UMPermissionsMethodsDelegate; // inherited from NSObject

	static registerRequestersWithPermissionsManager(newRequesters: NSArray<UMPermissionsRequester> | UMPermissionsRequester[], permissionsManager: UMPermissionsInterface): void;
}

interface UMPermissionsRequester extends NSObjectProtocol {

	getPermissions(): NSDictionary<any, any>;

	requestPermissionsWithResolverRejecter(resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;
}
declare var UMPermissionsRequester: {

	prototype: UMPermissionsRequester;

	permissionType(): string;
};

interface UMUserNotificationCenterProxyInterface extends NSObjectProtocol {

	getNotificationSettingsWithCompletionHandler(completionHandler: (p1: UNNotificationSettings) => void): void;

	requestAuthorizationWithOptionsCompletionHandler(options: UNAuthorizationOptions, completionHandler: (p1: boolean, p2: NSError) => void): void;
}
declare var UMUserNotificationCenterProxyInterface: {

	prototype: UMUserNotificationCenterProxyInterface;
};
