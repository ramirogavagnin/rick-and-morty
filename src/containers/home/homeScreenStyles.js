import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {RFPercentage as RFP} from 'react-native-responsive-fontsize';

import Colors from '@themes/colors';
import Sizes from '@themes/sizes';

const {darkBackground} = Colors;
const {paddingTop} = Sizes.layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: darkBackground,
  },
  header: {
    textAlign: 'center',
    fontSize: RFP(3),
    paddingHorizontal: wp(3),
  },
  contentContainerStyle: {
    paddingVertical: paddingTop,
  },
});

export default styles;
