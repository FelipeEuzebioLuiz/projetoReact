import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { style } from "./style";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { toggleModal as CustomModal } from "../../components/modal";

export default function Home({ navigation }: any) {

  const [modalVisible, setModalVisible] = React.useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  }
  
  return (
    <View style={style.container}>
      <View style={style.header}>
        {/* <TextInput style={style.boxInput}/>
        <Feather name="search" style={style.searchIcon}/> */}
        <MaterialCommunityIcons name="minecraft" style={style.icon} />
        <Text style={[style.text, {marginTop:20, fontSize:20, fontWeight:"700"}]}>
          Bem-vindo ao Guia Minecraft!
        </Text>
      </View>
      <ScrollView
        style={{ flex: 1, width: "100%" }}
        contentContainerStyle={[style.body, { flexGrow: 1, paddingBottom: 150 }]}
        showsVerticalScrollIndicator={false}
      >
        <>
          <TouchableOpacity style={style.botoesHome} onPress={toggleModal}><MaterialCommunityIcons name="minecraft" style={style.botaoIcon}/> <Text style={style.textoBotao}>Iniciar o mundo</Text></TouchableOpacity>
          <TouchableOpacity style={style.botoesHome} onPress={toggleModal}><MaterialCommunityIcons name="minecraft" style={style.botaoIcon}/><Text style={style.textoBotao}>Conseguindo recursos</Text></TouchableOpacity>
          <TouchableOpacity style={style.botoesHome} onPress={toggleModal}><MaterialCommunityIcons name="minecraft" style={style.botaoIcon}/><Text style={style.textoBotao}>Construindo sua casa</Text></TouchableOpacity>
          <TouchableOpacity style={style.botoesHome} onPress={toggleModal}><MaterialCommunityIcons name="minecraft" style={style.botaoIcon}/><Text style={style.textoBotao}>Sobrevivendo a noite</Text></TouchableOpacity>
          <TouchableOpacity style={style.botoesHome} onPress={toggleModal}><MaterialCommunityIcons name="minecraft" style={style.botaoIcon}/><Text style={style.textoBotao}>Explorando o mundo</Text></TouchableOpacity>
          <TouchableOpacity style={style.botoesHome} onPress={toggleModal}><MaterialCommunityIcons name="minecraft" style={style.botaoIcon}/><Text style={style.textoBotao}>Fazendo agricultura</Text></TouchableOpacity>
          <TouchableOpacity style={style.botoesHome} onPress={toggleModal}><MaterialCommunityIcons name="minecraft" style={style.botaoIcon}/><Text style={style.textoBotao}>Criando ferramentas</Text></TouchableOpacity>
          <TouchableOpacity style={style.botoesHome} onPress={toggleModal}><MaterialCommunityIcons name="minecraft" style={style.botaoIcon}/><Text style={style.textoBotao}>Enfrentando mobs</Text></TouchableOpacity>
          <TouchableOpacity style={style.botoesHome} onPress={toggleModal}><MaterialCommunityIcons name="minecraft" style={style.botaoIcon}/><Text style={style.textoBotao}>Mineração eficiente</Text></TouchableOpacity>
          <TouchableOpacity style={style.botoesHome} onPress={toggleModal}><MaterialCommunityIcons name="minecraft" style={style.botaoIcon}/><Text style={style.textoBotao}>Encantamentos</Text></TouchableOpacity>

          <CustomModal
            headerTitle="Título modal"
            buttonTitle="Fechar"
            onClose={toggleModal}
            modalVisible={modalVisible}
            onAction={toggleModal}
          />
          </>
      </ScrollView>
      {/* <Text style={style.text}>
          Este será o seu guia definitivo para começar uma jornada no mundo de blocos!
          Neste aplicativo você encontrará dicas sobre como começar e desenvolver sua jornada de sobrevivência em Minecraft
        </Text> */}
    </View>
  );
}