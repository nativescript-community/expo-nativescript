import * as React from "react";
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "./NavigationParamList";
import { useState } from "react";

type PermissionsScreenProps = {
    route: RouteProp<MainStackParamList, "permissions">,
    navigation: FrameNavigationProp<MainStackParamList, "permissions">,
}

export function Permissions({ navigation }: PermissionsScreenProps) {
    const [permLocation, setPermLocation] = useState<boolean|null>(null);

    function onButtonTap() {
        navigation.goBack();
    }

    return (
        <flexboxLayout
            style={{
                flexGrow: 1,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "gold",
            }}
        >
            <label fontSize={24} text={"You're viewing the Permissions screen!"} />
            <button onTap={onButtonTap} fontSize={24} text={"Go back"} />
            <label text={`Location permission: ${permLocation === null ? "Undetermined" : permLocation ? "Granted" : "Denied"}`}/>
            <button
                fontSize={24} text={"Check location permission"}
                onTap={()=>{
                    // TODO: Access Expo Permissions module.
                    // Permissions.ask([widget.permissionType]).then(_checkStatus);
                    // setPermLocation(true);
                }}
            />
        </flexboxLayout>
    );
}