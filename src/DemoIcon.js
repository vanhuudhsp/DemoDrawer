import React from "react";
import { Image, Text } from "react-native";
import { Button } from "react-native-paper";

export default DemoIcon =()=>{
    return (
        // <Button icon="camera">
        //     Press me
        // </Button>
        // <Button icon={{ uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400', }}>
        //     Press me
        // </Button>
        // <Button icon={require('../assets/favicon.png')}>
        //     Press me
        // </Button>
        // <Button  icon={{ source: "briefcase-plus", direction: 'rtl'}} > 
        //     Press me
        // </Button>
        <Button 
            style={{padding:10, margin: 5}} 
            labelStyle={{fontSize:40}}  
            icon="camera" 
            mode="contained"
             onPress={() => console.log('Pressed')}
        >
            <Text style={{fontSize:20}}>Press me</Text>
        </Button>
        // <Button
        // icon={({color}) => 
        // (
        //   <Image
        //     source={require('../assets/home.png')}
        //     style={{ width: 50, height: 50, tintColor: color }}
        //   />
        // )}
        // >
        // Press me
        // </Button>
    )
}