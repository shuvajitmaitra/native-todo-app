import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doneWorks } from "../../Redux/TodoSlice";
import { Ionicons } from "@expo/vector-icons";

const OnGoing = () => {
  const onGoingWork = useSelector((state) => state.ToDoData.onGoingTodos);
  const dispatch = useDispatch();

  const handleDoneTodo = (index) => {
    dispatch(doneWorks(index));
  };
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
                marginVertical: 10,
              }}
            >
              <Text>
                {index + 1}. {todos.todo}
              </Text>
              <TouchableOpacity onPress={() => handleDoneTodo(index)}>
                <Ionicons
                  name="checkmark-done-circle"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default OnGoing;
