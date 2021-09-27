import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  
    inputView: {
      backgroundColor: "#e6f2ff",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
  
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
  
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
  
    loginBtn: {
      width: "65%",
      borderRadius: 25,
      height: 45,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#80bfff",
    },

    newAccountBtn: {
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#80bfff",
      },
    separator: {
        marginTop: 25,
        paddingBottom: 25
      },
  });

export default styles;
