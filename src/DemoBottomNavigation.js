import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
const MusicRoute = () => <View style={styles.container}><Text style={styles.text}>Music</Text></View>;
const AlbumsRoute = () => <View style={styles.container}><Text style={styles.text}>Albums</Text></View>;
const RecentsRoute = () => <View style={styles.container}><Text style={styles.text}>Recents</Text></View>;
const NotificationsRoute = () => <View style={styles.container}><Text style={styles.text}>Notifications</Text></View>;
const DemoBottomNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });
  return (
    
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={(i)=>setIndex(i)}
      renderScene={renderScene}
      />
  );
};
export default DemoBottomNavigation;
const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
    }
    , 
    text :{
      fontSize:50,
      fontWeight: 'bold',
    }
  }
)