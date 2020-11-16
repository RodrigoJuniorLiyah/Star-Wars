import React from "react";
import { ImageBackground, Text, View, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";

import starWarsBackground from "../../../assets/images/starWarsBackground.png";
import StarWarsReturnoftheJedi from "../../../assets/images/StarWarsReturnoftheJedi.jpg";

import styles from "./styles";

import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  CategoryList,
  PlanetsCategoryList,
  StarshipsCategoryList,
  VehiclesCategoryList,
} from "./CategoryList";

function ReturnOfTheJedi() {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground source={starWarsBackground} style={styles.banner}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Fontisto
              title="Back"
              style={styles.arrow}
              onPress={() => navigation.goBack()}
              name="arrow-left-l"
            />
          </TouchableOpacity>
          <Text style={styles.title}>
            <Text style={{ fontWeight: "bold" }}>Return</Text> Of The Jedi
          </Text>
        </View>
        <ScrollView>
          <View style={styles.boxSynopsis}>
            <Text numberOfLines={9} style={styles.synopsis}>
              Luke Skywalker e seus amigos viajam para Tatooine e salvam seu
              amigo Han Solo do lorde do crime Jabba o Hutt. O Império Galático
              começou a construção de uma segunda Estrela da Morte, visando
              aniquilar a Aliança Rebelde, mas seu término está comprometido
              pela Frota Rebelde, que insiste em dar um fim ao Império. Neste
              meio tempo, Luke Skywalker luta para resgatar Vader, um ex-Jedi,
              de volta do lado sombrio da Força.
            </Text>
            <Image source={StarWarsReturnoftheJedi} style={styles.bannerFilm} />
          </View>
          <View>
            <Text style={styles.MainCharacters}>
              Principais Personagens do Filme
            </Text>
            <CategoryList />
          </View>
          <View>
            <Text style={styles.planets}>Planetas</Text>
            <PlanetsCategoryList />
          </View>
          <View>
            <Text style={styles.starships}>naves estelares</Text>
            <StarshipsCategoryList />
          </View>
          <View>
            <Text style={styles.vehicles}>Veículos</Text>
            <VehiclesCategoryList />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default ReturnOfTheJedi;
