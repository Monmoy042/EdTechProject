import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Contact from "./src/screens/Contact";
import Course from "./src/screens/Course";
import UserData from "./src/screens/UserData";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* <Stack.Screen name="Home" component={Home} /> */}

        {/* Home Screen */}
        <Stack.Screen name="Home">
          {(props) => <Home {...props} channelName={"netSchool"} />}
        </Stack.Screen>
        {/* Course Screen */}
        <Stack.Screen name="Course" component={Course} />
        {/* User Data Screen */}
        <Stack.Screen name="Student" component={UserData} />
        {/* About Screen */}
        <Stack.Screen name="About" component={About} />
        {/* Contact Screen */}
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
