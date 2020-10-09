import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import TouchableOpacity from '../touchableOpacity';

import Colors from '../../themes/colors';
import Sizes from '../../themes/sizes';

import styles from './headerStyles';

const HeaderMenu = ({ toggleDrawer, customIcon, style }) => (
    <TouchableOpacity
        onPress={toggleDrawer}
        style={[styles.menuContainer, style]}
    >
        {(customIcon && customIcon) || (
            <Icon name="menu" size={Sizes.menu} color={Colors.white} />
        )}
    </TouchableOpacity>
);

HeaderMenu.propTypes = {
    toggleDrawer: PropTypes.func,
    customIcon: PropTypes.node,
    style: PropTypes.object,
};

export default HeaderMenu;
