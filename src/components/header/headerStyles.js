import { StyleSheet, Platform } from 'react-native';
import { RFPercentage as RFP } from 'react-native-responsive-fontsize';

import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    menuContainer: {
        paddingLeft: wp(4),
        paddingTop: Platform.OS === 'ios' ? wp(1) : wp(2),
    },
    image: {
        width: wp(45),
        top: Platform.OS === 'ios' ? -wp(1.2) : wp(0.8),
    },
});

export default styles;
