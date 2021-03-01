import {Platform} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Colors from '@themes/colors';
import Sizes from '@themes/sizes';
import FontConfig from '@themes/fontConfig';

const {primary, white, middleGrey, grey} = Colors;

const {paddingH} = Sizes.layout;
const {twentyTwo, ten} = Sizes.fontSizes;

const {medium} = FontConfig.default;

export const LoginScreenOptions = {
  headerTitle: false,
  headerShown: false,
};

export const RootStackConfig = {headerShown: false};

export const DrawerStyle = {width: '85%'};

export const DefaultScreensConfig = {
  safeAreaInsets: (Platform.OS === 'android' && {top: 0}) || null,
  headerStyle: {
    backgroundColor: primary,
  },
  headerTitleAlign: 'center',
  headerTintColor: white,
  headerTitleStyle: {
    fontFamily: medium.fontFamily,
    fontSize: twentyTwo,
    paddingHorizontal: paddingH,
  },
  headerBackTitleVisible: false,
  headerLeftContainerStyle: {
    paddingLeft: Platform.OS === 'ios' ? wp(1) : 0,
  },
};

export const AuthStackScreensConfig = {
  ...DefaultScreensConfig,
  headerTransparent: true,
  headerTitle: false,
  headerTintColor: primary,
};

export const TabBarConfig = {
  activeTintColor: primary,
  inactiveTintColor: grey,
  labelStyle: {fontSize: ten},
  allowFontScaling: false,
  showLabel: false,
  style: {
    backgroundColor: middleGrey,
    borderTopColor: middleGrey,
  },
};

export const RootScreensConfig = {
  ...DefaultScreensConfig,
  headerShown: true,
};
