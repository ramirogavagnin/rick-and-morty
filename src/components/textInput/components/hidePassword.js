import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TouchableOpacity from '../../touchableOpacity';

import Colors from '../../../themes/colors';
import Sizes from '../../../themes/sizes';

const { darkGrey } = Colors;
const { passwordIcon } = Sizes.input;

import styles from '../textInputStyles';

const HidePassword = ({ hidePassword, setHidePassword }) => {
    return (
        <TouchableOpacity
            style={styles.hidePasswordIconContainer}
            onPress={setHidePassword}
        >
            {hidePassword ? (
                <Icon
                    name="eye-off-outline"
                    size={passwordIcon}
                    color={darkGrey}
                />
            ) : (
                <Icon name="eye-outline" size={passwordIcon} color={darkGrey} />
            )}
        </TouchableOpacity>
    );
};

HidePassword.propTypes = {
    hidePassword: PropTypes.bool,
    setHidePassword: PropTypes.func,
};

HidePassword.defaultProps = {
    hidePassword: false,
};

export default HidePassword;
