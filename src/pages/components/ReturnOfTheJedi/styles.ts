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
    /* top: 30,
    left: 10, */
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
});

export default styles;
