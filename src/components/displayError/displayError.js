import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Text from '../text';

import styles from './displayErrorStyles';

const DisplayError = ({
    error,
    errorLabelStyle,
    errorContainerStyle,
    errorIcon,
}) => {
    return (
        <View style={[styles.errorContainer, errorContainerStyle]}>
            <Text style={[styles.labelError, errorLabelStyle]}>{error}</Text>
            {!!errorIcon && errorIcon}
        </View>
    );
};

DisplayError.propTypes = {
    error: PropTypes.string,
    errorContainerStyle: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]),
    errorLabelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    errorIcon: PropTypes.node,
};

export default DisplayError;
