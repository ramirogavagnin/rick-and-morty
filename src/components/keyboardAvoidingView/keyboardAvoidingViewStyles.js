import { StyleSheet } from 'react-native';

import Sizes from '../../themes/sizes';
const { paddingH } = Sizes.layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainerStyle: {
        paddingHorizontal: paddingH,
    },
});

export default styles;
