import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import SeasonGuide from "../pages/Seasons/SeasonGuide";
import HomePage from "../pages/Home/HomePage";

const { Navigator, Screen } = createBottomTabNavigator();

function TabsRoutes() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 63,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",

          backgroundColor: '#15072b',

          marginTop: -1,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: 'Nunito_700Bold',
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#32264d",
        activeTintColor: "#4ee1e6",
      }}
    >
      <Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Entypo
                name="home"
                size={size}
                color={focused ? "#4ee1e6" : color}
              />
            );
          },
        }}
      />
      <Screen
        name="SeasonGuide"
        component={SeasonGuide}
        options={{
          tabBarLabel: "Guia de temporada",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <FontAwesome
                name="navicon"
                size={size}
                color={focused ? "#4ee1e6" : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default TabsRoutes;
