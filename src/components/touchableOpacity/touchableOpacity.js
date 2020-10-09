import React from 'react';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const TouchableOpacity = ({
    style,
    onPress,
    activeOpacity,
    children,
    ...props
}) => (
    <RNTouchableOpacity
        style={style}
        onPress={onPress}
        activeOpacity={activeOpacity}
        {...props}
    >
        <>{children}</>
    </RNTouchableOpacity>
);

TouchableOpacity.propTypes = {
    onPress: PropTypes.func,
    activeOpacity: PropTypes.number,
    children: PropTypes.node,
};

TouchableOpacity.defaultProps = {
    activeOpacity: 0.5,
};

export default TouchableOpacity;
