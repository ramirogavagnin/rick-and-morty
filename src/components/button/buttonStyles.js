import { StyleSheet } from 'react-native';
import { RFPercentage as RFP } from 'react-native-responsive-fontsize';

import Colors from '../../themes/colors';
import Sizes from '../../themes/sizes';

const { white, primary } = Colors;

const { eighteen } = Sizes.fontSizes;
const { width, height } = Sizes.button;

const styles = StyleSheet.create({
    button: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        width: width,
        height: height,
    },
    label: {
        fontSize: eighteen,
        color: white,
    },
});

export default styles;
