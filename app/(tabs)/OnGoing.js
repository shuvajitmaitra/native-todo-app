import { View, Text } from "react-native";
import React from "react";

const OnGoing = () => {
  const onGoingTodos = useSelector((state) => state.payload.onGoingTodos);
  console.log(JSON.stringify(onGoingTodos, null, 1));
  return (
    <View>
      <Text>OnGoing</Text>
    </View>
  );
};

export default OnGoing;
