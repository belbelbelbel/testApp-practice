import React from 'react'
import { Avatar } from 'react-native-elements';
import { View, Text, FlatList } from "react-native"
export const QuickServices = () => {
    const Quickkservice = [
        {
            name: 'Delivery',
            icon: require('../assets/images/Quick-Service1.jpg'),
        },
        {
            name: 'Shipping',
            icon: require('../assets/images/QuickService2.jpg')
        },
        {
            name: 'Payment',
            icon: require('../assets/images/Quick-Service2.jpg')
        },
        {
            name: 'Help',
            icon: require('../assets/images/QuickService2.jpg')
        }
    ]

    
    return (
        <View style={{ flex: 0 }}>
            <View >
                <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 10 }}>Quick Services</Text>
                <FlatList
                    contentContainerStyle={{ paddingHorizontal: 0 }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={
                        Quickkservice
                    }
                    keyExtractor={item => item.name}
                    renderItem={({ item }) => (
                        <View style={{ padding: 0, marginHorizontal: 0, backgroundColor: 'white', borderRadius: 10, width: 190, height: 110, justifyContent: 'center', alignItems: "center" }}>
                            <View style={{width: 56,height:56, backgroundColor:"#eaf2fb",borderRadius: 100,justifyContent:"center", alignItems:"center"}}>
                                <Avatar rounded source={item.icon} size={38} />
                            </View>
                            <Text style={{ fontWeight: 'medium', fontSize: 14 , marginTop: 8}}>{item.name}</Text>
                        </View>
                    )}

                    ItemSeparatorComponent={() => <View style={{ width: 24 }} />}
                />
            </View>
        </View>
    )
}
