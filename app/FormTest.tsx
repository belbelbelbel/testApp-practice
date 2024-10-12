import React, { useState } from 'react'
import { Platform, StyleSheet, View, TextInput, Button, Text, Image, KeyboardAvoidingView } from 'react-native'
const FormloGo = require('../assets/images/adaptive-icon.png')
export const FormTest = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    
    const style = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'transparent',
            padding: 20,
            // elevation: 5,
            justifyContent: "center",
            alignItems: "center",
        },
        form: {
                    marginBottom: 20,
                    width: 350,
                    height: 320,
                    shadowColor: '#333',
                    justifyContent: 'center',
                    shadowOpacity: 0.2,
                    shadowRadius: 10,
                    shadowOffset: { width: 0, height: 2 },
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    padding: 20,
                    elevation: 5
        },
        input: {
            borderWidth: 1,
            height: 50,
            marginBottom: 20,
            paddingHorizontal: 10,
            borderRadius: 5,
        },
        image: {
            width: 200,
            height: 200,
            marginBottom: 20,
            alignSelf: 'center'
        }
    })

    return (
        <KeyboardAvoidingView  keyboardVerticalOffset={Platform.OS === "ios" ? 130 : 0} behavior='padding' style={style.container}>

                <View style={style.form} >
                    {/* <View>
                        <Image source={FormloGo} style={style.image} />
                    </View> */}
                    <View>
                        <Text style={{ fontWeight: "bold", marginBottom: 6 }}>Username</Text>
                        <TextInput value={name} onChangeText={setName} placeholder='name' style={style.input} />
                    </View>
                    <View>
                        <Text style={{ fontWeight: "bold", marginBottom: 6 }}>Password</Text>
                        <TextInput placeholder='Password' secureTextEntry value={password} onChangeText={setPassword} style={style.input} />
                    </View>
                    <Button title='Send Message'></Button>
                </View>
        </KeyboardAvoidingView>
    )
}