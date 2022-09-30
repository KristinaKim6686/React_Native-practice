import Main from "./src/screens/Main";
import { ImageBackground, StyleSheet, View } from "react-native";
// import { useEffect, useCallback } from "react";
import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";s

export default function App() {
  const [fontsLoaded] = useFonts({
    MainFont: require("./assets/fonts/Rajdhani-Regular.ttf"),
    InputFont: require("./assets/fonts/Rajdhani-Light.ttf"),
  });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);
  // if (!fontsLoaded) {
  //   return null;
  // }

  return <Main fonts={[fontsLoaded]} />;
}

const styles = StyleSheet.create({});
