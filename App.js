import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Home from "./src/screens/Home";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Welcome</Text>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textStyle: {
    color: "red",
    fontSize: 25,
  },
});

export default App;
