import { useState } from "react";
import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

const DemoHelperText =()=>{
    const [text,setText] = useState('');
    const hasErrors = () => {
        var pattern = new RegExp("[^a-zA-Z]");
        return !text.match(pattern);
        //return !text.includes('@');

    };
    
    return (
        <View>
            <TextInput label="Email" value={text} onChangeText={setText} />
            <HelperText type="error" visible={hasErrors()}>
                Email address is invalid!
            </HelperText>
        </View>
    )

}

export default DemoHelperText;