import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import User from "../pages/users";

const Tab = createBottomTabNavigator();

export default function BottomRoutes(){
    return(
        <Tab.Navigator
            screenOptions={{
                 headerShown: false,
            }}
        >
            <Tab.Screen
                name = "home"
                component = {Home}
            />
            <Tab.Screen
                name = "user"
                component = {User}
            />
        </Tab.Navigator>
    )
}

