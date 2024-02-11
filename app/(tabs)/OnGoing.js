import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const OnGoing = () => {
  const onGoingWork = useSelector((state) => state.ToDoData.onGoingTodos);
  return (
    <View>
      <Text>On Going Works</Text>
      <View>
        {onGoingWork?.map((todos, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "black",
                margin: 10,
              }}
            >
              <Text>
                {index + 1}. {todos.todo}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default OnGoing;
