import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Home")}
      >
        {/* <Text style={styles.textStyle}>Home</Text> */}
        <Image
          style={styles.imageStyle}
          source={require("../../assets/home.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Course")}
      >
        {/* <Text style={styles.textStyle}>Course</Text> */}
        <Image
          style={styles.imageStyle}
          source={require("../../assets/course.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Student")}
      >
        {/* <Text style={styles.textStyle}>User Data</Text> */}
        <Image
          style={styles.imageStyle}
          source={require("../../assets/student.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("About")}
      >
        {/* <Text style={styles.textStyle}>About</Text> */}
        <Image
          style={styles.imageStyle}
          source={require("../../assets/about.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnStyle}
        onPress={() => navigation.navigate("Contact")}
      >
        {/* <Text style={styles.textStyle}>Contact</Text> */}
        <Image
          style={styles.imageStyle}
          source={require("../../assets/contact.png")}
        />
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
  imageStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default Menu;
