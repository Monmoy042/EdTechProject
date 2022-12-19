import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.textStyle}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Course")}
      >
        <Text style={styles.textStyle}>Course</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Student")}
      >
        <Text style={styles.textStyle}>User Data</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.textStyle}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        <Text style={styles.textStyle}>Contact</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  textStyle: {
    textTransform: "uppercase",
    marginBottom: 15,
  },
});

export default Menu;
