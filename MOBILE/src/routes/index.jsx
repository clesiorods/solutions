import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"
import Wellcome from "../pages/Wellcome";
import Login from "../pages/Login";
import Resume from "../pages/Resume";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomTabBar } from "../components/CustomTabBar";

const Stack = createNativeStackNavigator();

// type StackNavigation = {
//     Wellcome: undefined;
//     Login: undefined;
// }

// export type StackTypes = NativeStackNavigationProp<StackNavigation>

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: true,
                tabBarActiveTintColor: 'red',
                tabBarStyle: {
                    borderRadius: 18,
                    backgroundColor: 'red'
                }
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen
                name="Login"
                component={Login}
                options={{ tabBarIcon: 'compare-arrows' }}
            />
            <Tab.Screen
                name="Wellcome"
                component={Wellcome}
                options={{
                    tabBarIcon: 'attach-money'
                }}
            />
            <Tab.Screen
                name="Home"
                component={Resume}
                options={{
                    tabBarIcon: 'storefront'
                }}
            />
        </Tab.Navigator>
    );
}