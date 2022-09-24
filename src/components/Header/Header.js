import { StyleSheet, Text, View } from "react-native";

export const Header = () => {
  return (
    <>
      <View style={styles.header}></View>
      <Text style={styles.title}>Einstagramm</Text>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 56,
    elevation: 2,
    marginBottom: 43,
  },
  title: {
    color: "#df9f28",
    textAlign: "center",
    fontSize: 30,
    // fontFamily: "font.mainFont",
  },
});
