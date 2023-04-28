import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import GoogleLogo from '../assets/google_logo.png'

const LoginScreen = () => {
    const navigation = useNavigation()

  const handleLogin = () => {
    console.log("Logging in with google...");
    navigation.navigate("HomeScreen")
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.heading}>Track+</Text>
      <Text style={styles.subheading}>Welcome to TrackPlus</Text>
      <Text style={{ fontSize: 18 }}>Login to Continue</Text>
      <View
        style={{
          width: "100%",
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity onPress={handleLogin} style={styles.loginBtn}>
          {/* Google Logo */}
          <Image
            source={GoogleLogo}
            style={styles.logo}
          />
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
    backgroundColor: "#F9FBFC",
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  heading: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 5,
  },
  subheading: {
    marginTop: 30,
    fontSize: 25,
    textAlign: "left",
    fontWeight: "bold",
  },
  loginBtn: {
    display: "flex",
    flexDirection: 'row',
    gap: "10rem",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: 'black',
    color: 'white',
    paddingVertical: 8,
    width: '100%',
    justifyContent: 'center'
  },
  logo: {
    width: 30,
    height: 30
  }
});

export default LoginScreen;
