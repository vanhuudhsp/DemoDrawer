import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import Styles2 from "./styles2";

const Home2 = ({navigation})=>{
    return(
        <View style={{...Styles2.container
            , alignItems:"center"
        }}>
            <Text>Home Screen</Text>
            <Button mode="contained"
                onPress={()=> navigation.navigate("Profile",{name:"Teo"}) }
            >Profile</Button>
        </View>
    )
}

export default Home2;