import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Colors from '@themes/colors';
const {red, green} = Colors;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    zIndex: 200,
    width: wp(100),
  },
  defaultSnackBar: {
    paddingVertical: wp(3),
    backgroundColor: red,
  },
  snackbarSuccess: {
    backgroundColor: green,
  },
});

export default styles;
