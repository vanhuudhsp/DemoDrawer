import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Drawer } from "react-native-paper";
const  CustomDrawerContent = (props) =>{
    const [active, setActive] = React.useState('');
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Help"
                onPress={() => Linking.openURL('https://mywebsite.com/help')}
            />
            <Drawer.Section title="Some title">
                <Drawer.Item
                label="Home"
                active={active === 'home'}
                onPress={()=> {setActive('home'); props.navigation.navigate('Home')}}
                />
                <Drawer.Item
                label="Details"
                active={active === 'details'}
                onPress={() => {setActive('details');  props.navigation.navigate('Details')}}
                />
            </Drawer.Section>
        </DrawerContentScrollView>
    );
}
export default CustomDrawerContent;