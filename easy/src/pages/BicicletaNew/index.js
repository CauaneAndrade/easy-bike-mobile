import { Picker } from "@react-native-community/picker";
import * as ImagePicker from "expo-image-picker";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "./style";


export default function BicicletaNew({ navigation }) {
  const [tituloAnuncio, setTituloAnuncio] = useState("");
  const [estiloUso, setEstiloUso] = useState("");
  const [anoFabricacao, setAnoFabricacao] = useState("");
  const [marca, setMarca] = useState("");
  const [resourcePath, setResourcePath] = useState({});
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickerItems = ["Estilo 1", "Estilo 2"].map((i) => (
    <Picker.Item label={i.toString()} value={i} key={i} />
  ));

  return (
    <View style={style.container}>
      <StatusBar style="auto" />
      <Text>Título do anúncio</Text>
      <TextInput
        style={style.textInput}
        onChangeText={(titulo) => setTituloAnuncio(titulo)}
      />

      <Text>Estilo de uso</Text>
      <Picker
        selectedValue={estiloUso}
        style={style.textInput}
        onValueChange={(estilo) => setEstiloUso(estilo)}
      >
        {pickerItems}
      </Picker>

      <Text>Marca</Text>
      <TextInput
        style={style.textInput}
        onChangeText={(estilo) => setMarca(estilo)}
      />

      <Text>Ano de fabricação (estimativa)</Text>
      <TextInput
        style={style.textInput}
        keyboardType="number-pad"
        onChangeText={(ano) => setAnoFabricacao(ano)}
      />

      <View style={style.containerImagePicker}>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <Text style={{ alignItems: "center" }}>{resourcePath.uri}</Text>
        <TouchableOpacity onPress={pickImage}>
          <Text style={style.cadTextBtn}>
            Selecione as imagens da bicicleta
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={style.button}
        onPress={() => {
          console.log("");
        }}
      >
        <Text style={style.buttonText}>Cadastrar </Text>
      </TouchableOpacity>
    </View>
  );
}
