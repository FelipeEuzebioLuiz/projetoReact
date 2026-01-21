import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";
import { Feather, AntDesign } from '@expo/vector-icons';
import { AuthContextList } from "../../context/authContextList";

export default ({ state, navigation }: { state: any; navigation: any }) => {

  const {onOpen} = useContext<any>(AuthContextList);

  const goTo = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <View style={style.tabArea}>
      <TouchableOpacity style={style.tabButton} onPress={() => goTo('User')} activeOpacity={0.1}>
        <AntDesign name="user" style={style.userIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.tabButtonSearch} onPress={() => onOpen()} activeOpacity={0.1}>
        <Feather name="search" style={style.searchIcon} />
      </TouchableOpacity>
      <TouchableOpacity style={style.tabButton} onPress={() => goTo('Settings')} activeOpacity={0.1}>
        <Feather name="settings" style={style.settingsIcon} />
      </TouchableOpacity>
    </View>
  );
}