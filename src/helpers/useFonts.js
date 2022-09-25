import * as Font from "expo-font";

export default useFonts = async () => {
  await Font.loadAsync({
    MainFont: require("../../assets/fonts/Rajdhani-Regular.ttf"),
    InputFont: require("../../assets/fonts/Rajdhani-Light.ttf"),
  });
};
