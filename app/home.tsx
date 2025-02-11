import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

export default function Home() {
    const Tab = createBottomTabNavigator();

    return(
    //<View>
        //<Text>Welcome to my App</Text>
        //<NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Calgary" options={{ title: "Calgary" }} component={() => <View><Text>Calgary Screen</Text></View>} />
                <Tab.Screen name="Edmonton" options={{ title: "Edmonton" }} component={() => <View><Text>Edmonton Screen</Text></View>} />
            </Tab.Navigator>
        //</NavigationContainer>
    //</View>
    )
};