import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { TouchableOpacity } from "react-native-gesture-handler";
import slides from "../../data/slides";



const OnBoarding = props => {
  const [showHomePage, setShowHomePage] = useState(false);
 
  const _renderItem = (itemData) => {
    console.log(itemData.item.image)
    return <View style={{
      flex: 1,
      backgroundColor:`${itemData.item.backgroundColor}`,
      justifyContent:"center",
      alignItems:"center",
      fontFamily:"montserrat"
    }}>
        <Image source={itemData.item.image} style={{
        resizeMode:"cover",
        height: "50%",
        width: "100%",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
      }} />
        <Text style={{
        // paddingTop: -15,
        position:"relative",
        top:0,
        paddingBottom: 0,
        fontSize: 23,
        // fontWeight: "bold",
        fontFamily:"montserrat-regular",
        color: `${itemData.item.buttonColor}`,
        alignSelf: "center"
      }}>
          {itemData.item.title}
        </Text>

        <Text style={{
        textAlign: "center",
        fontFamily:"montserrat-regular",
        color: "#b5b5b5",
        fontSize: 15,
        paddingHorizontal: 30
      }}>
          {itemData.item.text}
        </Text>
        <View style={{backgroundColor:`${itemData.item.buttonColor}`, padding:15, width:200, borderRadius:30, marginVertical:20}}>
        <TouchableOpacity>
              <Text style={{textAlign:"center", color:"#fff"}}>Explore</Text>
        </TouchableOpacity>
        </View>

      </View>;
  };

  if (showHomePage) {
    return <App />;
  } else return  <AppIntroSlider style={{marginBottom:5}} renderItem={_renderItem} data={slides} activeDotStyle={{
    backgroundColor: "#21465b",
    width: 10,
  }} showSkipButton={true} />;
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});