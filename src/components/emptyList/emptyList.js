import React from 'react';
import PropTypes from 'prop-types';

import Text from '../text';

import styles from './emptyListStyles';

const EmptyList = ({ text, style, ...props }) => {
    return (
        <Text {...props} style={[styles.text, style]}>
            {text}
        </Text>
    );
};

EmptyList.propTypes = {
    numberOfLines: PropTypes.number,
    text: PropTypes.string,
};

export default EmptyList;
