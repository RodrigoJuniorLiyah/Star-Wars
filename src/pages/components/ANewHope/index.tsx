import React from "react";
import { ImageBackground, ScrollView, Text, View, Image } from "react-native";

import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import starWarsBackground from "../../../assets/images/starWarsBackground.png";
import StarWarsANewHope from "../../../assets/images/StarWarsANewHope.jpg";

import styles from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  CategoryList,
  PlanetsCategoryList,
  StarshipsCategoryList,
  VehiclesCategoryList,
} from "./CategoryList";

function ANewHope() {
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
            <Text style={{ fontWeight: "bold" }}>A</Text> New Hope
          </Text>
        </View>
        <ScrollView>
          <View style={styles.boxSynopsis}>
            <Text style={styles.synopsis}>
              A princesa Leia é mantida refém pelas forças imperiais comandadas
              por Darth Vader. Luke Skywalker e o capitão Han Solo precisam
              libertá-la e restaurar a liberdade e a justiça na galáxia.
            </Text>
            <Image source={StarWarsANewHope} style={styles.bannerFilm} />
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

export default ANewHope;
