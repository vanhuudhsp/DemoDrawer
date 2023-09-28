
import React from "react";
import {StyleSheet, View} from "react-native";
import { MD3DarkTheme, MD3LightTheme, PaperProvider, Switch, Text } from "react-native-paper";
import { useMaterial3Theme } from "@pchmn/expo-material3-theme";
export default AppTheme = ()=>{

  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const onToggleSwitch = () => setIsDarkMode(!isDarkMode);
  const { theme } = useMaterial3Theme();
  const paperTheme =
    isDarkMode
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };
 

  return (
    <PaperProvider>
      <View  style={{...styles.container, backgroundColor: paperTheme.colors.background}}>
        <View style={{...styles.box, flexDirection:"row" , justifyContent:"space-between"}}>
          <Text variant="displaySmall" style={{color:paperTheme.colors.onBackground}}> 
            Dark Mode
          </Text>
          <Switch value={isDarkMode} onValueChange={onToggleSwitch}/>
        </View>
        <View style={{...styles.box, backgroundColor: paperTheme.colors.primary}}>
          <Text 
          variant="headlineSmall" 
          style={{...styles.text, color:paperTheme.colors.onPrimary}}>primary</Text>
        </View>
        <View style={{...styles.box, backgroundColor: paperTheme.colors.secondary}}>
          <Text 
          variant="headlineSmall" 
          style={{...styles.text, color:paperTheme.colors.onSecondary}}>secondary</Text>
        </View>
        <View style={{...styles.box, backgroundColor: paperTheme.colors.tertiary}}>
          <Text 
          variant="headlineSmall" 
          style={{...styles.text, color:paperTheme.colors.onTertiary}}>tertiary</Text>
        </View>
        <View style={{...styles.box, backgroundColor: paperTheme.colors.error}}>
          <Text 
          variant="headlineSmall" 
          style={{...styles.text, color:paperTheme.colors.onError}}>error</Text>
        </View>
        <View style={{...styles.box, backgroundColor: paperTheme.colors.background}}>
          <Text 
          variant="headlineSmall" 
          style={{...styles.text, color:paperTheme.colors.onBackground}}>background</Text>
        </View>
        <View style={{...styles.box, backgroundColor: paperTheme.colors.surfaceVariant}}>
          <Text 
          variant="headlineSmall" 
          style={{...styles.text, color:paperTheme.colors.onSurfaceVariant}}>surfaceVariant</Text>
        </View>
        <View style={{...styles.box, backgroundColor: paperTheme.colors.primaryContainer}}>
          <Text 
          variant="headlineSmall" 
          style={{...styles.text, color:paperTheme.colors.onPrimaryContainer}}>primaryContainer</Text>
        </View>
        <View style={{...styles.box, backgroundColor: paperTheme.colors.secondaryContainer}}>
          <Text 
          variant="headlineSmall" 
          style={{...styles.text, color:paperTheme.colors.onSecondaryContainer}}>secondaryContainer</Text>
        </View>
        <View style={{...styles.box, backgroundColor: paperTheme.colors.tertiaryContainer}}>
          <Text 
          variant="headlineSmall" 
          style={{...styles.text, color:paperTheme.colors.onTertiaryContainer}}>tertiaryContainer</Text>
        </View>
        <View style={{...styles.box, backgroundColor: paperTheme.colors.errorContainer}}>
          <Text 
          variant="headlineSmall" 
          style={{...styles.text, color:paperTheme.colors.onErrorContainer}}>errorContainer</Text>
        </View>
      </View>
    </PaperProvider>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1, 
  },
  box:{
    margin:10,
    padding:10,
  },
  text:{
    alignSelf:"center",
  }
});
