import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Library } from "./src/screens/Library";
import { Photo } from './src/screens/Camera';
import { Home } from './src/screens/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name='Home' component={Home} options={{ headerShown: false, animation: "fade" }}></Stack.Screen>

        <Stack.Screen name='Photo' component={Photo} options={{ headerShown: false, animation: "flip" }}></Stack.Screen>

        <Stack.Screen name='Library' component={Library} options={{ headerShown: false, animation: "fade_from_bottom" }}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}