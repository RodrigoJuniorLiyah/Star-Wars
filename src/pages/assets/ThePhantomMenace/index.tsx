import React from 'react';

import { ImageBackground, Text, View } from 'react-native';

import starWarsBackground from "../../../assets/images/starWarsBackground.png";

import styles from "./styles";

function ThePhantomMenace() {
  return (
    <View>
      <ImageBackground source={starWarsBackground} style={styles.banner}>
        <Text>ThePhantomMenace</Text>

      </ImageBackground>
    </View>
  );
}

export default ThePhantomMenace;