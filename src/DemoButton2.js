import { Button, Text } from "react-native-paper";

const DemoButton2 =()=>{
    return(
        <Button icon="camera" 
        mode="contained" 
        labelStyle={{
            fontSize: 40,
            padding: 10
        }}
        onPress={()=> alert("Hello")}
        >
            <Text style={{fontSize: 24}}>
                Đăng Nhập
            </Text>
           
        </Button>
    )
}

export default DemoButton2;