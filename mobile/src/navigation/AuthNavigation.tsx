import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/Login/LoginScreen";
import TabNavigator from "./TabNavigation";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
    </Stack.Navigator>
  );
};
export default AuthNavigator;
