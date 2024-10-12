import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ImageArray } from '@/constants/arrays'

interface VaryProps {
    primary: string,
    secondary: string
}

interface TextColorProps {
    color: VaryProps,
    currentpage: number,
    setCurrentPage: (value:number) => void
}

export default function Pagination({ color, currentpage }: TextColorProps) {
    const handleCurrentLogic = () => {
        
    }
    const styles = StyleSheet.create({
        text: { height: 4, width: 18, backgroundColor: "gray", margin: 4 }
    })
    return (
        <View>
            <Text style={{ color: color.secondary }}>
                {
                    ImageArray.map((_, index) => (
                        <View key={index} style={[styles.text, currentpage == index && {
                            backgroundColor: 'white',
                            width: 40,
                        }]}>
                        </View>
                    ))
                }
            </Text>
        </View>
    )
}