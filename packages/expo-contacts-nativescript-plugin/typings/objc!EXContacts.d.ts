
declare class EXContacts extends UMExportedModule implements UMModuleRegistryConsumer {

	static addressesForContact(person: CNContact): NSArray<any>;

	static alloc(): EXContacts; // inherited from NSObject

	static assembleDisplayNameForContact(person: CNContact): string;

	static birthdayForContact(birthday: NSDateComponents): NSDictionary<any, any>;

	static datesForContact(person: CNContact): NSArray<any>;

	static decodeAddresses(input: NSArray<any> | any[]): NSMutableArray<CNLabeledValue<any>>;

	static decodeBirthdayContact(input: NSDictionary<any, any>, contact: CNContact): NSDateComponents;

	static decodeDates(input: NSArray<any> | any[]): NSMutableArray<CNLabeledValue<any>>;

	static decodeEmailAddresses(input: NSArray<any> | any[]): NSMutableArray<CNLabeledValue<any>>;

	static decodeInstantMessageAddresses(input: NSArray<any> | any[]): NSMutableArray<CNLabeledValue<any>>;

	static decodePhoneNumbers(input: NSArray<any> | any[]): NSMutableArray<CNLabeledValue<any>>;

	static decodeRelationships(input: NSArray<any> | any[]): NSMutableArray<CNLabeledValue<any>>;

	static decodeSocialProfiles(input: NSArray<any> | any[]): NSMutableArray<CNLabeledValue<any>>;

	static decodeUrlAddresses(input: NSArray<any> | any[]): NSMutableArray<CNLabeledValue<any>>;

	static emailsForContact(person: CNContact): NSArray<any>;

	static encodeContainer(container: CNContainer): NSDictionary<any, any>;

	static encodeGroup(group: CNGroup): NSDictionary<any, any>;

	static instantMessageAddressesForContact(person: CNContact): NSArray<any>;

	static new(): EXContacts; // inherited from NSObject

	static phoneNumbersForContact(person: CNContact): NSArray<any>;

	static relationsForContact(person: CNContact): NSArray<any>;

	static socialProfilesForContact(person: CNContact): NSArray<any>;

	static urlsForContact(person: CNContact): NSArray<any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

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

	setModuleRegistry(moduleRegistry: UMModuleRegistry): void;
}

declare class EXContactsPermissionRequester extends NSObject implements UMPermissionsRequester {

	static alloc(): EXContactsPermissionRequester; // inherited from NSObject

	static new(): EXContactsPermissionRequester; // inherited from NSObject

	static permissionType(): string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getPermissions(): NSDictionary<any, any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	requestPermissionsWithResolverRejecter(resolve: (p1: any) => void, reject: (p1: string, p2: string, p3: NSError) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var EXContactsVersionNumber: number;

declare var EXContactsVersionString: interop.Reference<number>;

declare class EXContactsViewController extends CNContactViewController {

	static alloc(): EXContactsViewController; // inherited from NSObject

	static new(): EXContactsViewController; // inherited from NSObject

	static viewControllerForContact(contact: CNContact): EXContactsViewController; // inherited from CNContactViewController

	static viewControllerForNewContact(contact: CNContact): EXContactsViewController; // inherited from CNContactViewController

	static viewControllerForUnknownContact(contact: CNContact): EXContactsViewController; // inherited from CNContactViewController

	closeController(): void;

	setCloseButton(title: string): void;
}
