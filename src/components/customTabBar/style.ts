import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/themes";
import { Feather } from "@expo/vector-icons";

export const style = StyleSheet.create({  
  tabArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    height:80,
    width:Dimensions.get('window').width,
    backgroundColor:theme.colors.greenCreeper,
    gap:10,
  },
  tabButton:{
    borderRadius:30,
    padding:10,
    backgroundColor:theme.colors.darkGreen,
  },
  tabButtonSearch:{
    borderRadius:40,
    padding:20,
    backgroundColor:theme.colors.lightGreen,
  },
  userIcon:{
    color:theme.colors.white,
    fontSize:24,
  },
  searchIcon:{
    color:theme.colors.black,
    fontSize:30,
  },
  settingsIcon:{
    color:theme.colors.white,
    fontSize:24,
  },
});