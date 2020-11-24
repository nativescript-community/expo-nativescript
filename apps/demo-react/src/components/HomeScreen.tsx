import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { Dialogs } from '@nativescript/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "home">,
    navigation: FrameNavigationProp<MainStackParamList, "home">,
}

export function Home({ navigation }: HomeScreenProps) {
    return (
        <gridLayout
            rows={"*, auto, *"}
            columns={"*, auto, *"}
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <button
                row={1}
                col={1}
                backgroundColor="orange"
                onTap={() => {
                    navigation.navigate('permissions');
                }}
                style={{
                    fontSize: 24,
                }}
            >
                expo_permissions
            </button>
        </gridLayout>
    );
}
