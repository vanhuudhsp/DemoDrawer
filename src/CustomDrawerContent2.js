import { useState } from "react";
import { View } from "react-native";
import { Drawer } from "react-native-paper";


const CustomDrawerContent2 = ({navigation})=>{
  const [active, setActive] = useState('');

  return (
    <View>
        <Drawer.Section title="Some title" style={{marginTop:40}}>
            <Drawer.Item
                label="Home"
                icon="home"
                active={active === 'home'}
                onPress={() => {
                    navigation.navigate('Home');
                    setActive('home');
                }
                }
            />
            <Drawer.Item
                label="Details"
                icon="email"
                active={active === 'detail'}
                onPress={() => 
                    {
                        navigation.navigate('Details')
                        setActive('detail')}
                    }
            />
        </Drawer.Section>
    </View>
    
    
  );
}

export default CustomDrawerContent2;