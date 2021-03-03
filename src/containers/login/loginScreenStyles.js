import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Sizes from '@themes/sizes';
import Colors from '@themes/colors';

const {paddingH} = Sizes.layout;
const {darkBackground, darkGrey90} = Colors;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkBackground,
  },
  logo: {
    height: wp(35),
    alignSelf: 'center',
  },
  loginForm: {
    height: hp(110),
    paddingTop: hp(5),
    paddingHorizontal: paddingH,
    backgroundColor: darkGrey90,
  },
  emailInput: {
    marginTop: hp(10),
  },
  passwordInput: {
    marginTop: hp(3),
  },
  logInButton: {
    marginTop: hp(10),
  },
});

export default styles;
