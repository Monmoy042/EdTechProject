import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Menu from "../component/Menu";

// Google Fonts
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const Home = (props) => {
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolor debitis similique quas inventore tenetur!";
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain"
          source={require("../../assets/study.jpg")}
        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            { fontSize: 30, color: "blue", marginTop: 0 },
          ]}
        >
          {props.channelName}
        </Text>
        <Text style={styles.mainDescription}>{description}</Text>
      </View>
      <View style={styles.menuStyle}>
        <View style={styles.lineStyle}></View>
        <Menu />
        <View style={[styles.lineStyle, { marginVertical: 10 }]}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    textAlign: "center",
    backgroundColor: "fff",
  },
  homeTop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  headerImage: {
    height: undefined,
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "stretch",
    marginTop: 30,
    borderRadius: 10,
  },
  mainHeader: {
    fontSize: 30,
    color: "salmon",
    textTransform: "capitalize",
    fontFamily: "Nunito_700Bold",
  },
  mainDescription: {
    textAlign: "justify",
    fontSize: 19,
    color: "#7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 25,
    fontFamily: "JosefinSans_400Regular",
  },
  menuStyle: {},
  lineStyle: {
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "gray",
  },
});

export default Home;
