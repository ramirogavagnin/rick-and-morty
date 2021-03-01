import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage as RFP} from 'react-native-responsive-fontsize';

export default {
  // FontSizes
  fontSizes: {
    ten: RFP(1.5),
    thirteen: RFP(1.9),
    fourteen: RFP(2.15),
    sixteen: RFP(2.5),
    eighteen: RFP(2.7),
    twenty: RFP(2.9),
    twentyTwo: RFP(3.2),
    twentyfour: RFP(3.6),
    twentyseven: RFP(3.9),
  },
  // Layout
  layout: {
    paddingTop: hp(2),
    paddingH: wp(5),
    width: wp(100),
    height: hp(100),
    footer: wp(12),
  },
  // Components
  input: {
    inputRadius: 15,
    inputContainerHeight: wp(15),
    inputHeight: wp(16),
    inputPaddingH: wp(4),
    passwordIcon: wp(7.5),
  },
  button: {
    width: wp(90),
    height: wp(14),
  },
  card: {
    height: wp(50),
    width: wp(85),
    borderRadius: wp(2.7),
  },
  // Icons
  menu: wp(9),
  divider: wp(0.4),
  dot: wp(3.2),
  // Navigation
  headerHeight: hp(9),
  tabBarIcon: wp(7.5),
};
