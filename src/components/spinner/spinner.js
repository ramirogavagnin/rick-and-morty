import React from 'react';
import RNSpinner from 'react-native-loading-spinner-overlay';
import {ColorPropType} from 'react-native';

import PropTypes from 'prop-types';

import Colors from '@themes/colors';
const {primary, spinnerOverlay} = Colors;

const Spinner = ({visible, color, overlayColor, ...props}) => {
  return (
    <RNSpinner
      {...props}
      overlayColor={overlayColor}
      color={color}
      visible={visible}
    />
  );
};

Spinner.propTypes = {
  overlayColor: ColorPropType,
  color: ColorPropType,
  visible: PropTypes.bool,
};

Spinner.defaultProps = {
  color: primary,
  overlayColor: spinnerOverlay,
  visible: false,
};

export default Spinner;
