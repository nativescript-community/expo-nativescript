import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import type { ItemEventData } from "@nativescript/core";
import { ListView } from "react-nativescript";
import { Dialogs } from "@nativescript/core";
import { createStyleSheet } from "../util/createStyleSheet";

type ContactsScreenProps = {
    route: RouteProp<MainStackParamList, "contacts">,
    navigation: FrameNavigationProp<MainStackParamList, "contacts">,
}

interface MyItem {
    label: string,
    callback?: () => void;
}
const items: MyItem[] = [
    {
        label: "Check location permission",
        callback: () => Dialogs.alert("Not yet implemented!"),
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
