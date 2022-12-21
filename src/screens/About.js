import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";

// Google Fonts
import {
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
} from "@expo-google-fonts/josefin-sans";
import { Nunito_600SemiBold, Nunito_700Bold } from "@expo-google-fonts/nunito";
import AppLoading from "expo-app-loading";

const About = () => {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>Khaled Md. Saifullah</Text>
      <Text style={styles.paraStyle}>I am a full stack developer</Text>
      <View>
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          }}
        />
      </View>
      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}>ABout Me</Text>
        <Text style={styles.paraStyle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias
          consectetur reiciendis eius inventore porro at reprehenderit!
          Eligendi, dignissimos soluta.
        </Text>
      </View>
      <Text style={styles.mainHeader}>Follow me on Social Media</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.instagram.com/saifullah_monmoy/")
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL("https://www.youtube.com/@kmSaifullah")
          }
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => Linking.openURL("https://discord.com/channels/@me")}
        >
          <Image
            style={styles.iconStyle}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/906/906361.png",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aboutContainer: {
    display: "flex",
    alignItems: "center",
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: "#344055",
    textTransform: "uppercase",
    fontWeight: "500",
    marginTop: 50,
    marginBottom: 10,
    fontFamily: "JosefinSans_500Medium",
  },
  paraStyle: {
    fontSize: 18,
    color: "#7d7d7d",
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: "#4c5dab",
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: "#fff",
    textTransform: "uppercase",
    fontWeight: "500",
    marginVertical: 15,
    fontFamily: "JosefinSans_500Medium",
    alignSelf: "center",
  },
  aboutPara: {
    color: "#fff",
  },
  menuContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  iconStyle: {
    width: "100%",
    height: 50,
    aspectRatio: 1,
  },
});

export default About;
