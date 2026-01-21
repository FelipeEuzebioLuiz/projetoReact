import React, { useState } from "react";

import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { style } from "./style";
import Icon from "../../assets/creeper.png";
import { theme } from "../../global/themes";
import {useNavigation, NavigationProp} from "@react-navigation/native";
import {Feather, MaterialIcons} from "@expo/vector-icons";


export default function Login (){

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false);
    const [secureEntry, setSecureEntry] = useState(true);

    async function getLogin(){
        try {
            setLoading(true);
            if(!email || !password){
                return Alert.alert('Atenção. ', 'Informe os campos obrigatórios!'), setLoading(false);
            }

            navigation.reset({routes:[{name:"BottomRoutes"}]});

            setTimeout(()=>{
                if(email == 'felipeeluiz2212@gmail.com' && password == 'Felipe*2212'){
                    Alert.alert('Logado com sucesso');
                } else {
                    Alert.alert('Usuário não encontrado');
                }
            }, 1000);

        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false);
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Icon}
                    style={style.icon}
                    resizeMode="contain"
                />
                <Text style={style.loginText}>Faça o login ae brother!</Text>
                <Text style={style.inputLabel}>E-mail</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.loginInput} value={email} onChangeText={setEmail}/>
                    <MaterialIcons name="email" size={24} color={theme.colors.black} />
                </View>
                <Text style={style.inputLabel}>Senha</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.loginInput} value={password} onChangeText={setPassword} secureTextEntry={secureEntry}/>
                    <Feather name={secureEntry ? "eye" : "eye-off"} size={24} color={theme.colors.black} onPress={() => setSecureEntry(prev => !prev)} />
                </View>
            </View>
            <View style={style.boxMid}>
                <TouchableOpacity style={style.button} onPress={()=>getLogin()} activeOpacity={0.1}>
                    {loading?<ActivityIndicator color={theme.colors.white} size={'small'}/>:<Text>Entrar</Text>}
                </TouchableOpacity>
            </View>
                 
            <Text  style={style.crieConta}>Não possui uma conta? <Text style={{color:theme.colors.primary}}>Crie agora mesmo!</Text></Text>   
        </View>
    )
}