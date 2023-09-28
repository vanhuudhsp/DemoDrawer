import { View } from "react-native";
import { Appbar, Text } from "react-native-paper";

const  Second = ()=> {
   
      return (
        <View>
          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.toggleDrawer())
              }
            />
            <Appbar.Content title="Second Page" />
          </Appbar.Header>
          <Text>Second Page</Text>
        </View>
      );
}

export default Second;