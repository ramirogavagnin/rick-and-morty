import React from 'react';
import PropTypes from 'prop-types';
import {Text as RNPText} from 'react-native-paper';

import styles from './textStyles';

const Text = ({numberOfLines, style, children, ...props}) => {
  return (
    <RNPText
      style={[styles.text, style]}
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      {...props}>
      {children}
    </RNPText>
  );
};

Text.propTypes = {
  numberOfLines: PropTypes.number,
  children: PropTypes.string,
};

export default Text;
