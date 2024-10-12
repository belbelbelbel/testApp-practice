import React from 'react'
import { View,Text, SafeAreaView,StyleSheet } from 'react-native'

export default function profilePage () {
  return (
     <View style={styles.container}>
        <Text style={styles.text}>Profile Screen</Text>
    </View>

  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
    },
  });