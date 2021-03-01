import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, ColorPropType} from 'react-native';
import {TextInput as RNPTextInput} from 'react-native-paper';

import DisplayError from '@components/displayError';
import HidePassword from './components/hidePassword';

import Colors from '@themes/colors';

import styles from './textInputStyles';

const {darkGrey} = Colors;

const defaultTheme = {
  colors: {primary: darkGrey, text: darkGrey, placeholder: darkGrey},
};

const TextInput = ({
  type,
  value,
  onChageText,
  onBlur,
  label,
  autoCapitalize,
  secureTextEntry,
  keyboardType,
  containerStyle,
  textInputContainerStyle,
  textInputStyle,
  theme,
  underlineColor,
  underlineColorAndroid,
  allowFontScaling,
  error,
  errorContainerStyle,
  errorLabelStyle,
  errorIcon,
  notDisplayError,
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);
  const showError = !!error && !notDisplayError;
  return (
    <View style={containerStyle}>
      <View style={[styles.textInputContainer, textInputContainerStyle]}>
        {secureTextEntry && (
          <HidePassword
            hidePassword={hidePassword}
            setHidePassword={() => setHidePassword(!hidePassword)}
          />
        )}
        <RNPTextInput
          value={value}
          onChangeText={onChageText}
          onBlur={onBlur}
          label={label}
          autoCapitalize={autoCapitalize}
          secureTextEntry={hidePassword}
          keyboardType={keyboardType}
          style={[
            styles.textInput,
            textInputStyle,
            secureTextEntry && styles.passwordInputPadding,
          ]}
          theme={theme}
          underlineColor={underlineColor}
          underlineColorAndroid={underlineColorAndroid}
          allowFontScaling={allowFontScaling}
          error={!!error}
          {...props}
        />
      </View>
      {showError && (
        <DisplayError
          error={error}
          errorContainerStyle={errorContainerStyle}
          errorLabelStyle={errorLabelStyle}
          errorIcon={errorIcon}
        />
      )}
    </View>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  onChageText: PropTypes.func,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  autoCapitalize: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  textInputContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  textInputStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  theme: PropTypes.object,
  underlineColor: ColorPropType,
  underlineColorAndroid: ColorPropType,
  allowFontScaling: PropTypes.bool,
  error: PropTypes.string,
  errorContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  errorLabelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  errorIcon: PropTypes.node,
  notDisplayError: PropTypes.bool,
};

TextInput.defaultProps = {
  error: '',
  underlineColor: 'transparent',
  underlineColorAndroid: 'transparent',
  notDisplayError: false,
  theme: defaultTheme,
  allowFontScaling: false,
};

export default TextInput;
