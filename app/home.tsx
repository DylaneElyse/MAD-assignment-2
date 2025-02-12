import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import calgaryPage from "./calgaryPage";
import City from "./city-page";
import {Calgary} from "../components/cities";
import {Edmonton} from "../components/cities";
import Splash from "./splash";

export default function Home() {
    const Tab = createBottomTabNavigator();
    // const cityName = "Calgary";
    // const image = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Calgary_downtown_skyline.jpg/1200px-Calgary_downtown_skyline.jpg";
    // const website = "https://www.visitcalgary.com/";

    return(
    //<View>
        //<Text>Welcome to my App</Text>
        //<NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" options={{ title: "Home" }} component={() => <Splash/>} />
                <Tab.Screen name="Calgary" options={{ title: "Calgary" }} component={() => <Calgary/>} />
                <Tab.Screen name="Edmonton" options={{ title: "Edmonton" }} component={() => <Edmonton/>} />
            </Tab.Navigator>
        //</NavigationContainer>
    //</View>
    )
};