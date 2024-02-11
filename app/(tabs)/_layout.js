import { View, Text } from "react-native";
import React from "react";
import { Tabs, usePathname } from "expo-router";
import { Provider } from "react-redux";
import store from "../../Redux/store";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const layout = () => {
  return (
    <Provider store={store}>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="Todo"
          options={{
            tabBarLabel: "ToDo",
            title: "TODO",
            tabBarActiveTintColor: "black",
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="list"
                size={24}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="OnGoing"
          options={{
            tabBarLabel: "OnGoing",
            title: "TODO",
            headerShown: false,
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="run-fast"
                size={24}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Done"
          options={{
            tabBarLabel: "Done",
            title: "TODO",
            headerShown: false,
            tabBarActiveTintColor: "black",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="checkmark-done-circle"
                size={24}
                color={focused ? "black" : "gray"}
              />
            ),
          }}
        />
      </Tabs>
    </Provider>
  );
};

export default layout;
