import { Redirect } from "expo-router";
import { Provider } from "react-redux";
import store from "../Redux/store";

export default function Page() {
  return (
    <>
      <Redirect screenOption={{ headerShown: false }} href="/(tabs)/Todo" />
    </>
  );
}
