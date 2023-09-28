import React from "react";
import { Button, Text, View } from "react-native";

const Cat = (props)=>{
    return (
        <View>
            <Text>I am {props.hoTen}</Text>
        </View>
    )
}
export default DemoProps = ()=>{
    return (
        <View>
            <Cat hoTen="dfsfs"/>
            <Cat hoTen="dfsfsfs"/>
            <Cat hoTen="dfsfsfsfs"/>
            <Cat hoTen="dffsfssfs"/>
            
        </View>
    )
}