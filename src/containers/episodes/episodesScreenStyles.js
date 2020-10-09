import { StyleSheet } from 'react-native';

import Colors from '../../themes/colors';
import Sizes from '../../themes/sizes';
import FontConfig from '../../themes/fontConfig';

const { darkBackground } = Colors;
const { twentyfour } = Sizes.fontSizes;
const { medium } = FontConfig.default;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: darkBackground,
    },
    text: {
        ...medium,
        fontSize: twentyfour,
    },
});

export default styles;
