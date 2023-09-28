import { useState } from "react";
import { View } from "react-native";
import { HelperText, TextInput } from "react-native-paper"


const DemoHelperText3 = ()=>{
    const [userName, setUserName] = useState('');
    const check =()=>{
        const pattern = new RegExp('[a-z]+[1-9]+')
        return !userName.match(pattern);
    }
    return(
        <View>
            <TextInput secureTextEntry value={userName} onChangeText={setUserName}/>
            <HelperText visible={check()} type="error">
                Không đúng định dạng email
            </HelperText>
        </View>
    )
}



export default DemoHelperText3;