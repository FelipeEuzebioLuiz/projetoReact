import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop:{
        width:'100%',
        height:Dimensions.get('window').height/2,
        backgroundColor: theme.colors.greenCreeper,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:'15%',
    },
    boxMid:{
        width:'100%',
        height:Dimensions.get('window').height/4,
        backgroundColor:theme.colors.greenCreeper,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:30
    },
    boxBottom:{
        width:'100%',
        height:Dimensions.get('window').height/6,
        backgroundColor:theme.colors.greenCreeper,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:30
    },
    boxInput:{
        width:'100%',
        height:40,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:theme.colors.green,
        borderWidth:2,
        borderRadius:30,
        borderColor:theme.colors.green,
        paddingHorizontal:15,
    },
    icon:{
        width:100,
        height:100
    },
    loginText:{
        fontSize:25,
        fontWeight:'bold',
        marginTop:30,
    },
    loginInput:{
        width:'90%',
        height:'100%',
        color:theme.colors.white,
    },
    inputLabel:{
        marginRight:'82%',
        marginVertical:10,
        fontWeight:'bold',
    },
    button:{
        width:200,
        height: 50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:30,
        borderColor:theme.colors.gray,
        backgroundColor:theme.colors.gray,
        color:theme.colors.white,
        fontWeight:'bold',
        fontSize:18,
    },
    crieConta:{
        color:theme.colors.white,
        fontSize:18
    },
})