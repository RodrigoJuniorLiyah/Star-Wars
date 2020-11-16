import React from "react";
import { ImageBackground, Text, View, Image } from "react-native";

import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import starWarsBackground from "../../../assets/images/starWarsBackground.png";
import StarWarsTheStrikesBack from "../../../assets/images/StarWarsTheStrikesBack.jpg";

import styles from "./styles";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  CategoryList,
  PlanetsCategoryList,
  StarshipsCategoryList,
  VehiclesCategoryList,
} from "./CategoryList";

function TheEmpireStrikesBack() {
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
            <Text style={{ fontWeight: "bold" }}>The</Text> Empire{"\n"} Strikes
            Back
          </Text>
        </View>
        <ScrollView>
          <View style={styles.boxSynopsis}>
            <Text style={styles.synopsis}>
              Yoda treina Luke Skywalker para ser um cavaleiro Jedi. Han Solo
              corteja a Princesa Leia enquanto Darth Vader retorna para combater
              as forças rebeldes que tentam salvar a galáxia.
            </Text>
            <Image source={StarWarsTheStrikesBack} style={styles.bannerFilm} />
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

export default TheEmpireStrikesBack;
