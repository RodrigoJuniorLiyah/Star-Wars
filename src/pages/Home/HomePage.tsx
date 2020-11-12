import React from 'react';
import { View, Image } from "react-native";

import TabsRoutes from '../../routes/TabsRoutes';

import styles from "./styles";

import landingImg from "../../assets/images/starWarsBannerTwo.png";

function HomePage() {
  return (
    <View>
      <Image source={landingImg} style={styles.banner}></Image>
    </View>
  );
}

export default HomePage;
