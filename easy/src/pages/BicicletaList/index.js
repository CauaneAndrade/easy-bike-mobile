import React from "react";
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
import styles from "./style";

export default function BicicletaDetails({ navigation, userLogado, user }) {
  const getAnuncios = () => {
    return [
      {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        tituloAnuncio: "tituloAnuncio 1",
        donoBicicleta: "donoBicicleta 1",
        marcaBicicleta: "marcaBicicleta 1",
        anoFabricacao: "anoFabricacao 1",
        images: [
          "https://static.netshoes.com.br/produtos/bicicleta-aro-26-gts-feel-freio-a-disco-21-marchas/08/W88-0006-108/W88-0006-108_zoom1.jpg",
          "https://static.netshoes.com.br/produtos/bicicleta-aro-26-masculina-18-marchas-aco-carbono-ultra-bikes/14/ISL-0024-014/ISL-0024-014_zoom1.jpg",
        ],
      },
      {
        id: "bd7acddbea-c1b1-46c2-aed5-3ad5sss3abb28ba",
        tituloAnuncio: "tituloAnuncio 2",
        donoBicicleta: "donoBicicleta 2",
        marcaBicicleta: "marcaBicicleta 2",
        anoFabricacao: "anoFabricacao 2",
        images: [
          "https://static.netshoes.com.br/produtos/bicicleta-aro-26-gts-feel-freio-a-disco-21-marchas/08/W88-0006-108/W88-0006-108_zoom1.jpg",
          "https://static.netshoes.com.br/produtos/bicicleta-aro-26-masculina-18-marchas-aco-carbono-ultra-bikes/14/ISL-0024-014/ISL-0024-014_zoom1.jpg",
        ],
      },
    ];
  };
  const DATA = [];
  for (let i = 0; i < 10; i++) {
    DATA.push(i);
  }

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

  const Item = ({
    donoBicicleta,
    tituloAnuncio,
    marcaBicicleta,
    anoFabricacao,
    images,
  }) => (
    <View>
      <View style={styles.item}>
        <Carousel
          data={images}
          renderItem={renderImage}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          itemHeight={ITEM_HEIGHT}
          inactiveSlideShift={0}
          useScrollView={true}
        />

        <View style={{ alignSelf: "flex-end" }}>
          <Text style={styles.title}>{tituloAnuncio}</Text>
          <Text style={styles.title}>{donoBicicleta}</Text>
          <Text style={styles.title}>{marcaBicicleta}</Text>
          <Text style={styles.title}>{anoFabricacao}</Text>
        </View>
      </View>

      {userLogado && user.categoria === "ciclista" && <TouchableOpacity
        style={styles.button}
        onPress={() => {
            console.log("#################");
        }}
      >
        <Text style={styles.buttonText}>Demonstrar interesse</Text>
      </TouchableOpacity>}

      {!userLogado && <TouchableOpacity
        style={styles.button}
        onPress={() => {
            navigation.navigation.navigate("Perfil");
        }}
      >
        <Text style={styles.buttonText}>Demonstrar interesse</Text>
      </TouchableOpacity>}
    </View>
  );
  const renderItem = ({ item }) => (
    <Item
      donoBicicleta={item.donoBicicleta}
      tituloAnuncio={item.tituloAnuncio}
      marcaBicicleta={item.marcaBicicleta}
      anoFabricacao={item.anoFabricacao}
      images={item.images}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={getAnuncios()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
