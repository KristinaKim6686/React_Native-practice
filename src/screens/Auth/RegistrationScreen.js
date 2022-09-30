import {
  TextInput,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  Dimensions,
  Keyboard,
  ImageBackground,
} from "react-native";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";

const initialState = {
  email: "",
  password: "",
  name: "",
};

export const Registration = ({ navigation }) => {
  const [text, setText] = useState(initialState);

  const [showKeyboard, setShowKeyboard] = useState(false);

  const handleLogin = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
    console.log(text);
    setText(initialState);
  };
  const keyboardHide = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  };
  const keyboardVisible = () => {
    () => setShowKeyboard(true);
  };
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      setdimensions(width);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => keyboardHide()}>
        <View style={styles.container}>
          <ImageBackground
            source={require("../../../images/pexels-ave-calvar-martinez-4372475.jpg")}
            style={styles.image}>
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
                    Name
                  </Text>
                  <TextInput
                    style={{
                      ...styles.input,
                      fontFamily: "notoserif",
                      width: dimensions,
                    }}
                    textAlign={"center"}
                    onFocus={() => setShowKeyboard()}
                    value={text.name}
                    onChangeText={(value) =>
                      setText((prevState) => ({ ...prevState, name: value }))
                    }
                  />
                </View>
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
                  <Text
                    style={{ ...styles.title, fontFamily: "sans-serif-light" }}>
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
                      setText((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                </View>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.8}
                  onPress={() => handleLogin()}>
                  <Text
                    style={{
                      ...styles.btnTitle,
                      fontFamily: "sans-serif-light",
                    }}>
                    Sign in
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.link}
                  onPress={() => navigation.navigate("Login")}>
                  <Text style={styles.btnTitle}>
                    Already have an account?{"   "}
                    <Text
                      style={{
                        ...styles.title,
                        fontFamily: "sans-serif-light",
                      }}>
                      Login
                    </Text>
                  </Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e0000",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
  },
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
  link: { alignSelf: "center" },
});
