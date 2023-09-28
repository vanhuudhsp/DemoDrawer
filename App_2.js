import React from "react";  
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DemoTextInput from "./src/DemoTextInput";
import { SafeAreaView } from "react-native-safe-area-context";
import DemoCard from "./src/DemoCard";
import DemoDataTable from "./src/DemoDataTable";
import DemoPaperTheme from "./src/DemoPaperTheme";

export default App =()=>{
    return(
      <SafeAreaView style={styles.container}>
        <DemoPaperTheme/>
      </SafeAreaView>
    )
}
const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      //backgroundColor: "red",
    },

    text: {
      fontSize: 42,
    },
  }
)