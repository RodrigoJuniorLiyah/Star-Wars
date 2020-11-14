import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  banner: {
    width: Dimensions.get('window').width,
    height: '100%',
    resizeMode: 'stretch',
  },

  arrow: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'white',
    fontSize: 50
  }
})

export default styles;