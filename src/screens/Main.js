import { Keyboard, View, Text } from "react-native";
import { useState, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import { Header } from "./Header/Header";
import { Login } from "./Auth/LoginScreen";
import { Registration } from "./Auth/RegistrationScreen";

const AuthStack = createStackNavigator();

const initialState = {
  email: "",
  password: "",
  name: "",
};

export default function Main({ fonts }) {
  const [text, setText] = useState(initialState);

  const [showKeyboard, setShowKeyboard] = useState(false);

  const keyboardHide = () => {
    setShowKeyboard(false);
    Keyboard.dismiss();
  };
  const keyboardVisible = () => {
    () => setShowKeyboard(true);
  };

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name='Login'
          options={{ headerShown: false }}
          component={Login}
        />
        <AuthStack.Screen
          name='Registration'
          options={{ headerShown: false }}
          component={Registration}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
