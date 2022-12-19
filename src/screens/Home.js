import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

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
    marginTop: 1,
    borderRadius: 10,
  },
  mainHeader: {
    fontSize: 30,
    color: "salmon",
    textTransform: "capitalize",
  },
  mainDescription: {
    textAlign: "left",
    fontSize: 19,
    color: "7d7d7d",
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
});

export default Home;
