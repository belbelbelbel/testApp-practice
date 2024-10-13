import { Stack, useRouter } from "expo-router";
import { Button } from "react-native";
export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{
               headerShown: false,
            }} />
             <Stack.Screen name="(tabs)" options={{
                headerShown: false
            }} />
            <Stack.Screen name="Authcontainer" options={{
                headerShown:false
            }}></Stack.Screen>
            <Stack.Screen name="login" options={
                {
                    headerShown:false
                }
            }></Stack.Screen>
            {/* <Stack.Screen name="about"/> */}
        </Stack>
    )
}