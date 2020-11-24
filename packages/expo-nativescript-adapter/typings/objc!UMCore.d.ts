
declare class UMAppDelegateWrapper extends UIResponder implements UIApplicationDelegate {

	static alloc(): UMAppDelegateWrapper; // inherited from NSObject

	static new(): UMAppDelegateWrapper; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	window: UIWindow; // inherited from UIApplicationDelegate

	readonly  // inherited from NSObjectProtocol

	applicationConfigurationForConnectingSceneSessionOptions(application: UIApplication, connectingSceneSession: UISceneSession, options: UISceneConnectionOptions): UISceneConfiguration;

	applicationContinueUserActivityRestorationHandler(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<UIUserActivityRestoring>) => void): boolean;

	applicationDidBecomeActive(application: UIApplication): void;

	applicationDidChangeStatusBarFrame(application: UIApplication, oldStatusBarFrame: CGRect): void;

	applicationDidChangeStatusBarOrientation(application: UIApplication, oldStatusBarOrientation: UIInterfaceOrientation): void;

	applicationDidDecodeRestorableStateWithCoder(application: UIApplication, coder: NSCoder): void;

	applicationDidDiscardSceneSessions(application: UIApplication, sceneSessions: NSSet<UISceneSession>): void;

	applicationDidEnterBackground(application: UIApplication): void;

	applicationDidFailToContinueUserActivityWithTypeError(application: UIApplication, userActivityType: string, error: NSError): void;

	applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError): void;

	applicationDidFinishLaunching(application: UIApplication): void;

	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	applicationDidReceiveLocalNotification(application: UIApplication, notification: UILocalNotification): void;

	applicationDidReceiveMemoryWarning(application: UIApplication): void;

	applicationDidReceiveRemoteNotification(application: UIApplication, userInfo: NSDictionary<any, any>): void;

	applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void;

	applicationDidRegisterUserNotificationSettings(application: UIApplication, notificationSettings: UIUserNotificationSettings): void;

	applicationDidUpdateUserActivity(application: UIApplication, userActivity: NSUserActivity): void;

	applicationHandleActionWithIdentifierForLocalNotificationCompletionHandler(application: UIApplication, identifier: string, notification: UILocalNotification, completionHandler: () => void): void;

	applicationHandleActionWithIdentifierForLocalNotificationWithResponseInfoCompletionHandler(application: UIApplication, identifier: string, notification: UILocalNotification, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	applicationHandleActionWithIdentifierForRemoteNotificationCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	applicationHandleActionWithIdentifierForRemoteNotificationWithResponseInfoCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	applicationHandleEventsForBackgroundURLSessionCompletionHandler(application: UIApplication, identifier: string, completionHandler: () => void): void;

	applicationHandleIntentCompletionHandler(application: UIApplication, intent: INIntent, completionHandler: (p1: INIntentResponse) => void): void;

	applicationHandleOpenURL(application: UIApplication, url: NSURL): boolean;

	applicationHandleWatchKitExtensionRequestReply(application: UIApplication, userInfo: NSDictionary<any, any>, reply: (p1: NSDictionary<any, any>) => void): void;

	applicationHandlerForIntent(application: UIApplication, intent: INIntent): any;

	applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	applicationPerformActionForShortcutItemCompletionHandler(application: UIApplication, shortcutItem: UIApplicationShortcutItem, completionHandler: (p1: boolean) => void): void;

	applicationPerformFetchWithCompletionHandler(application: UIApplication, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	applicationProtectedDataDidBecomeAvailable(application: UIApplication): void;

	applicationProtectedDataWillBecomeUnavailable(application: UIApplication): void;

	applicationShouldAllowExtensionPointIdentifier(application: UIApplication, extensionPointIdentifier: string): boolean;

	applicationShouldRequestHealthAuthorization(application: UIApplication): void;

	applicationShouldRestoreApplicationState(application: UIApplication, coder: NSCoder): boolean;

	applicationShouldRestoreSecureApplicationState(application: UIApplication, coder: NSCoder): boolean;

	applicationShouldSaveApplicationState(application: UIApplication, coder: NSCoder): boolean;

	applicationShouldSaveSecureApplicationState(application: UIApplication, coder: NSCoder): boolean;

	applicationSignificantTimeChange(application: UIApplication): void;

	applicationSupportedInterfaceOrientationsForWindow(application: UIApplication, window: UIWindow): UIInterfaceOrientationMask;

	applicationUserDidAcceptCloudKitShareWithMetadata(application: UIApplication, cloudKitShareMetadata: CKShareMetadata): void;

	applicationViewControllerWithRestorationIdentifierPathCoder(application: UIApplication, identifierComponents: NSArray<string> | string[], coder: NSCoder): UIViewController;

	applicationWillChangeStatusBarFrame(application: UIApplication, newStatusBarFrame: CGRect): void;

	applicationWillChangeStatusBarOrientationDuration(application: UIApplication, newStatusBarOrientation: UIInterfaceOrientation, duration: number): void;

	applicationWillContinueUserActivityWithType(application: UIApplication, userActivityType: string): boolean;

	applicationWillEncodeRestorableStateWithCoder(application: UIApplication, coder: NSCoder): void;

	applicationWillEnterForeground(application: UIApplication): void;

	applicationWillFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	applicationWillResignActive(application: UIApplication): void;

	applicationWillTerminate(application: UIApplication): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface UMAppLifecycleListener extends NSObjectProtocol {

	onAppBackgrounded(): void;

	onAppContentDidAppear?(): void;

	onAppContentWillReload?(): void;

	onAppForegrounded(): void;
}
declare var UMAppLifecycleListener: {

	prototype: UMAppLifecycleListener;
};

interface UMAppLifecycleService extends NSObjectProtocol {

	registerAppLifecycleListener(listener: UMAppLifecycleListener): void;

	setAppStateToBackground(): void;

	setAppStateToForeground(): void;

	unregisterAppLifecycleListener(listener: UMAppLifecycleListener): void;
}
declare var UMAppLifecycleService: {

	prototype: UMAppLifecycleService;
};

declare var UMCoreVersionNumber: number;

declare var UMCoreVersionString: interop.Reference<number>;

declare var UMErrorCodeCanceled: string;

declare function UMErrorWithMessage(p1: string): NSError;

interface UMEventEmitter {

	startObserving(): void;

	stopObserving(): void;

	supportedEvents(): NSArray<string>;
}
declare var UMEventEmitter: {

	prototype: UMEventEmitter;
};

interface UMEventEmitterService {

	sendEventWithNameBody(name: string, body: any): void;
}
declare var UMEventEmitterService: {

	prototype: UMEventEmitterService;
};

declare class UMExportedModule extends NSObject implements NSCopying, UMInternalModule {

	static alloc(): UMExportedModule; // inherited from NSObject

	static exportedInterfaces(): NSArray<any /* Protocol */>;

	static exportedModuleName(): string;

	static new(): UMExportedModule; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(); // inherited from UMInternalModule

	callExportedMethodWithArgumentsResolverRejecter(methodName: string, _arguments: NSArray<any> | any[], resolver: (p1: any) => void, rejecter: (p1: string, p2: string, p3: NSError) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constantsToExport(): NSDictionary<any, any>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	getExportedMethods(): NSDictionary<string, string>;

	init(): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	methodQueue(): NSObject;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare function UMFatal(p1: NSError): void;

interface UMInternalModule extends NSObjectProtocol {

	init?(): UMInternalModule;
}
declare var UMInternalModule: {

	prototype: UMInternalModule;

	exportedInterfaces(): NSArray<any /* Protocol */>;
};

interface UMJavaScriptContextProvider extends NSObjectProtocol {

	javaScriptContextRef(): interop.Pointer | interop.Reference<any>;

	javaScriptRuntimePointer(): interop.Pointer | interop.Reference<any>;
}
declare var UMJavaScriptContextProvider: {

	prototype: UMJavaScriptContextProvider;
};

interface UMKernelService extends NSObjectProtocol {
}
declare var UMKernelService: {

	prototype: UMKernelService;

	name(): string;

	sharedInstance(): UMKernelService;
};

interface UMLogHandler {

	error(message: string): void;

	fatal(error: NSError): void;

	info(message: string): void;

	warn(message: string): void;
}
declare var UMLogHandler: {

	prototype: UMLogHandler;
};

declare class UMLogManager extends UMSingletonModule {

	static alloc(): UMLogManager; // inherited from NSObject

	static new(): UMLogManager; // inherited from NSObject

	error(message: string): void;

	fatal(error: NSError): void;

	info(message: string): void;

	warn(message: string): void;
}

interface UMMethodInfo {
	jsName: string;
	objcName: string;
}
declare var UMMethodInfo: interop.StructType<UMMethodInfo>;

interface UMModuleInfo {
	jsName: string;
	internalName: string;
}
declare var UMModuleInfo: interop.StructType<UMModuleInfo>;

declare class UMModuleRegistry extends NSObject {

	static alloc(): UMModuleRegistry; // inherited from NSObject

	static new(): UMModuleRegistry; // inherited from NSObject

	constructor(o: { internalModules: NSSet<UMInternalModule>; exportedModules: NSSet<UMExportedModule>; viewManagers: NSSet<UMViewManager>; singletonModules: NSSet<any>; });

	getAllExportedModules(): NSArray<UMExportedModule>;

	getAllInternalModules(): NSArray<UMInternalModule>;

	getAllSingletonModules(): NSArray<any>;

	getAllViewManagers(): NSArray<UMViewManager>;

	getExportedModuleForName(name: string): UMExportedModule;

	getExportedModuleOfClass(moduleClass: typeof NSObject): UMExportedModule;

	getModuleImplementingProtocol(protocol: any /* Protocol */): any;

	getSingletonModuleForName(singletonModuleName: string): any;

	initWithInternalModulesExportedModulesViewManagersSingletonModules(internalModules: NSSet<UMInternalModule>, exportedModules: NSSet<UMExportedModule>, viewManagers: NSSet<UMViewManager>, singletonModules: NSSet<any>): this;

	initialize(): void;

	registerExportedModule(exportedModule: UMExportedModule): void;

	registerInternalModule(internalModule: UMInternalModule): void;

	registerViewManager(viewManager: UMViewManager): void;

	setDelegate(delegate: UMModuleRegistryDelegate): void;
}

interface UMModuleRegistryConsumer extends NSObjectProtocol {

	setModuleRegistry(moduleRegistry: UMModuleRegistry): void;
}
declare var UMModuleRegistryConsumer: {

	prototype: UMModuleRegistryConsumer;
};

interface UMModuleRegistryDelegate extends NSObjectProtocol {

	pickInternalModuleImplementingInterfaceFromAmongModules(interface: any /* Protocol */, internalModules: NSArray<UMInternalModule> | UMInternalModule[]): UMInternalModule;
}
declare var UMModuleRegistryDelegate: {

	prototype: UMModuleRegistryDelegate;
};

declare class UMModuleRegistryProvider extends NSObject {

	static alloc(): UMModuleRegistryProvider; // inherited from NSObject

	static getSingletonModuleForClass(singletonClass: typeof NSObject): UMSingletonModule;

	static new(): UMModuleRegistryProvider; // inherited from NSObject

	static singletonModules(): NSSet<any>;

	moduleRegistryDelegate: UMModuleRegistryDelegate;

	constructor(o: { singletonModules: NSSet<any>; });

	initWithSingletonModules(modules: NSSet<any>): this;

	moduleRegistry(): UMModuleRegistry;
}

declare function UMSharedApplication(): UIApplication;

declare class UMSingletonModule extends NSObject {

	static alloc(): UMSingletonModule; // inherited from NSObject

	static name(): string;

	static new(): UMSingletonModule; // inherited from NSObject

	priority(): number;
}

interface UMUIManager extends NSObjectProtocol {

	addUIBlock(block: (p1: NSDictionary<any, UIView>) => void): void;

	addUIBlockForViewImplementingProtocol(block: (p1: any) => void, viewId: any, protocol: any /* Protocol */): void;

	addUIBlockForViewOfClass(block: (p1: any) => void, viewId: any, klass: typeof NSObject): void;

	dispatchOnClientThread(block: () => void): void;

	executeUIBlock(block: (p1: NSDictionary<any, UIView>) => void): void;

	executeUIBlockForViewImplementingProtocol(block: (p1: any) => void, viewId: any, protocol: any /* Protocol */): void;

	executeUIBlockForViewOfClass(block: (p1: any) => void, viewId: any, klass: typeof NSObject): void;
}
declare var UMUIManager: {

	prototype: UMUIManager;
};

declare class UMUtilities extends NSObject implements UMInternalModule, UMModuleRegistryConsumer, UMUtilitiesInterface {

	static NSDate(json: any): Date;

	static UIColor(json: any): UIColor;

	static alloc(): UMUtilities; // inherited from NSObject

	static exportedInterfaces(): NSArray<any /* Protocol */>;

	static hexStringWithCGColor(color: any): string;

	static new(): UMUtilities; // inherited from NSObject

	static performSynchronouslyOnMainThread(block: () => void): void;

	static screenScale(): number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(); // inherited from UMInternalModule

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	currentViewController(): UIViewController;

	init(): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	launchOptions(): NSDictionary<any, any>;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setModuleRegistry(moduleRegistry: UMModuleRegistry): void;
}

interface UMUtilitiesInterface {

	currentViewController(): UIViewController;

	launchOptions(): NSDictionary<any, any>;
}
declare var UMUtilitiesInterface: {

	prototype: UMUtilitiesInterface;
};

declare class UMViewManager extends UMExportedModule {

	static alloc(): UMViewManager; // inherited from NSObject

	static new(): UMViewManager; // inherited from NSObject

	getPropsNames(): NSDictionary<string, string>;

	supportedEvents(): NSArray<string>;

	updatePropWithValueOnView(propName: string, value: any, view: UIView): void;

	view(): UIView;

	viewName(): string;
}
