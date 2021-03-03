import {StyleSheet} from 'react-native';

import Colors from '@themes/colors';
import Sizes from '@themes/sizes';

const {middleGrey} = Colors;
const {width, height, borderRadius} = Sizes.card;

const styles = StyleSheet.create({
  card: {
    height,
    width,
    borderRadius,
    backgroundColor: middleGrey,
  },
});

export default styles;
