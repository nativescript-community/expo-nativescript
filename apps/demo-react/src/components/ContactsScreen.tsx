import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import type { ItemEventData } from "@nativescript/core";
import { ListView } from "react-nativescript";
import { Dialogs } from "@nativescript/core";
import { createStyleSheet } from "../util/createStyleSheet";
import { isAvailableAsync, getPermissionsAsync, requestPermissionsAsync, addContactAsync, removeContactAsync, ContactTypes, getContactsAsync, Fields, ContactResponse, PermissionResponse } from "@nativescript-community/expo-contacts-nativescript-plugin";

type ContactsScreenProps = {
    route: RouteProp<MainStackParamList, "contacts">,
    navigation: FrameNavigationProp<MainStackParamList, "contacts">,
}

interface MyItem {
    label: string,
    callback?: () => void;
}

function errorHandler(error: any): Promise<void> {
    console.error(error);
    Dialogs.alert(`Error: ${error.message || error}`);
    return Promise.resolve();
}

const dummyContactId = "357bfc83-cef7-4937-bc77-20ad487ef6a8";

const items: MyItem[] = [
    {
        label: `Check "contacts" permission`,
        callback: () => {
            getPermissionsAsync()
            .then((response: PermissionResponse) => {
                const { canAskAgain, expires, granted, status } = response;
                Dialogs.alert(`canAskAgain: ${canAskAgain}; expires: ${expires}; granted: ${granted}; status: ${status}`);
            })
            .catch(errorHandler);
        },
    },
    {
        label: `Ask for "contacts" permission`,
        callback: () => {
            requestPermissionsAsync()
            .then((response: PermissionResponse) => {
                const { canAskAgain, expires, granted, status } = response;
                Dialogs.alert(`canAskAgain: ${canAskAgain}; expires: ${expires}; granted: ${granted}; status: ${status}`);
            })
            .catch(errorHandler);
        },
    },
    {
        label: `Check whether "contacts" is available`,
        callback: () => {
            isAvailableAsync()
            .then((available: boolean) => {
                console.log(`isAvailableAsync() resolved: ${available}`);
                Dialogs.alert(`isAvailableAsync() resolved: ${available}`);
            })
            .catch(errorHandler);
        },
    },
    {
        label: `Add a contact (constant UUID, so only works once)`,
        callback: () => {
            addContactAsync({
                id: dummyContactId,
                contactType: ContactTypes.Company,
                name: "123 Fake Street",
            })
            .then((response: string) => {
                console.log(`addContactAsync() resolved: ${response}`);
                Dialogs.alert(`addContactAsync() resolved: ${response}`);
            })
            .catch(errorHandler);
        },
    },
    {
        label: `Remove that same contact`,
        callback: () => {
            removeContactAsync(dummyContactId)
            .then((response: string) => {
                console.log(`removeContactAsync() resolved: ${response}`);
                Dialogs.alert(`removeContactAsync() resolved: ${response}`);
            })
            .catch(errorHandler);
        },
    },
    {
        label: `Get contacts`,
        callback: () => {
            getContactsAsync({
                fields: [Fields.Emails]
            })
            .then((response: ContactResponse) => {
                console.log(`getContactsAsync() resolved: ${response}`);
                Dialogs.alert(`getContactsAsync() first contact: ${JSON.stringify(response.data[0], null, 4)}`);
            })
            .catch(errorHandler);
        },
    },
];

const cellFactory = (item: MyItem) => {
    return <label style={styles.label}>{item.label}</label>;
};

export function Contacts({ navigation }: ContactsScreenProps) {
    const onItemTap = (args: ItemEventData) => {
        const index: number = args.index;
        const item: MyItem = items[index];
        item.callback?.();
    };

    return (
        <ListView
            width={"100%"}
            height={"100%"}
            items={items}
            cellFactory={cellFactory}
            onItemTap={onItemTap}
        />
    );
}

const styles = createStyleSheet({
    label: {
        fontSize: 22,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 8,
        paddingBottom: 8,
    }
});
