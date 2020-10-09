import React from 'react';
import PropTypes from 'prop-types';

import { Card as RNPCard } from 'react-native-paper';

import TouchableOpacity from '../touchableOpacity';

import styles from './cardStyles';

const Card = ({
    style,
    accessible,
    elevation,
    onPress,
    children,
    ...props
}) => {
    return (
        <RNPCard
            {...props}
            style={[styles.card, style]}
            accessible={accessible}
            elevation={elevation}
            onPress={onPress}
        >
            {children}
        </RNPCard>
    );
};

Card.propTypes = {
    accessible: PropTypes.bool,
    elevation: PropTypes.number,
    onPress: PropTypes.func,
    children: PropTypes.node,
};

Card.defaultProps = {
    accessible: true,
    elevation: 4,
};

export default Card;
