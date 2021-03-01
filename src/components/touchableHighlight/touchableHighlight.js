import React from 'react';
import {TouchableHighlight as RNTouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

import Colors from '@themes/colors';

const TouchableHighlight = ({
  style,
  onPress,
  activeOpacity,
  underlayColor,
  children,
  ...props
}) => (
  <RNTouchableHighlight
    style={style}
    onPress={onPress}
    activeOpacity={activeOpacity}
    underlayColor={underlayColor}
    {...props}>
    <>{children}</>
  </RNTouchableHighlight>
);

TouchableHighlight.propTypes = {
  onPress: PropTypes.func,
  activeOpacity: PropTypes.number,
  underlayColor: PropTypes.string,
  children: PropTypes.node,
};

TouchableHighlight.defaultProps = {
  activeOpacity: 0.5,
  underlayColor: Colors.highlightOverlay,
};

export default TouchableHighlight;
