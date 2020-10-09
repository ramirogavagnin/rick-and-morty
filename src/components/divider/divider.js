import React from 'react';
import PropTypes from 'prop-types';
import { Divider as RNPDivider } from 'react-native-paper';

import styles from './dividerStyles';

const Divider = ({ style, ...props }) => {
    return <RNPDivider style={[styles.divider, style]} />;
};

export default Divider;
