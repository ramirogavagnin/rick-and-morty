import { DefaultTheme, configureFonts } from 'react-native-paper';

import Colors from './colors';
import Sizes from './sizes';
import FontConfig from './fontConfig';

const { primary, black, white, red } = Colors;
const { inputRadius } = Sizes.input;

const theme = {
    ...DefaultTheme,
    roundness: inputRadius,
    colors: {
        ...DefaultTheme.colors,
        primary,
        text: black,
        placeholder: black,
        background: white,
        error: red,
    },
    fonts: configureFonts(FontConfig),
};

export default theme;
