import React from "react";
import { Text, View } from "react-native";
import { style } from "./style";

export default function Home() {
  return (
    <View style={style.container}>
      <Text style={style.text}>
        Este será o seu guia definitivo para começar uma jornada no mundo de blocos!
        Neste aplicativo você encontrará dicas sobre como começar e desenvolver sua jornada de sobrevivência em Minecraft
      </Text>
    </View>
  );
}