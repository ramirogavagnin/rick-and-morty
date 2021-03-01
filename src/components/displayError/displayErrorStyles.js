import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Colors from '@themes/colors';
import Sizes from '@themes/sizes';

const {red} = Colors;
const {inputPaddingH} = Sizes.input;

const styles = StyleSheet.create({
  errorContainer: {
    width: '90%',
    marginTop: wp(1),
    paddingHorizontal: inputPaddingH,
  },
  labelError: {
    color: red,
  },
});

export default styles;
