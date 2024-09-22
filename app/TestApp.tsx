import React, { useState } from 'react';
import { Button, View, StyleSheet, Text, useWindowDimensions, Platform,Switch, Alert, TextInput } from 'react-native'
import CustomButton from '@/components/CustomButton';
export const TestApp = () => {
    const [text,setText] = useState('')
    const [isDarkMode,setDarkMode] = useState(false)
    const { height, width } = useWindowDimensions();
    const windowWidth = width
    const windowHeight = height

    console.log({ windowWidth, windowHeight })
    const styles = StyleSheet.create({
        container: {
            backgroundColor: isDarkMode ? "black": "white",
            
            width: windowWidth > 500 ? '70%' : '90%',
            height: windowHeight > 600 ? '60%' : '90%',
            borderRadius: Platform.OS === 'android' ? 10 : 24,
            justifyContent: "center",
            alignItems: "center",
        },
        textCont: {
            ...Platform.select({
                android: {
                    fontFamily: 'Roboto',
                    fontSize: windowWidth > 590 ? 50 : 24,
                },
                default: {
                    fontFamily: 'Arial',
                    fontSize: windowWidth > 590 ? 50 : 24,
                },
                ios: {
                    fontFamily: 'Arial',
                    fontSize: windowWidth > 590 ? 50 : 24,
                }
            })

        },
        Input: {
            borderWidth: 1,
            borderColor: '#777',
            padding: 10,
            marginBottom: 20,
            width: '80%',
            borderRadius: 10,
            fontSize: 20,
            ...Platform.select({
                android: {
                    fontFamily: 'Roboto',
                },
                default: {
                    fontFamily: 'Arial',
                },
                ios: {
                    fontFamily: 'Arial',
                }
            })
        },

        MultiInput: {
            borderWidth: 1,
            borderColor: '#777',
            padding: 10,
            marginBottom: 20,
            width: '80%',
            textAlignVertical: 'top',
            borderRadius: 10,
            fontSize: 20,
            height: 100,
        }
    })



    return (
        <View style={styles.container}>
            <TextInput style={styles.Input} autoCorrect={true} autoCapitalize='none' secureTextEntry placeholder='name' value={text} onChangeText={setText}/>
            <TextInput multiline  placeholder='message'  style={[styles.Input, styles.MultiInput]} />
            <Text style={{fontSize:20}} >
                my name is {text}
            </Text>
            <Switch value={isDarkMode} onValueChange={() => setDarkMode(!isDarkMode)}
            trackColor={{false: '#767577', true: '#81b0ff'}}
            />
            {
                isDarkMode  && <Text>deliver this</Text>
            }
        </View>
    )


}
