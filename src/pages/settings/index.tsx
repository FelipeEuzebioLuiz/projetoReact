import React from "react";
import { Text, View } from "react-native";
import { style } from "./style";

export default function Settings() {
  return (
    <View style={style.container}>
      <Text style={style.text}>
        Aqui você poderá selecionar suas configurações preferidas!
      </Text>
    </View>
  );
}