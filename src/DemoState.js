import React, { useState } from "react";
import {  Button, StyleSheet, Text, View } from "react-native";

const Cat = (props) =>
{
    const [isHungry, setIsHungry] = useState(true);
    return (
        <View style={styles.contianer}>
            <Text style={styles.text}>I am {props.name}, I am {isHungry?"Hungry":"Full"}</Text>
            <Button
                onPress={()=> setIsHungry(false)}
                title={isHungry?"Feed Me, Please": "Thank You"}
                disabled={!isHungry}
            />
        </View>
    )
}
export default DemoState = ()=>
{
    return (
        <Cat name="POP"/>
    )
}
const styles = StyleSheet.create(
    {
        contianer:{
            flex:1, 
            justifyContent:"center",
            alignItems: "center",
        },
        text:{
            fontSize: 30,
            fontWeight:"bold",
            color:"red"
        }
    }
)

