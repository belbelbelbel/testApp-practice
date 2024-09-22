// app/index.js
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const route:any = useRouter();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go to About" onPress={() => route.push('/about')} />
    </View>
  );
}
