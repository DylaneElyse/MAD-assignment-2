import React from "react";
import { Tabs } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
    <View>
        <Text>Welcome to my App</Text>
        <Tabs>
            <Tabs.Screen name="Calgary" options={{ title: "Calgary" }} />
            <Tabs.Screen name="Edmonton" options={{ title: "Edmonton" }} />            
        </Tabs>
    </View>
};