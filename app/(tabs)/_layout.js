import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Todo"
        options={{ tabBarLabel: "TODO", title: "TODO", headerShown: false }}
      />
    </Tabs>
  );
};

export default layout;
