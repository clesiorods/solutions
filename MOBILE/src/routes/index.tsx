import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "../pages/Login";
import Resume from "../pages/Resume";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomTabBar } from "../components/CustomTabBar";
import Reports from "../pages/Reports";
import Configurations from "../pages/Configurations";
import Account from "../pages/Account";

// const Stack = createNativeStackNavigator();

type StackNavigation = {
    Login: undefined;
    Resume: undefined;
    Reposts: undefined;
    Configurations: undefined;
    Account: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

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
            />
            <Tab.Screen
                name="Resume"
                component={Resume}
            />
            <Tab.Screen
                name="Reposts"
                
                component={Reports}
            />
            <Tab.Screen
                name="Configurations"
                component={Configurations}
            />
            <Tab.Screen
                name="Account"
                component={Account}
            />
        </Tab.Navigator>
    );
}