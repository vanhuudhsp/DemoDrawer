import { useState } from "react";
import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

const DemoHelperText = ()=>{
    const [text,setText] = useState('');
    const check = ()=>{
        const pattern = new RegExp("[0-9]+") ;
        return !text.match(pattern);
    }
    return(
        <View>
            <TextInput value={text} onChangeText={setText} />
            <HelperText type="error" visible={check()}>
                Email phai co @
            </HelperText>
        </View>
    )
}


export default DemoHelperText;