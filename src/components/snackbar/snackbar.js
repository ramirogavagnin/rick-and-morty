import React from 'react';
import {View} from 'react-native';
import {Snackbar as RNPSnackbar} from 'react-native-paper';
import PropTypes from 'prop-types';

import Duration from '@themes/duration';

import styles from './snackbarStyles';

const Snackbar = ({
  message,
  visible,
  onDismiss,
  duration,
  success,
  snackbarStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <RNPSnackbar
        style={[
          styles.defaultSnackBar,
          success && styles.snackbarSuccess,
          snackbarStyle,
        ]}
        visible={visible}
        duration={duration}
        onDismiss={onDismiss}>
        {message}
      </RNPSnackbar>
    </View>
  );
};

Snackbar.propTypes = {
  message: PropTypes.string,
  visible: PropTypes.bool,
  onDismiss: PropTypes.func,
  duration: PropTypes.number,
  success: PropTypes.bool,
  snackbarStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Snackbar.defaultProps = {
  duration: Duration.snackbar,
  success: false,
};

export default Snackbar;
