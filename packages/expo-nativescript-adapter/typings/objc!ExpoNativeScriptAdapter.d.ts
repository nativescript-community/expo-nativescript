
declare class InternalServicesModule extends NSObject implements UMAppLifecycleService, UMEventEmitterService, UMInternalModule {

	static alloc(): InternalServicesModule; // inherited from NSObject

	static exportedInterfaces(): NSArray<any /* Protocol */>;

	static new(): InternalServicesModule; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(); // inherited from UMInternalModule

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	init(): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerAppLifecycleListener(listener: UMAppLifecycleListener): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sendEventWithNameBody(name: string, body: any): void;

	setAppStateToBackground(): void;

	setAppStateToForeground(): void;

	unregisterAppLifecycleListener(listener: UMAppLifecycleListener): void;
}
