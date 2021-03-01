import React from 'react';
import PropTypes from 'prop-types';
import {Image as RNImage} from 'react-native';

import Images from '@themes/images';

import styles from './imageStyles';

const {noImage} = Images;

const Image = ({source, resizeMode, style, ...props}) => (
  <RNImage
    {...props}
    style={[styles.image, style]}
    source={source || noImage}
    resizeMode={resizeMode}
  />
);

Image.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  source: PropTypes.oneOfType([
    PropTypes.shape({
      uri: PropTypes.string,
      headers: PropTypes.objectOf(PropTypes.string),
    }),
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.shape({
        uri: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        headers: PropTypes.objectOf(PropTypes.string),
      })
    ),
  ]),
};

Image.defaultProps = {
  resizeMode: 'contain',
};

export default Image;
