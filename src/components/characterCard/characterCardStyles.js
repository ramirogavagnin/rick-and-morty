import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Colors from '@themes/colors';
import Sizes from '@themes/sizes';
import FontConfig from '@themes/fontConfig';

const {grey} = Colors;

const {twenty, sixteen, fourteen, thirteen} = Sizes.fontSizes;
const {borderRadius} = Sizes.card;

const {medium} = FontConfig.default;

const styles = StyleSheet.create({
  card: {
    height: wp(38),
    width: wp(95),
    marginTop: wp(3),
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    overflow: 'hidden',
    borderTopLeftRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
  },
  rightContainer: {
    flex: 1.8,
    paddingHorizontal: wp(2),
    paddingVertical: wp(2),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  name: {
    ...medium,
    fontSize: twenty,
  },
  statusContainer: {
    marginTop: wp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    fontSize: fourteen,
    marginLeft: wp(1.2),
  },
  lastLocation: {
    marginTop: wp(2.5),
    fontSize: thirteen,
    color: grey,
  },
  location: {
    fontSize: sixteen,
  },
});

export default styles;
