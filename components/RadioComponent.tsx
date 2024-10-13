import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    radioButton: {
        paddingVertical: 14,
        paddingHorizontal: 26,
        borderRadius: 8,
        marginVertical: 4,
        borderWidth: 0,
        borderColor: '#007BFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 340,
        backgroundColor:'white'
    },
    radioButtonText: {
        fontSize: 16,
    },
    selectedRadioButton: {
        width:13,height:13,borderWidth:2,borderRadius:100
    },
});

export default function RadioComponent({label,select,onSelect}:any) {
  return (
    <TouchableOpacity style={[styles.radioButton,
        {  }]} onPress={onSelect}>
      <Text>{label}</Text>
      <View style={[styles.selectedRadioButton,{backgroundColor: select ? '#007BFF' : '#FFF',borderWidth:select ? 0 : 1}]}></View>
    </TouchableOpacity>
  )
}