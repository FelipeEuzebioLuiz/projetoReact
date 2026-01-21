import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home";
import User from "../pages/users";
import Settings from "../pages/settings";
import CustomTabBar from "../components/customTabBar";
import { AuthProviderList } from "../context/authContextList";


const Tab = createBottomTabNavigator();

export default function BottomRoutes(){
    return(
        <AuthProviderList>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                tabBar={props => <CustomTabBar {...props}/>}
            >
                <Tab.Screen
                    name = "Home"
                    component = {Home}
                />
                <Tab.Screen
                    name = "User"
                    component = {User}
                />
                <Tab.Screen
                    name = "Settings"
                    component = {Settings}
                />
            </Tab.Navigator>
        </AuthProviderList>
    )
}

