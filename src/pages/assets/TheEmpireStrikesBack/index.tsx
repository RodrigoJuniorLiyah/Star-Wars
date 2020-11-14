import React from 'react';

import { ImageBackground, Text, View } from 'react-native';

import starWarsBackground from "../../../assets/images/starWarsBackground.png";

import styles from "./styles";

function TheEmpireStrikesBack() {
  return (
    <View>
      <ImageBackground source={starWarsBackground} style={styles.banner}>
        <Text>TheEmpireStrikesBack</Text>

      </ImageBackground>
    </View>
  );
}

export default TheEmpireStrikesBack;