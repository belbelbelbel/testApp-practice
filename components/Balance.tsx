import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Image, Pressable, Modal, StatusBar, ActivityIndicator, Alert, SafeAreaView } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function Balance () {
    const [balanceVisible, setBalanceVisible] = useState(false);
    return (
        <View style={{ backgroundColor: "white", width: "100%", height: 130, borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", marginTop: 15 }}>
            <View style={{ width: "86%", marginHorizontal: "auto", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "bold", fontSize: 12 }}>
                    <View style={{ display: "flex", justifyContent: "center", gap: 15 }}>
                        <Text style={{ fontWeight: "bold", fontSize: 22 }}>Quick Balance</Text>
                        <View style={{ display: "flex", alignItems: "center", flexDirection: "row", gap: 9 }}>
                            <Text style={{ fontSize: 23, fontWeight: "bold" }}>{
                                balanceVisible? "$ 100.00" : "*********"
                            }</Text>
                            <Pressable onPress={() => setBalanceVisible(!balanceVisible)}>
                                {
                                    !balanceVisible ?
                                        <MaterialCommunityIcons name="eye-off-outline" size={20} color={""} />
                                        :
                                        <MaterialCommunityIcons name="eye-outline" size={20} color={""} />
                                }
                            </Pressable>
                        </View>
                    </View>
                </Text>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 4 }}>
                    <View style={{ width: 55, backgroundColor: "#CFF3CF", borderRadius: 100, height: 55, justifyContent: "center", alignItems: "center" }}>
                        <MaterialCommunityIcons name="plus-box-outline" size={35} color={'darkgreen'} />
                    </View>
                    <Text>Top Up</Text>
                </View>
            </View>
        </View>
    )
}


