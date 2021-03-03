import {StyleSheet, Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  menuContainer: {
    paddingLeft: wp(4),
    paddingTop: Platform.OS === 'ios' ? wp(1) : wp(2),
  },
  image: {
    width: wp(45),
    height: hp(10),
    top: Platform.OS === 'ios' ? -wp(1.2) : wp(0.8),
  },
});

export default styles;
