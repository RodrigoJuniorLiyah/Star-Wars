import React from 'react';

import { ImageBackground, Text, View } from 'react-native';

import starWarsBackground from "../../../assets/images/starWarsBackground.png";

import styles from "./styles";

function ReturnOfTheJedi() {
  return (
    <View>
      <ImageBackground source={starWarsBackground} style={styles.banner}>
        <Text>ReturnOfTheJedi</Text>

      </ImageBackground>
    </View>
  );
}

export default ReturnOfTheJedi;