import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import Teste from "../../services/Teste";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import starWarsBackground from "../../assets/images/starWarsBackground.png";
import StarWarsANewHope from "../../assets/images/StarWarsANewHope.jpg";
import StarWarsPhantomMenace from "../../assets/images/StarWarsPhantomMenace.jpg";
import StarWarsReturnoftheJedi from "../../assets/images/StarWarsReturnoftheJedi.jpg";
import StarWarsTheStrikesBack from "../../assets/images/StarWarsTheStrikesBack.jpg";

function SeasonGuide() {
  const { navigate } = useNavigation();

  function handleNavigationToANewHope() {
    navigate("ANewHope");
  }

  function handleNavigationToReturnOfTheJedi() {
    navigate("ReturnOfTheJedi");
  }

  function handleNavigationToTheEmpireStrikesBack() {
    navigate("TheEmpireStrikesBack");
  }

  function handleNavigationToThePhantomMenace() {
    navigate("ThePhantomMenace");
  }
  return (
    <View>
      <ImageBackground source={starWarsBackground} style={styles.banner}>
        <Text style={styles.title}>Guia de Temporada</Text>

        <View style={styles.grid}>
          <ScrollView style={styles.listContainer}>
            <View style={styles.teste}>
              <ImageBackground
                style={styles.bannerFilm}
                source={StarWarsANewHope}
              >
                <Text style={styles.textImage}>
                  <Text style={{ fontWeight: "bold" }}>Filme:</Text> Star Wars A
                  New Hope{"\n"}
                  <Text style={{ fontWeight: "bold" }}>Diretor:</Text> George
                  Lucas{"\n"}
                  <Text style={{ fontWeight: "bold" }}>Data:</Text> 1977-05-25
                  {"\n"}
                </Text>
                <Fontisto
                  style={styles.arrow}
                  onPress={handleNavigationToANewHope}
                  name="arrow-right-l"
                />
              </ImageBackground>
              <ImageBackground
                style={styles.bannerFilm}
                source={StarWarsPhantomMenace}
              >
                <Text style={styles.textImage}>
                  <Text style={{ fontWeight: "bold" }}>Filme:</Text> The Phantom
                  Menace{"\n"}
                  <Text style={{ fontWeight: "bold" }}>Diretor:</Text> George
                  Lucas{"\n"}
                  <Text style={{ fontWeight: "bold" }}>Data:</Text> 1999-05-19
                  {"\n"}
                </Text>
                <Fontisto
                  style={styles.arrow}
                  onPress={handleNavigationToReturnOfTheJedi}
                  name="arrow-right-l"
                />
              </ImageBackground>
              <ImageBackground
                style={styles.bannerFilm}
                source={StarWarsReturnoftheJedi}
              >
                <Text style={styles.textImage}>
                  <Text style={{ fontWeight: "bold" }}>Filme:</Text> Return of
                  the Jedi{"\n"}
                  <Text style={{ fontWeight: "bold" }}>Diretor:</Text> Richard
                  Marquand{"\n"}
                  <Text style={{ fontWeight: "bold" }}>Data:</Text> 1983-05-25
                  {"\n"}
                </Text>
                <Fontisto
                  style={styles.arrow}
                  onPress={handleNavigationToTheEmpireStrikesBack}
                  name="arrow-right-l"
                />
              </ImageBackground>
              <ImageBackground
                style={styles.bannerFilm}
                source={StarWarsTheStrikesBack}
              >
                <Text style={styles.textImage}>
                  <Text style={{ fontWeight: "bold" }}>Filme:</Text> The Empire
                  Strikes Back{"\n"}
                  <Text style={{ fontWeight: "bold" }}>Diretor:</Text> Irvin
                  Kershner{"\n"}
                  <Text style={{ fontWeight: "bold" }}>Data:</Text> 1980-05-17
                  {"\n"}
                </Text>
                <Fontisto
                  style={styles.arrow}
                  onPress={handleNavigationToThePhantomMenace}
                  name="arrow-right-l"
                />
              </ImageBackground>
              {/* <Teste /> */}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

export default SeasonGuide;
