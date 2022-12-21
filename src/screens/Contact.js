import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Checkbox from "expo-checkbox";

const Contact = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);

  // Submit Form Validation
  const submit = () => {
    if (!name && !email && !phone && !message) {
      Alert.alert("Please fill all the fields");
    } else {
      Alert.alert(`Than you ${name}`);
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up your knowledge</Text>
      <Text style={styles.description}>
        You can reach us anytime via km@saifullah.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"Enter Name"}
          value={name}
          onChangeText={(userData) => {
            setName(userData);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"demo@email.com"}
          value={email}
          onChangeText={(email) => {
            setEmail(email);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Mobile Number</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder={"+8801234567890"}
          value={phone}
          onChangeText={(phone) => {
            setPhone(phone);
          }}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>How can I help you</Text>
        <TextInput
          style={[styles.inputStyle, styles.multiLineStyle]}
          placeholder={"Tell us about yourself"}
          value={message}
          onChangeText={(msg) => {
            setMessage(msg);
          }}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      {/* CheckBOX */}
      <View style={styles.wrapper}>
        <Checkbox
          value={agree}
          onValueChange={() => {
            setAgree(!agree);
          }}
          color={agree ? "#4630EB" : undefined}
        />
        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>
      {/* Submit Button */}
      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? "#46030B" : "grey",
          },
        ]}
        disabled={!agree}
        onPress={submit}
      >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 20,
    color: "#344055",
    fontWeight: "500",
    paddingTop: 20,
    paddingBottom: 15,
    fontFamily: "JosefinSans_500Medium",
    textTransform: "capitalize",
  },
  description: {
    fontSize: 20,
    color: "#7d7d7d",
    paddingBottom: 20,
    fontFamily: "JosefinSans_400Light",
    lineHeight: 25,
  },

  inputContainer: {
    marginTop: 20,
  },
  labels: {
    fontWeight: "bold",
    // fontSize: 15,
    color: "#7d7d7d",
    paddingBottom: 5,
    fontFamily: "JosefinSans_300Light",
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.3)",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multiLineStyle: {
    paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  buttonText: {
    color: "#eee",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    fontFamily: "JosefinSans_300Light",
  },
  wrapperText: {
    marginLeft: 10,
    color: "#7d7d7d",
    fontFamily: "JosefinSans_300Light",
  },
});

export default Contact;
