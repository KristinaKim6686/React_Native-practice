import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";

export const Login = ({
  handleLogin,
  setShowKeyboard,
  showKeyboard,
  text,
  setText,
  fonts,
}) => {
  // const [fontsLoaded] = useFonts({
  //   MainFont: require("../../../assets/fonts/Rajdhani-Regular.ttf"),
  //   InputFont: require("../../../assets/fonts/Pacifico-Regular.ttf"),
  // });
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      console.log(("width", width));
    };
    Dimensions.addEventListener("change", onChange);
    return () => Dimensions.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <KeyboardAvoidingView>
        <View
          style={{
            ...styles.form,
            marginBottom: showKeyboard ? 20 : 100,
            // width: dimensions,
          }}>
          <View>
            <Text
              style={{
                ...styles.title,
                fontFamily: "sans-serif-light",
              }}>
              Email
            </Text>
            <TextInput
              style={{
                ...styles.input,
                fontFamily: "notoserif",
                width: dimensions,
              }}
              textAlign={"center"}
              onFocus={() => setShowKeyboard()}
              value={text.email}
              onChangeText={(value) =>
                setText((prevState) => ({ ...prevState, email: value }))
              }
            />
          </View>
          <View>
            <Text style={{ ...styles.title, fontFamily: "sans-serif-light" }}>
              Password
            </Text>
            <TextInput
              style={{
                ...styles.input,
                fontFamily: "notoserif",
                width: dimensions,
              }}
              textAlign={"center"}
              secureTextEntry={true}
              onFocus={() => setShowKeyboard()}
              value={text.password}
              onChangeText={(value) =>
                setText((prevState) => ({ ...prevState, password: value }))
              }
            />
          </View>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={() => handleLogin()}>
            <Text
              style={{ ...styles.btnTitle, fontFamily: "sans-serif-light" }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 30,
  },
  title: {
    // fontFamily: "MainFont",
    color: "#9f7b29",
    fontSize: 18,
  },
  input: {
    borderWidth: 2,
    borderColor: "#8f6b29",
    borderRadius: 6,
    // width: 236,
    color: "#8f6b29",
    paddingVertical: 4,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  btn: {
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,

    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        color: "#8f6b29",
        borderWidth: 1,
        borderColor: "#8f6b29",
      },
      android: {
        backgroundColor: "#8f6b29",
      },
    }),
  },
  btnTitle: {
    fontSize: 18,
    // fontFamily: "MainFont",
    ...Platform.select({
      ios: { color: "#8f6b29" },
      android: { color: "#fffbe6" },
    }),
  },
});
