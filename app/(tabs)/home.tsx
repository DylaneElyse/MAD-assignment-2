import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import City from "../../components/city-page";
// import {Calgary} from "../components/cities";
// import {Edmonton} from "../components/cities";
import { useRouter, Tabs } from "expo-router";
import TabLayout from "./_layout";

export default function Home() {

    // const calgaryName = "Calgary";
    // const calgaryImage = "../assets/calgary-image.jpg";
    // const calgaryWebsite = "https://www.calgary.ca/home.html";

    // const edmontonName = "Edmonton";
    // const edmontonImage = "../assets/edmonton-image.jpg";
    // const edmontonWebsite = "https://www.edmonton.ca/";

    return(
    <View>
        <Text>Welcome to my App</Text>
    </View>
    )
};
