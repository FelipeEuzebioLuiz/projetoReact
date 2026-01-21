import { Dimensions, StyleSheet } from "react-native";
import { theme } from "../../global/themes";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: theme.colors.white,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: theme.colors.gray,
    textAlign: "center",
    lineHeight: 24,
  },
});