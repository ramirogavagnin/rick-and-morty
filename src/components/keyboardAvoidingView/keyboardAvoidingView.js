import React from 'react';
import {
  KeyboardAvoidingView as RNKeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';

const KeyboardAvoidingView = ({
  children,
  style,
  contentStyle,
  contentContainerStyle,
  behavior,
  bounces,
  ...props
}) => {
  return (
    <RNKeyboardAvoidingView behavior={behavior} style={style}>
      <ScrollView
        {...props}
        style={contentStyle}
        contentContainerStyle={contentContainerStyle}
        bounces={bounces}>
        {children}
      </ScrollView>
    </RNKeyboardAvoidingView>
  );
};

KeyboardAvoidingView.propTypes = {
  children: PropTypes.node,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  behavior: PropTypes.string,
  bounces: PropTypes.bool,
};

KeyboardAvoidingView.defaultProps = {
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
  bounces: false,
};

export default KeyboardAvoidingView;
