import React, { useState } from "react";
import { View, Text, Image, Pressable,StyleSheet } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
const logoImage = require('../assets/images/adaptive-icon.png');
const Avartar = require('../assets/images/boy.png');
export const Profile = () => {
    const router  = useRouter()
    const [isHungry, setIsHungry] = useState(false);
    return (
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", position: "relative", justifyContent: "space-between" }}>
            <View style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: 10,justifyContent:"center" }}>
                <View style={styles.container}>
                    <Image source={Avartar} style={styles.logo} />
                </View>
                <View style={{ display: "flex" }}>
                    <Text style={{ fontWeight: "400", fontSize: 16 }} onPress={router.back}>Hi,</Text>
                    <Pressable onPress={() => setIsHungry(!isHungry)}>
                        <Text style={{ color: isHungry ? 'red' : 'black', fontSize: 20, fontWeight: "700" }}>
                            {isHungry ? 'Tolu' : 'Tolu'}
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", gap: 20, alignItems: "center" }}>
                <MaterialCommunityIcons name="rhombus-split" size={30} color={"darkblue"} />
                <View style={{ width: 55, height: 55, borderRadius: 100, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                    <MaterialCommunityIcons name="bell" size={30} color={'darkblue'} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "transparent",
      paddingBottom: 20,
    },
    buttons: {
      backgroundColor: 'yellow',
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
    },
    logo: {
      width: 70,
      height: 70,
    },
  });


