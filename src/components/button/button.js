import React from 'react';
import {Button as RNPButton} from 'react-native-paper';
import {ColorPropType} from 'react-native';
import PropTypes from 'prop-types';

import Text from '@components/text';

import Colors from '@themes/colors';
import Sizes from '@themes/sizes';
import styles from './buttonStyles';

const defaultTheme = {
  roundness: Sizes.button.height,
};

const Button = ({
  mode,
  onPress,
  color,
  theme,
  buttonStyle,
  contentStyle,
  labelStyle,
  disabled,
  children,
  ...props
}) => {
  return (
    <RNPButton
      mode={mode}
      onPress={onPress}
      color={color}
      theme={theme}
      style={[styles.button, buttonStyle]}
      contentStyle={[styles.content, contentStyle]}
      disabled={disabled}
      {...props}>
      <Text style={[styles.label, labelStyle]}>{children}</Text>
    </RNPButton>
  );
};

Button.propTypes = {
  mode: PropTypes.string,
  onPress: PropTypes.func,
  color: ColorPropType,
  theme: PropTypes.object,
  buttonStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  disabled: PropTypes.bool,
  children: PropTypes.string,
};

Button.defaultProps = {
  mode: 'contained',
  color: Colors.primary,
  theme: defaultTheme,
};

export default Button;
