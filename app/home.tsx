import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { router } from "expo-router";

export default function Home() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Calgary"
        options={{ title: "Calgary" }}
        component={() => {
          router.push("/city-page");
          return "Calgary";
        }}
      />
      <Tab.Screen
        name="Edmonton"
        options={{ title: "Edmonton" }}
        component={() => {
          router.push("/city-page");
          return "Edmonton";
        }}
      />
    </Tab.Navigator>
  );
}
