import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Sizes from '../../themes/sizes';
import Colors from '../../themes/colors';

const { paddingH } = Sizes.layout;
const { darkBackground, darkGrey90 } = Colors;

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
        height: wp(80),
        marginTop: hp(5),
        paddingTop: hp(5),
        paddingHorizontal: paddingH,
        backgroundColor: darkGrey90,
        borderRadius: wp(5),
    },
    passwordInput: {
        marginTop: hp(2),
    },
    logInButton: {
        position: 'absolute',
        bottom: hp(3),
        left: wp(5),
    },
});

export default styles;
