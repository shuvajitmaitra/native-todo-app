import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../Redux/TodoSlice";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const todos = useSelector((state) => state.ToDoData);
  console.log(JSON.stringify(todos, null, 1));
  const dispatch = useDispatch();
  const handleTodo = ({ todo }) => {
    dispatch(addTodo({ todo }));
  };
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Add your to do" onChangeText={setTodo} />
        <TouchableOpacity onPress={() => handleTodo({ todo })}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
      </View>
      <Text>Add To Do</Text>
      <View>
        {todos?.map((todo, index) => {
          return (
            <View key={index}>
              <Text>{todo.todo}</Text>
            </View>
          );
        })}
      </View>
    </View>
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
  addIcon: {
    fontSize: 30,
    color: "black",
    backgroundColor: "red",
    padding: 0,
    borderRadius: 100,
    height: 30,
  },
});
