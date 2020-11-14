import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "../pages/Home/HomePage";
import TabsRoutes from "./TabsRoutes";
import SeasonGuide from "../pages/Seasons/SeasonGuide";
import ANewHope from "../pages/assets/ANewHope";
import ReturnOfTheJedi from "../pages/assets/ReturnOfTheJedi";
import TheEmpireStrikesBack from "../pages/assets/TheEmpireStrikesBack";
import ThePhantomMenace from "../pages/assets/ThePhantomMenace";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="TabsRoutes" component={TabsRoutes} />
        <Screen name="SeasonGuide" component={SeasonGuide} />
        <Screen name="HomePage" component={HomePage} />
        <Screen name="ANewHope" component={ANewHope} />
        <Screen name="ReturnOfTheJedi" component={ReturnOfTheJedi} />
        <Screen name="TheEmpireStrikesBack" component={TheEmpireStrikesBack} />
        <Screen name="ThePhantomMenace" component={ThePhantomMenace} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;
