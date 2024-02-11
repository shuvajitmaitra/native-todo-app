import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const Done = () => {
  const doneWorks = useSelector((state) => state.ToDoData.doneWorks);
  return (
    <View>
      <Text>Finished Works</Text>
      <View>
        {doneWorks?.map((work, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 10,
                padding: 10,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "black",
              }}
            >
              <Text>
                {index + 1}. {work.todo}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Done;
