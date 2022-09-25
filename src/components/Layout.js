import {
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
} from "react-native";
import { useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { Header } from "./Header/Header";
import { Login } from "./Auth/Form";

const initialState = {
  email: "",
  password: "",
};

export default function Layout({ fonts }) {
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

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => keyboardHide()}>
        <ImageBackground
          source={require("../../images/pexels-ave-calvar-martinez-4372475.jpg")}
          style={styles.image}>
          <Header />
          <Login
            handleLogin={handleLogin}
            setShowKeyboard={keyboardVisible}
            showKeyboard={showKeyboard}
            text={text}
            setText={setText}
            fonts={fonts}
          />
          <StatusBar style='auto' />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}

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
});
