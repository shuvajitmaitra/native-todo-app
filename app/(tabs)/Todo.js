import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";

const Todo = () => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput />
        <Text style={styles.addIcon}>+</Text>
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
