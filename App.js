import { useFonts } from "expo-font";

import Layout from "./src/components/Layout";
import { Text } from "react-native";
export default function App() {
  // const [fontsLoaded] = useFonts({
  //   MainFont: require("./assets/fonts/Pacifico-Regular.ttf"),
  // });
  return (
    <>
      <Layout />
    </>
  );
}
