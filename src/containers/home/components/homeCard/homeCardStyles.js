import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Colors from '../../../../themes/colors';
import Sizes from '../../../../themes/sizes';
import FontConfig from '../../../../themes/fontConfig';

const { primary90, white } = Colors;

const { twentyseven } = Sizes.fontSizes;
const { borderRadius } = Sizes.card;

const { medium } = FontConfig.default;

const styles = StyleSheet.create({
    card: {
        marginTop: wp(3),
    },
    imageBackground: {
        flex: 1,
        overflow: 'hidden',
        borderRadius,
        justifyContent: 'flex-end',
    },
    title: {
        ...medium,
        color: white,
        backgroundColor: primary90,
        fontSize: twentyseven,
        paddingHorizontal: wp(4),
        paddingBottom: hp(0.5),
        textAlign: 'center',
    },
});

export default styles;
