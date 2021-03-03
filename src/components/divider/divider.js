import React from 'react';
import {Divider as RNPDivider} from 'react-native-paper';

import styles from './dividerStyles';

const Divider = ({style, ...props}) => {
  return <RNPDivider style={[styles.divider, style]} />;
};

export default Divider;
