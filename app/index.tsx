import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Image, Pressable, Modal, StatusBar, ActivityIndicator, Alert } from 'react-native';
import { TestApp } from "./TestApp";
import { FormTest } from "./FormTest";
import HomeScreen from "./HomeScreen";

// Ensure the path is correct
const logoImage = require('../assets/images/adaptive-icon.png');

export default function Index() {
  const [isHungry, setIsHungry] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "transparent",
      padding: 60,
    },
    buttons: {
      backgroundColor: 'yellow',
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
    },
    logo: {
      width: 300,
      height: 300,
    },
  });

  return (
    <View style={styles.container}>
      {/* <TestApp /> */}
      {/* <FormTest/> */}
      <HomeScreen/>
    </View>
  );
}
