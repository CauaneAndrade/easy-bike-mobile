import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import authService from "../../../config/auth.service";
import style from "./style";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const data = await authService.login(email, password);
    navigation.navigation.navigate("Listagem de Bicicletas");
  };

  return (
    <View style={style.container}>
      <View style={style.inputView}>
        <TextInput
          style={style.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={style.inputView}>
        <TextInput
          style={style.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          console.log("");
        }}
      >
        <Text style={style.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.loginBtn} onPress={login}>
        <Text style={style.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={style.separator}>ou</Text>
      <TouchableOpacity
        style={style.newAccountBtn}
        onPress={() => {
          console.log("");
        }}
      >
        <Text>Criar nova conta</Text>
      </TouchableOpacity>
    </View>
  );
}
