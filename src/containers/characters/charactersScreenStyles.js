import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Colors from '../../themes/colors';
import Sizes from '../../themes/sizes';

const { darkBackground } = Colors;
const { paddingTop, footer } = Sizes.layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: darkBackground,
    },
    listContentContainer: {
        paddingVertical: paddingTop,
        alignItems: 'center',
    },
    footer: {
        marginVertical: footer,
    },
});

export default styles;
