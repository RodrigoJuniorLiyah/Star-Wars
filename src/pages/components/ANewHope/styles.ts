import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  banner: {
    width: Dimensions.get("window").width,
    height: "100%",
    resizeMode: "stretch",
  },

  header: {
    height: 100,
    borderBottomColor: "#15072b",
    borderBottomWidth: StyleSheet.hairlineWidth,

    backgroundColor: "#32264d",

    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
    marginRight: 65,
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
    marginTop: 15,

    fontFamily: "Nunito_400Regular",
    color: '#FFF',
    fontSize: 16,
  },

  bannerFilm: {
    width: 155,
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
  }
});

export default styles;
