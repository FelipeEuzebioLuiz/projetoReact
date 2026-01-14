import React, { useState } from "react";

import{Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator} from "react-native";
import { style } from "./style";
import Icon from "../../assets/creeper.png";
import { theme } from "../../global/themes";
import {useNavigation, NavigationProp} from "@react-navigation/native";


export default function Login (){

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading,setLoading] = useState(false);

    async function getLogin(){
        try {
            setLoading(true);
            if(!email || !password){
                return Alert.alert('Atenção. ', 'Informe os campos obrigatórios!'), setLoading(false);
            }

            navigation.navigate("bottomRoutes")

            setTimeout(()=>{
                if(email == 'felipeeluiz2212@gmail.com' && password == 'Felipe*2212'){
                    Alert.alert('Logado com sucesso');
                } else {
                    Alert.alert('Usuário não encontrado');
                }
                setLoading(false);
            }, 1000);

        } catch (error) {
            console.log(error);
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
                </View>
                <Text style={style.inputLabel}>Senha</Text>
                <View style={style.boxInput}>
                    <TextInput style={style.loginInput} value={password} onChangeText={setPassword}/>
                    
                </View>
            </View>
            <View style={style.boxMid}>
                <TouchableOpacity style={style.button} activeOpacity={0.6} onPress={()=>getLogin()}>
                    {loading?<ActivityIndicator color={theme.colors.white} size={'small'}/>:<Text>Entrar</Text>}
                </TouchableOpacity>
            </View>
                 
            <Text  style={style.crieConta}>Não possui uma conta? <Text style={{color:theme.colors.primary}}>Crie agora mesmo!</Text></Text>   
        </View>
    )
}