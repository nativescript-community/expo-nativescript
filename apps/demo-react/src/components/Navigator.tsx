import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { Home } from "./HomeScreen";
import { Permissions } from "./PermissionsScreen";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: true,
            }}
        >
            <StackNavigator.Screen options={{ title: "Unimodules Test Suite" }} name="home" component={Home} />
            <StackNavigator.Screen name="permissions" component={Permissions} />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
