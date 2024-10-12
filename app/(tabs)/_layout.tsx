import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet } from 'react-native'
import { Stack } from "expo-router";
import { Tabs } from "expo-router"
export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: 'blue', }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="home-outline" size={28} color={focused ? color : "#ccc"} />
          ),
        }}
      >
      </Tabs.Screen>
      <Tabs.Screen name="about"
        options={{
          title: "Support",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="phone-outline" size={28} color={focused ? color : "#ccc"} />
          ),
        }}
      >
      </Tabs.Screen>

      <Tabs.Screen
        name="message"
        options={{
          title: "Send Package",
          tabBarIcon: ({ color, focused }) => (
            <View style={styles.messageIconContainer}>
              <MaterialCommunityIcons name="send-clock-outline" size={32} color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Order",
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="cart-outline" size={28} color={focused ? color : "#ccc"} />
          ),
        }}
      >
      </Tabs.Screen>
      <Tabs.Screen
        name='profile'
        options={{
          title: 'profile',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="account-outline" size={28} color={focused ? color : "#ccc"} />
          ),
        }}
      >

      </Tabs.Screen>
    </Tabs>
  );


}


const styles = StyleSheet.create({
  messageIconContainer: {
    backgroundColor: 'midnightblue',
    borderRadius: 50,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
});
