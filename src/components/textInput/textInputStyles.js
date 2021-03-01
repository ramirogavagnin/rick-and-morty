import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Colors from '@themes/colors';
import Sizes from '@themes/sizes';

const {white} = Colors;
const {eighteen} = Sizes.fontSizes;
const {
  inputRadius,
  inputContainerHeight,
  inputHeight,
  inputPaddingH,
} = Sizes.input;

const styles = StyleSheet.create({
  textInputContainer: {
    borderRadius: inputRadius,
    height: inputContainerHeight,
    overflow: 'hidden',
  },
  textInput: {
    height: inputHeight,
    paddingHorizontal: inputPaddingH,
    fontSize: eighteen,
    overflow: 'hidden',
    backgroundColor: white,
  },
  passwordInputPadding: {
    paddingRight: wp(8.5),
  },
  hidePasswordIconContainer: {
    position: 'absolute',
    right: wp(3),
    bottom: wp(2.3),
    padding: wp(1),
    zIndex: 100,
  },
});

export default styles;
