import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";

import TabsRoutes from "../../routes/TabsRoutes";

import styles from "./styles";

import landingImg from "../../assets/images/starWarsBannerTwo.png";
import { useNavigation } from "@react-navigation/native";

function HomePage() {
  const { navigate } = useNavigation();

  function handleNavigationToSeasonGuide() {
    navigate("SeasonGuide");
  }

  return (
    <View>
      <Image source={landingImg} style={styles.banner}></Image>

      {/* <Fontisto style={styles.arrow} onPress={handleNavigationToSeasonGuide} name="arrow-right-l" /> */}
    </View>
  );
}

export default HomePage;
