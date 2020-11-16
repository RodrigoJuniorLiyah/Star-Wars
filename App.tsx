import React from "react";
import { AppLoading } from "expo";

import { RopaSans_400Regular, useFonts } from "@expo-google-fonts/ropa-sans";
import { Nunito_700Bold, Nunito_400Regular } from "@expo-google-fonts/nunito";

import Routes from "./src/routes/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    RopaSans_400Regular,
    Nunito_700Bold,
    Nunito_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return <Routes />;
  }
}
