import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
const DemoFexbox = ()=>
{
    return (
        <View style={styles.container}>
            <View style={
                {
                    ...styles.box,
                    backgroundColor:"yellow"
                }
            }></View>
            <View style={
                {
                    ...styles.box,
                    backgroundColor:"rgb(100, 100, 255)"
                }
            }></View>
            <View style={
                {
                    ...styles.box,
                    backgroundColor:"blue",
                    alignSelf:"flex-end",
                }
            }></View>
            <Button onPress={()=> alert("fsfsfsfs")}>Click Me</Button>
        </View>
    )
}
export default DemoFexbox;
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor: "aqua",
            padding: 10,
        }
        ,
        box:{
            width:50,
            height:50,
        }
    }
)