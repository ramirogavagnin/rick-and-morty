import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Colors from '@themes/colors';

const styles = StyleSheet.create({
  divider: {
    backgroundColor: Colors.divider,
    height: wp(0.3),
  },
});

export default styles;
