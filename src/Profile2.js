import { View } from "react-native"
import { Text } from "react-native-paper"
import Styles2 from "./styles2";

const Profile2 = ({navigation, route})=>{
    return(
        <View style={{...Styles2.container}}>
            <Text>Hello {route.params.name}</Text>
        </View>
    )
}

export default Profile2;