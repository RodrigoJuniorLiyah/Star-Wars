import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import api from "./api";

interface StarWars {
  title: string[];
  episode_id: number;
  producer: string;
  release_date: string;
  director: string;
  characters: string[];
}

function teste() {
  const [starWars, setStarWars] = useState<StarWars[]>([]);

  useEffect(() => {
    api.get("/").then((response) => {
      setStarWars(response.data.results);
    });
  }, []);

  console.log(starWars);

  return (
    <View>
      {starWars.map((element, index) => {
        return <Text style={{color: "#FFF"}} key={index}>{element.title}</Text>;
      })}
    </View>
  );
}

export default teste;
