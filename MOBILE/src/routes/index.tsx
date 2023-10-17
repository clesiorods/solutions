import { NativeStackNavigationProp, createNativeStackNavigator } from "@react-navigation/native-stack"
import Wellcome from "../pages/Wellcome";
import Login from "../pages/Login";

const Stack = createNativeStackNavigator();

type StackNavigation = {
    Wellcome: undefined; //Typagem do parametro que rá passado na navegação
    Login: undefined;
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default function Routes() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Login" 
                component={Login} 
                options={{headerShown:false}}
            />
            <Stack.Screen 
                name="Wellcome" 
                component={Wellcome}
                options={{headerShown:false}} 
            />
        </Stack.Navigator>
    );
}