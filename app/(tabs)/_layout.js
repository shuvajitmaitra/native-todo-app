import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="ToDo"
        options={{ tabBarLabel: "TODO", title: "TODO", headerShown: false }}
      />
    </Tabs>
  );
};

export default layout;
