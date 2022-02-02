import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const StartPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/img/StartImg.png")}
        style={styles.Image}
      ></Image>
      <View style={styles.TextContainer}>
        <Text style={styles.Title}>Change the{"\n"}way you sleep!</Text>
        <Text style={styles.Subtitle}>
          Track your sleep schedule and habits{"\n"}to make your days better!
        </Text>
      </View>
      <View style={styles.BtnContainer}>
        <TouchableOpacity style={styles.Btn}>
          <Text
            style={styles.BtnText}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Btn}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.BtnText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //marginTop: 50,
    marginTop: height*0.061565,
  },
  Image: {
    //width: 360,
   // height: 400,
    width: width * 0.96,
    height: height * 0.49261,
  },
  TextContainer: {
    //width: 360,
    width: width * 0.96,
    alignItems: "center",
    //marginTop: 40,
    marginTop: height*0.04926,
  },
  Title: {
    //fontSize: 38,
    fontSize: height * 0.047,
    fontWeight: "bold",
    //marginBottom: 15, !!!
    marginBottom: height*0.018473,
    textAlign: "center",
    //marginBottom: 25, !!!
    marginBottom: height*0.030788,
  },
  Subtitle: {
    //fontSize: 22,
    fontSize: height*0.027,
    textAlign: "center",
  },
  BtnContainer: {
    position: "absolute",
    //bottom: 50,
    bottom: height*0.06157,
    display: "flex",
    flexDirection: "row",
    //width: 300,
    width: width*0.8,
    //height: 75,
    height: height*0.0923,
    backgroundColor: "#E5E7ED",
    //borderRadius: 20,
    borderRadius: height*0.0246,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  Btn: {
    //width: 140,
    width: width*0.373,
    //borderRadius: 15,
    borderRadius: height*0.018473,
    //height: 65,
    height: height*0.08,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  BtnText: {
    //fontSize: 18,
    fontSize: height*0.022,
    fontWeight: "600",
  },
});
