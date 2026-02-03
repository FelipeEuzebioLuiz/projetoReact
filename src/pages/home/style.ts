import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: theme.colors.black,
    textAlign: "center",
    lineHeight: 24,
  },
  header:{
    width:"100%",
    height:Dimensions.get("window").height/4,
    backgroundColor: theme.colors.greenCreeper,
    justifyContent: "center",
    paddingHorizontal:20,
  },
  boxInput:{
    width:"100%",
    height:40,
    marginBottom:20,
    backgroundColor: theme.colors.white,
    borderRadius:30,
    fontSize:16,
    top:20,
  },
  searchIcon:{
    fontSize:24,
    color: theme.colors.gray,
    position: "absolute",
    left:30,
    top:67,
  },
  body:{
    width:"100%",
    backgroundColor: theme.colors.lightGray,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal:20,
    paddingTop:40,
    gap:20,
    flexDirection: "column",
  },
  botoesHome:{
    width:"100%",
    height:100,
    backgroundColor: theme.colors.white,
    borderRadius:10,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom:20,
    top:10,
  },
  icon:{
    fontSize:100,
    color: theme.colors.black,
    justifyContent: "center",
    alignSelf: "center",
    top:20,
  },
  textoBotao:{
    fontSize:20,
    fontWeight:"700",
    color: theme.colors.black,
    right:10,
    position:"absolute",
    justifyContent: "space-around",
  },
  botaoIcon:{
    fontSize:60,
    color: theme.colors.black,
    left:10,
  }
});