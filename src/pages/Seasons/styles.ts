import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  banner: {
    width: Dimensions.get('window').width,
    height: '100%',
    resizeMode: 'stretch',
  },

  title: {
    fontSize: 40,
    fontFamily: 'RopaSans_400Regular',
    color: '#4ee1e6',
    top: 40,
    left: 30,
  },

  grid: {
    flex: 1,
    marginTop: 50,
  },

  scrollingList: {

  },

  contain: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 20,
  },

  bannerFilm: {
    height: 300,
    width: 150,
    resizeMode: 'contain',
    marginBottom: 20,

    justifyContent: 'flex-end',
  },

  textImage: {
    top: 0,
    left: 0,


    fontFamily: 'RopaSans_400Regular',
    fontSize: 16,
    color: '#4ee1e6',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    lineHeight: 21,
  },

  arrow: {
    color: '#FFF',
    fontSize: 32,
    position: 'absolute',
    right: 10,
  }
})

export default styles;