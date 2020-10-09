import React from 'react';
import {
    ActivityIndicator as RNActivityIndicator,
    ColorPropType,
} from 'react-native';
import PropTypes from 'prop-types';

import Colors from '../../themes/colors';

import styles from './activityIndicatorStyles';

const ActivityIndicator = ({ style, size, color }) => (
    <RNActivityIndicator
        style={[styles.activityIndicator, style]}
        size={size}
        color={color}
    />
);

ActivityIndicator.propTypes = {
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    size: PropTypes.oneOf(['large', 'small']),
    color: ColorPropType,
};

ActivityIndicator.defaultProps = {
    size: 'large',
    color: Colors.white,
};
export default ActivityIndicator;
