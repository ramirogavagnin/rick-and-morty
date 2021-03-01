import React from 'react';
import {Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './headerStyles';

const HeaderImage = ({image, style}) => (
  <Image source={image} style={[styles.image, style]} resizeMode="contain" />
);

HeaderImage.propTypes = {
  style: PropTypes.object,
};

export default HeaderImage;
