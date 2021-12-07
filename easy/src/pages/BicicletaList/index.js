import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Carousel from "react-native-snap-carousel";
import General from "../../config/api";
import styles from "./style";

export default function BicicletaDetails({ navigation, user }) {
  const [anunciosAll, setAnunciosAll] = useState();

  useEffect(() => {
    async function getAnuncios() {
      console.log("-----estou na funcao-----");
      const resp = await General.getBicicletas();
      await setAnunciosAll(resp);
    }
    console.log("----vou chamar a funcao-----");
    getAnuncios();
    console.log(anunciosAll);
    console.log("----chamei a funcao-----");
  }, []);

  const SLIDER_WIDTH = Dimensions.get("window").width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
  const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);

  const renderImage = ({ item }) => {
    return (
      <Image
        style={styles.tinyLogo}
        source={{
          uri: item,
        }}
      />
    );
  };

  const Item = ({ dono, estilo, marca, ano_fabricacao, foto }) => (
    <View>
      <View style={styles.item}>
        <Carousel
          // data={foto}
          renderItem={renderImage}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          itemHeight={ITEM_HEIGHT}
          inactiveSlideShift={0}
          useScrollView={true}
        />

        <View style={{ alignSelf: "flex-end" }}>
          <Text style={styles.title}>Estilo: {estilo}</Text>
          <Text style={styles.title}>Dono: {dono}</Text>
          <Text style={styles.title}>Marca: {marca}</Text>
          <Text style={styles.title}>Ano Fabricação: {ano_fabricacao}</Text>
        </View>
      </View>

      {user && user.categoria === "Ciclista" && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("Ciclista");
          }}
        >
          <Text style={styles.buttonText}>Demonstrar interesse</Text>
        </TouchableOpacity>
      )}

      {!user && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonText}>Demonstrar interesse</Text>
        </TouchableOpacity>
      )}
    </View>
  );
  const renderItem = ({ item }) => (
    <Item
      dono={item.dono}
      estilo={item.estilo}
      marca={item.marca}
      ano_fabricacao={item.ano_fabricacao}
      foto={item.foto}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={anunciosAll}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
