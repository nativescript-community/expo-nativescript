import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { Home } from "./HomeScreen";
import { Contacts } from "./ContactsScreen";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: true,
            }}
        >
            <StackNavigator.Screen options={{ title: "Home" }} name="home" component={Home} />
            <StackNavigator.Screen options={{ title: "Contacts" }} name="contacts" component={Contacts} />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
