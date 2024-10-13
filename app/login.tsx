import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { useRouter } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import RadioComponent from '@/components/RadioComponent'

export default function Login() {
    const router = useRouter()
    const [SelectedRadio, setSelectedRadio] = useState('')
    const GotoNextPage = () => {
        if(SelectedRadio === 'option1') {
            router.push('/CustomerPhonenumber')
        }
        else{
            router.push('/ServiceReg')
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black', }}>
            <StatusBar style='light' />
            <View style={{display:"flex",justifyContent:"space-between",flex:1, width: '85%', marginHorizontal: 'auto'}}>
                <View style={{ display: 'flex', gap: 26 }}>
                    <Text style={{ color: 'white' }} onPress={() => router.back()}>
                        <MaterialCommunityIcons name='arrow-left' color={'white'} size={30} />
                    </Text>
                    <Text style={{ color: 'white', fontSize: 28 }}>Select Account type</Text>
                    <RadioComponent label='Customer' onSelect={() => setSelectedRadio('option1')} select={SelectedRadio === 'option1'} />
                    <RadioComponent label='Service Partner' onSelect={() => setSelectedRadio('option2')} select={SelectedRadio === 'option2'} />
                </View>
                <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity disabled={SelectedRadio === ''} style={{backgroundColor:SelectedRadio === '' ? 'grey' : '#007BFF',width:'97%',display:'flex',alignItems:'center',justifyContent:'center',height:50,borderRadius:10}} onPress={() => GotoNextPage()}>
                        <Text style={{ color: 'white', fontSize: 18,fontWeight:'700'}}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}