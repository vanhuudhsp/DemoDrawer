import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Drawer } from 'react-native-paper';

const CustomDrawerContent3 = ({navigation}) => {
  const [active, setActive] = React.useState('');

  return (
    <View style={styles.container}>
        <Drawer.Section title="Menu">
            <Drawer.Item
                icon="home"
                label="Home"
                active={active === 'home'}
                onPress={() => {
                    setActive('home');
                    navigation.navigate("Home");
                }
                  }
            />
            <Drawer.Item
                label="Detail"
                icon="star"
                active={active === 'detail'}
                onPress={() => {
                    setActive('detail');
                    navigation.navigate("Detail");
                }}
            />
        </Drawer.Section>
    </View>
  
  );
};

export default CustomDrawerContent3;


const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            paddingTop: 40
        }
    }
)
