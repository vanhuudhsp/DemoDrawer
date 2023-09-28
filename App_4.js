import 'react-native-gesture-handler';
import React from 'react';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { PaperProvider } from 'react-native-paper';
import CustomNavigationBar from './src/CustomNavigationBar';
import { View } from 'react-native';
import DemoBottomNavigation from './src/DemoBottomNavigation ';

// const App = ()=>
// {
//   return (
//     <View>
//       <PaperProvider>
//         <DemoBottomNavigation></DemoBottomNavigation>
//       </PaperProvider>
//     </View>
//   )
// }


// export default App;


const Stack = createStackNavigator();

const App=()=>  {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator   
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
export default App;

// const Drawer = createDrawerNavigator();

// const App=()=>  {
//   return (
//     <PaperProvider>
//       <NavigationContainer>
//         <Drawer.Navigator   
//           initialRouteName="Home"
//           drawerContent={
//              (props) => <CustomDrawerContent {...props} />
//           }>
//           <Drawer.Screen name="Home" component={HomeScreen} />
//           <Drawer.Screen name="Details" component={DetailsScreen} />
//         </Drawer.Navigator>
//       </NavigationContainer>
//     </PaperProvider>
//   );
// }

