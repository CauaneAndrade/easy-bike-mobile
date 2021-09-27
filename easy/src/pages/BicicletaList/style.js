import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#e6f2ff",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 19,
  },
  tinyLogo: {
    width: 80,
    height: 80,
    alignSelf: 'flex-start'
  },
  button: {
    alignSelf: 'flex-end',
    marginHorizontal: 16,
    height: 25,
    width: "50%",
    backgroundColor: "#3740ff",
    borderRadius: 4,
    marginBottom: 15,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 19,
    color: "#fff",
  },
});

export default styles;
