import React from "react";
import { ImageBackground, Text, View, Image } from "react-native";

import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import starWarsBackground from "../../../assets/images/starWarsBackground.png";
import StarWarsPhantomMenace from "../../../assets/images/StarWarsPhantomMenace.jpg";

import styles from "./styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  CategoryList,
  PlanetsCategoryList,
  StarshipsCategoryList,
  VehiclesCategoryList,
} from "./CategoryList";

function ThePhantomMenace() {
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
            <Text style={{ fontWeight: "bold" }}> The</Text>
            {"\n"} Phantom Menace
          </Text>
        </View>
        <ScrollView>
          <View style={styles.boxSynopsis}>
            <Text numberOfLines={9} style={styles.synopsis}>
              Obi-Wan e seu mentor embarcam em uma perigosa aventura na
              tentativa de salvar o planeta das garras de Darth Sidious. Durante
              a viagem, eles conhecem um habilidoso menino e decidem treiná-lo
              para se tornar um Jedi. Mas o tempo irá revelar que as coisas nem
              sempre são o que aparentam ser.
            </Text>
            <Image source={StarWarsPhantomMenace} style={styles.bannerFilm} />
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

export default ThePhantomMenace;
