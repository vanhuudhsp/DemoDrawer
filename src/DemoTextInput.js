import React, { useState } from "react";
import { TextInput } from "react-native";
 export default DemoTextInput = ()=>{
    const [value, setValue] = useState("fgdgdgdgd");

    return (
        <TextInput
            value={value}
            style={{
                fontSize: 50,
                textAlign:"center",
                borderColor: "red",
                borderWidth: 2
            }}
            onChangeText={(t)=> setValue(t)}
            placeholder="Nhao van"
            secureTextEntry={true}
            numberOfLines={3}
        />
    )
 }