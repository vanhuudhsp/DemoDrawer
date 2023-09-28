import React from "react";
import { Image, StyleSheet, View } from "react-native";
export default DemoWithHeight= ()=>
{
    const img = 'data:image/png;base64,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';
    return (
        <View style={styles.container}>
            <View style={{height:50, backgroundColor:'rgb(255, 100, 255)', alignSelf:"stretch"}}></View>
            <View  style={{...styles.box, backgroundColor:"yellow"}}></View>
            <View  style={{...styles.box, backgroundColor:"red"}}></View>
            <Image style={{width:100, height:100}} source={{uri: img}} />
       </View>
    )
}
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            //flexDirection:"row",
            justifyContent:"space-around",
            alignItems:"center",
            backgroundColor: "aqua",
        },
        box:{
            width:50,
            height:50,
        }
    }
);