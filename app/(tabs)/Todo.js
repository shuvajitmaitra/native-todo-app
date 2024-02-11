import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/TodoSlice";

const Todo = () => {
  const [todo, setTodo] = useState("");
  console.log(todo);
  const dispatch = useDispatch();
  const handleTodo = () => {
    dispatch(addTodo());
  };
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Add your to do" onChangeText={setTodo} />
        <TouchableOpacity onPress={() => handleTodo()}>
          <Text style={styles.addIcon}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text>Todo</Text>
      </TouchableOpacity>
      <Text>Add To Do</Text>
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
