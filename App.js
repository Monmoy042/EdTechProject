import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Home from "./src/screens/Home";

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   margin: 20,
  // },
});

export default App;
