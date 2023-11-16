import React from "react";
import {StyleSheet, Text, View} from "react-native";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import FavoritesScreen from "../screens/CartScreen";
import CartScreen from "../screens/FavoritesScreen";
import OrderHistoryScreen from "../screens/OrderHistoryScreen";
import CustomIcon from "../components/CustomIcon";
import {COLORS} from "../theme/theme";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (

        <Tab.Navigator screenOptions={{
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle
        }
        }>
            <Tab.Screen name='Home' component={HomeScreen}></Tab.Screen>
            <Tab.Screen name='Cart' component={CartScreen}></Tab.Screen>
            <Tab.Screen name='Favorite' component={FavoritesScreen}></Tab.Screen>
            <Tab.Screen name='History' component={OrderHistoryScreen}></Tab.Screen>

        </Tab.Navigator>

    )
};

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent'
    }
});

export default TabNavigator;

