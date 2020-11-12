import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

  banner: {
    width: Dimensions.get('window').width,
    height: '100%',
    resizeMode: 'stretch',
  },
})

export default styles;