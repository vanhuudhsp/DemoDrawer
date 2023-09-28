import { Text, View } from "react-native";
import { Appbar } from "react-native-paper";

const  First =()=> {
      return (
        <View>
          <Appbar.Header>
            <Appbar.Action
              icon="menu"
              onPress={() =>
                this.props.navigation.dispatch(DrawerActions.toggleDrawer())
              }
            />
            <Appbar.Content title="First Page" />
          </Appbar.Header>
          <Text>First Page</Text>
        </View>
      );
}

export default First;