import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, onGoing } from "../../Redux/TodoSlice";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.ToDoData.todos);
  const dispatch = useDispatch();

  const handleTodo = ({ todo }) => {
    dispatch(addTodo({ todo }));
    setTodo("");
  };

  const handleRemoveTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleOnGoingTodo = (index) => {
    dispatch(onGoing(index));
  };
  return (
    <ScrollView style={{ padding: 10 }}>
      <Text>Add To Do</Text>
      <View style={styles.inputContainer}>
        <TextInput
          value={todo}
          placeholder="Add your to do"
          onChangeText={setTodo}
        />
        <TouchableOpacity onPress={() => handleTodo({ todo })}>
          <Text>
            <Ionicons name="add-circle-outline" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>
      <Text>To Do List</Text>
      <View>
        {todos?.map((todo, index) => {
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
                {index + 1}. {todo.todo}
              </Text>
              <View style={{ flexDirection: "row", gap: 20 }}>
                <TouchableOpacity onPress={() => handleOnGoingTodo(index)}>
                  <FontAwesome name="hourglass-start" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleRemoveTodo(index)}>
                  <Ionicons name="trash-bin-outline" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Todo;
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "black",
    margin: 10,
  },
});
