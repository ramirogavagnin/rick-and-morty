import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Colors from '@themes/colors';
import Sizes from '@themes/sizes';
import FontConfig from '@themes/fontConfig';

const {darkBackground} = Colors;
const {twenty, twentyfour} = Sizes.fontSizes;
const {paddingH} = Sizes.layout;
const {medium, regular} = FontConfig.default;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: darkBackground,
    paddingTop: wp(10),
    paddingHorizontal: paddingH,
  },
  boldText: {
    ...medium,
    fontSize: twentyfour,
    marginTop: wp(3),
  },
  text: {
    ...regular,
    fontSize: twenty,
    marginTop: wp(3),
  },
  avatar: {
    marginBottom: wp(5),
  },
  button: {
    position: 'absolute',
    bottom: wp(10),
  },
});

export default styles;
