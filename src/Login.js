import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { useMyContextController } from "./context";

const Login = ()=>{
    const [controller, dispatch] = useMyContextController();
    const {admin} = controller;
    //console.log(admin);  
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View style ={styles.container}>
            <Text style ={styles.text}>LOGIN</Text>
            <TextInput
                style={styles.item}
                placeholder="Nhap User Name"
                value={userName}
                onChangeText={(text)=> setUserName(text)}
            />
            <TextInput
                style={styles.item}
                placeholder="Nhap Password"
                value={password}
                onChangeText={(text)=> setPassword(text)}
            />
            <Button 
                style={styles.item}
                title="Dang Nhap"
                onPress={()=>(userName===admin.userName&& password===admin.password)? 
                    alert("Xin chao " + userName) : alert("Sai UserName và Password")}
            />
        </View>
    )
}

export default Login;

const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:"center",   
        },
        item:{
            marginBottom: 20, 
        }, 
        text:{
            fontSize:30,
            marginBottom: 30,
            alignSelf: "center",
            fontWeight:"bold",
            color:"blue",
        }
    }
)