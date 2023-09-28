
import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Tab =  createMaterialBottomTabNavigator();

const DemoBottomNavigation= ()=>{
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="blue"
            inactiveColor="aqua"
            barStyle={{ paddingBottom: 48 }}
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Detail" component={DetailsScreen}/>
            
        </Tab.Navigator>
    )
}

export default DemoBottomNavigation;