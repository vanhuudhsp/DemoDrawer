import React from "react";
import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";
export default DemoTheme=()=>{
    const theme = useTheme();
    return(
        <View  style={{ flex:1, backgroundColor: theme.colors.primary }}>
           
        </View>
    )
}