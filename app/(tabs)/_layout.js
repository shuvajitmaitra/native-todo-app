import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Provider } from "react-redux";
import store from "../../Redux/store";

const layout = () => {
  return (
    <Provider store={store}>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen
          name="Todo"
          options={{ tabBarLabel: "TODO", title: "TODO", headerShown: false }}
        />
      </Tabs>
    </Provider>
  );
};

export default layout;
