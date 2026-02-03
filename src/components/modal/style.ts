import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../global/themes';

export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: Dimensions.get('window').height,
      },
        modalView: {
        margin: 20,
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: Dimensions.get('window').height -100,
        width: Dimensions.get('window').width - 40,
      },
        headerModal:{
        width:Dimensions.get('window').width - 40,
        height:50,
        backgroundColor:theme.colors.greenCreeper,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
      },
        closeButton:{  
        position:'absolute',
        right:15,
        top:10,
      },
        headerTitle:{
        color:theme.colors.white,
        fontSize:20,
        fontWeight:'700',
        left:15,
        top:15,
      },
});