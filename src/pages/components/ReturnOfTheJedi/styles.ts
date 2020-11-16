import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  banner: {
    width: Dimensions.get("window").width,
    height: "100%",
    resizeMode: "stretch",
  },

  header: {
    backgroundColor: "#32264d",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 100,
  },

  arrow: {
    color: "#4ee1e6",
    fontSize: 40,
    marginTop: 20,
  },

  title: {
    fontSize: 35,
    fontFamily: "RopaSans_400Regular",
    color: "#4ee1e6",
    marginRight: 25,
    marginTop: 20,
  },

  boxSynopsis: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#32264d",

    flexDirection: "row",
  },

  synopsis: {
    width: 195,
    marginLeft: 15,
    marginTop: 10,

    fontFamily: "Nunito_400Regular",
    color: "#FFF",
    fontSize: 16,
  },

  bannerFilm: {
    width: 167,
    height: 220,
    resizeMode: "contain",
  },

  MainCharacters: {
    fontSize: 22,
    fontFamily: "RopaSans_400Regular",
    fontWeight: "bold",
    color: "#4ee1e6",
    marginLeft: 15,
    marginTop: 0,
  },

  planets: {
    fontSize: 22,
    fontFamily: "RopaSans_400Regular",
    fontWeight: "bold",
    color: "#4ee1e6",
    marginLeft: 145,
  },

  starships: {
    fontSize: 22,
    fontFamily: "RopaSans_400Regular",
    fontWeight: "bold",
    color: "#4ee1e6",
    marginLeft: 110,
  },

  vehicles: {
    fontSize: 22,
    fontFamily: "RopaSans_400Regular",
    fontWeight: "bold",
    color: "#4ee1e6",
    marginLeft: 145,
  },
});

export default styles;
