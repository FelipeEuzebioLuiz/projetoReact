import React, { createContext } from "react"
import { Alert } from "react-native";

export const AuthContextList = createContext({});
export const AuthProviderList = (props:any):any => {
    const onOpen = ()=>{
        Alert.alert("Atenção", "Modal aberto com sucesso!")
    }

    return(
        <AuthContextList.Provider value={{onOpen}}>
            {props.children}
        </AuthContextList.Provider>
    )
}

export const useAuthList = () => React.useContext(AuthContextList);