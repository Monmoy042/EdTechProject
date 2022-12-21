import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import Courses from "../api/Courses";

// Google Fonts
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const Course = ({ navigation }) => {
  const courseCard = ({ item }) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.courseContainer}>
          <View>
            <Image
              style={styles.cardImage}
              source={item.image}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnStyle}
              onPress={() => {
                navigation.navigate("CourseDetails");
              }}
            >
              <Text style={styles.btnText}>Course Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={Courses}
      renderItem={courseCard}
    />
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  courseContainer: {
    padding: 30,
    backgroundColor: "rgba(255,255,255,0.96)",
    textAlign: "center",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 30,
  },
  cardImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  cardTitle: {
    fontSize: 22,
    color: "salmon",
    textTransform: "uppercase",
    // fontWeight: "500",
    // paddingTop: 15,
    paddingBottom: 15,
    fontFamily: "Nunito_600SemiBold",
  },
  cardDescription: {
    textAlign: "justify",
    fontFamily: "JosefinSans_400Regular",
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 16,
    color: "blue",
  },
  btnContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  btnStyle: {
    backgroundColor: "#809fff",
    // borderBottomEndRadius: 5,
    // borderTopRightRadius: 5,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "JosefinSans_500Medium",
  },
});

export default Course;
