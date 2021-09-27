import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  containerImagePicker: {
    width: "100%",
    height: 65,
    marginBottom: "25%",
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#4da9ff",
  },
  button: {
    width: "100%",
    padding: 30,
    height: 60,
    backgroundColor: "#3740ff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginBottom: 12,
  },
  cadTextBtn: {
    textAlign: "center",
    fontSize: 15,
    color: "#fff",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 19,
    color: "#fff",
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#e6f2ff",
    width: "100%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
});

export default styles;
