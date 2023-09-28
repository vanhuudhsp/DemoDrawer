import React from "react";  
import { SafeAreaView, StyleSheet, View } from "react-native";
import { PaperProvider, useTheme } from "react-native-paper";


export default BookStore = ()=>
{
    const theme = useTheme();
    return (
        <SafeAreaView style={{...styles.container, backgroundColor: theme.colors.primary}}>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
})