import { View, Text, SafeAreaView, Image, TextInput, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

export default function LoginPage() {
    const { width } = useWindowDimensions()
    const style = StyleSheet.create({
        input: {
            borderWidth: 1,
            height: 50,
            width: '100%',
            borderColor: "white",
            marginBottom: 20,
            // paddingHorizontal: 10,
            marginHorizontal: "auto",
            borderRadius: 5,
        },
    })
    const [name, setName] = useState('');
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <StatusBar style='light' />
            <View style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: width, flex: 1 }}>
                <View>
                    <Image source={(require('../assets/images/Laundry2.png'))} />
                    <Image source={(require('../assets/images/Laundry1.png'))} />
                </View>
                <View style={{ width: '80%', display: "flex", gap: 15}}>
                    <TouchableOpacity style={{ width: '100%', backgroundColor: "white", height: 50, borderRadius: 7,  alignItems: "center", justifyContent: 'center',display:'flex' }}>
                        <Text style={{fontWeight: "800", fontSize: 15, color: "#2D70BC"}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '100%', backgroundColor: "#2D70BC", height: 50, borderRadius: 7,  alignItems: "center", justifyContent: 'center',display:'flex' }}>
                        <Text style={{fontWeight: "800", fontSize: 15, color: "white"}}>Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}