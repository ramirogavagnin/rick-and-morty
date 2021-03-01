import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '@themes/colors';
import Sizes from '@themes/sizes';
import FontConfig from '@themes/fontConfig';

const {white, primary, darkBackground} = Colors;
const {twentyTwo} = Sizes.fontSizes;
const {medium} = FontConfig.default;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkBackground,
  },
  header: {
    flex: 3,
    backgroundColor: primary,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 8,
    paddingTop: hp(5),
  },
  footerContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: wp(80),
    height: hp(20),
    backgroundColor: 'transparent',
  },
  touchableItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(3),
    paddingLeft: wp(2),
  },
  touchableText: {
    ...medium,
    paddingLeft: wp(5),
    fontSize: twentyTwo,
    color: white,
  },
  button: {
    width: wp(75),
  },
});

export default styles;
