import {
  BottomTabScreenProps,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../screens/Setting/SettingScreen";
import { AppTabParamList, HomeStackParamList } from "../utils/navigator";
import HomeScreen from "../screens/Home/HomeScreen";
import { COLORS, icons } from "../constants";
import HeaderButton from "../components/Header/HeaderButton/HeaderButton";

const Tab = createBottomTabNavigator<AppTabParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeStackCmp = ({
  navigation,
}: BottomTabScreenProps<AppTabParamList, "HomeStack">): JSX.Element => {
    // <AppTabParamList, "Home"> Home here must match with AppTabParamList and name attribute of Tab.Screen below
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.mainBackground},
        headerShadowVisible: false,
        headerShown: true,
        // headerLeft: () => (
        //   <HeaderButton
        //     iconUrl={icons.left}
        //     dimension="60%"
        //     handlePress={() => navigation.goBack()}
        //   />
        // ),
        headerTitle: ""
      }}
    >
      {/* name attribute here must match with HomeStackParamList */}
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="HomeStack" component={HomeStackCmp} />
            <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;
