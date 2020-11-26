// import { NativeModulesProxy } from '@unimodules/core';
import { NativeModulesProxy } from "@nativescript-community/expo-nativescript-adapter";

export default NativeModulesProxy.ExpoContacts;

/**
 * Sadly, Proxy is only supported on Android, so we can't do this... 
 * @see https://github.com/Akylas/nativescript-opencv/blob/fa1ea24aed3e67342c82d3a651f90382d694de3e/src/opencv.android.ts#L81
 */
// export default new Proxy(
//     expoModulesProxy,
//     {
//         get: function(target, prop: string|number|Symbol, receiver: any): Promise<any> | undefined {
//             if(!(expoModulesProxy as any).constantsToExport.ExpoContacts){
//                 return void 0;
//             }
//             if(typeof prop !== "string"){
//                 return void 0;
//             }
//             if(!(expoModulesProxy as any).constantsToExport.ExpoContacts[prop]){
//                 return void 0;
//             }

//             /* Something like this? I haven't written a Proxy before. */
//             return (function(...args: any[]){
//                 return expoModulesProxy.callMethod("ExpoContacts", prop, ...args);
//             })();
//         }
//     }
// );

// export default {
//     getContactsAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "getContactsAsync", ...args),
//     shareContactAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "shareContactAsync", ...args),
//     addContactAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "addContactAsync", ...args),
//     updateContactAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "updateContactAsync", ...args),
//     removeContactAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "removeContactAsync", ...args),
//     writeContactToFileAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "writeContactToFileAsync", ...args),
//     presentFormAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "presentFormAsync", ...args),
//     addExistingGroupToContainerAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "addExistingGroupToContainerAsync", ...args),
//     createGroupAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "createGroupAsync", ...args),
//     updateGroupNameAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "updateGroupNameAsync", ...args),
//     removeGroupAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "removeGroupAsync", ...args),
//     addExistingContactToGroupAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "addExistingContactToGroupAsync", ...args),
//     removeContactFromGroupAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "removeContactFromGroupAsync", ...args),
//     getGroupsAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "getGroupsAsync", ...args),
//     getDefaultContainerIdentifierAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "getDefaultContainerIdentifierAsync", ...args),
//     getContainersAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "getContainersAsync", ...args),
//     getPermissionsAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "getPermissionsAsync", ...args),
//     requestPermissionsAsync: !(expoModulesProxy as any).constantsToExport.ExpoContacts ? void 0 :
//         (...args: any[]) => expoModulesProxy.callMethod("ExpoContacts", "requestPermissionsAsync", ...args),
// };