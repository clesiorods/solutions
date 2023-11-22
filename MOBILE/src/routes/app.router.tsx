import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Resume from "../pages/Resume";
import Configurations from "../pages/Configurations";
import Login from "../pages/Login";
import Reports from "../pages/Reports";
import Account from "../pages/Account";
import { CustomTabBar } from "../components/CustomTabBar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";


type StackNavigation = {
    Login: undefined;
    Resume: undefined;
    Reposts: undefined;
    Configurations: undefined;
    Account: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>


export function AppRouter() {

    const { Navigator, Screen } = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true
            }}
            tabBar={(props) => <CustomTabBar  {...props} />}
            >
                <Screen name="Login" component={Login} />
                <Screen name="Resume" component={Resume} />
                <Screen name="Reports" component={Reports} />
                <Screen name="Configurations" component={Configurations} />
                <Screen name="Account" component={Account} />
            </Navigator>
        </NavigationContainer>
    );
}