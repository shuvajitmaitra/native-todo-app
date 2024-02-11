import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const OnGoing = () => {
  const onGoingWork = useSelector((state) => state.ToDoData.onGoingTodos);
  console.log("first", onGoingTodos);
  return (
    <View>
      <Text>On Going Works</Text>
      <View>
        {onGoingWork.map((todos, index) => {
          <View key={index}>
            <Text>{todos.todo}</Text>
          </View>;
        })}
      </View>
    </View>
  );
};

export default OnGoing;
