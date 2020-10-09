import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Sizes from '../../themes/sizes';
import Colors from '../../themes/colors';

const { paddingH } = Sizes.layout;
const { darkBackground } = Colors;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkBackground,
    },
    contentContainer: {
        paddingHorizontal: paddingH,
    },
    logo: {
        height: wp(40),
        alignSelf: 'center',
    },
    loginForm: {
        marginTop: hp(12),
    },
    passwordInput: {
        marginTop: hp(2),
    },
    logInButton: {
        marginTop: hp(14),
        alignSelf: 'center',
    },
});

export default styles;
