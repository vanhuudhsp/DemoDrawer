import { useState } from "react";
import { TextInput } from "react-native-paper"

const DemoTextInput2 = ()=>{
    const [text, setText] = useState("");
    return(
        <TextInput label="User Name" value={text}  mode="flat" 
        secureTextEntry
        onChangeText={setText}
        />
    )
}

export default DemoTextInput2;