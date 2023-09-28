import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/HomeScreen";
import DetailScreen from "./src/DetailScreen"
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import CustomDrawerContent3 from "./src/CustomDrawerContent3";
const { View, StyleSheet } = require("react-native")
const { Text, IconButton } = require("react-native-paper")

const Drawer = createDrawerNavigator();
const App = ()=>{
    return (
        <NavigationContainer
        >
            <Drawer.Navigator
                initialRouteName="Detail"
                drawerContent={(props)=> <CustomDrawerContent3 {...props}/>}
            >
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Detail" component={DetailScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default App;
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center"
        }
    }
)

