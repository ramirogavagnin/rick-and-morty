import React from 'react';
import PropTypes from 'prop-types';

import Text from '@components/text';
import TouchableHighlight from '@components/touchableHighlight';
import styles from '../drawerMenuStyles';

const TouchableItem = ({
  onPress,
  name,
  style,
  imageStyle,
  textStyle,
  text,
  ...props
}) => {
  return (
    <TouchableHighlight
      style={[styles.touchableItem, style]}
      onPress={onPress}
      {...props}>
      <Text style={[styles.touchableText, textStyle]}>{text}</Text>
    </TouchableHighlight>
  );
};

TouchableItem.propTypes = {
  onPress: PropTypes.func,
  name: PropTypes.string,
  text: PropTypes.string,
};

export default TouchableItem;
