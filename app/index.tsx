import { View, Text, SafeAreaView, FlatList, Image, useWindowDimensions, Button, Pressable, StyleSheet, TouchableOpacity, } from 'react-native'
import React, { useRef, useState } from 'react'
import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ImageArray } from '@/constants/arrays'
import { useRouter } from 'expo-router'
import Pagination from '@/components/Pagination'


export default function index() {
    const [currentPage, setCurrentPage] = useState(0)
    const router = useRouter()
    const Color = { primary: 'black', secondary: 'white' }
    const { width, height } = useWindowDimensions()
    const ref = useRef<any>(null)
    const styles = StyleSheet.create({
        button: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'white',
        },
        button2: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'black',
        },
        button3: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            paddingHorizontal: 80,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'white',
        },
        text: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'black',
            textTransform: 'uppercase',
        },
        text3: {
            fontSize: 16,
            width:150,
            textAlign: 'center',
            // lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'black',
            textTransform: 'uppercase',
        },
        text2: {
            fontSize: 16,
            lineHeight: 21,
            fontWeight: 'bold',
            letterSpacing: 0.25,
            color: 'white',
            textTransform: 'uppercase',
        },
    });
    const handleLogic = () => {
        const nextslide = currentPage + 1
        if (nextslide != ImageArray.length) {
            const offset = nextslide * width
            ref?.current?.scrollToOffset({ offset })
            setCurrentPage(nextslide)
        }
    }
    const handlelastslide = () => {
        const lastslide = ImageArray.length - 1
        if (lastslide >= 0) {
            const offset = lastslide * width
            ref?.current?.scrollToOffset({ offset })
            setCurrentPage(lastslide)
        }
    }
    const updatedSlidEvent = (e: any) => {
        //contentOFFset .x is contained in the nativeevent which is co=yaied in the evenet handler to het the index of each widthcontent
        setCurrentPage(Math.round(e.nativeEvent.contentOffset.x / width))
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Color.primary }}>
            <StatusBar style='light'/>
            <View style={{ width: width, marginHorizontal: "auto" }}>
                <FlatList ref={ref} data={ImageArray} onMomentumScrollEnd={updatedSlidEvent} horizontal pagingEnabled renderItem={({ item, index }) => (
                    <View>
                        <Image source={item.image} style={{ height: '70%', width }} />
                        <Text style={{ color: Color.secondary, textAlign: 'center', fontSize: 22, marginTop: 10 }}>{item.text}</Text>
                        <Text style={{ color: Color.secondary, textAlign: 'center', fontSize: 14, marginTop: 10, width: width * 0.9, marginHorizontal: 'auto' }}>{item.subtext}</Text>
                    </View>
                )} />
            </View>
            <View style={{ height: 60, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                <View style={{ position: 'absolute', top: -30 }}>
                    <Pagination color={Color} currentpage={currentPage} setCurrentPage={setCurrentPage} />
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'center', gap: 50 }}>
                {
                   currentPage === ImageArray.length - 1 ? (
                        <TouchableOpacity style={styles.button3} onPress={()=>router.push('/Authcontainer')}>
                            <Text style={styles.text3}>Get Started</Text>
                        </TouchableOpacity>
                    ) : (
                        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: 'center', gap: 50 }}>
                            <TouchableOpacity style={styles.button2} onPress={handlelastslide}>
                                <Text style={styles.text2}>Skip</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleLogic} >
                                <Text style={styles.text}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }

            </View>

        </SafeAreaView>
    )

} 
