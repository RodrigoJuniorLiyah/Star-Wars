import React from "react";
import { ImageBackground, Text, View } from "react-native";

import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import starWarsBackground from "../../../assets/images/starWarsBackground.png";

import styles from "./styles";

function ANewHope() {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground source={starWarsBackground} style={styles.banner}>
        <View style={styles.header}>
          <Fontisto
            title="Back"
            style={styles.arrow}
            onPress={() => navigation.goBack()}
            name="arrow-left-l"
          />
          <Text style={styles.title}><Text style={{ fontWeight: "bold" }}>A</Text> New Hope</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

export default ANewHope;
