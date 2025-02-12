import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import calgaryPage from "./calgaryPage";
import City from "./city-page";
import {Calgary} from "../components/cities";
import {Edmonton} from "../components/cities";
import Splash from "./splash";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Home() {
    const Tab = createBottomTabNavigator();
    return(
            <Tab.Navigator>
                <Tab.Screen name="Home" options={{ title: "Home", tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} /> }} component={() => <Splash/>} />
                <Tab.Screen name="Calgary" options={{ title: "Calgary", tabBarIcon: ({ color }) => <FontAwesome size={28} name="bookmark" color={color} /> }} component={() => <Calgary/>} />
                <Tab.Screen name="Edmonton" options={{ title: "Edmonton", tabBarIcon: ({ color }) => <FontAwesome size={28} name="bookmark" color={color} /> }} component={() => <Edmonton/>} />
            </Tab.Navigator>
    )
};