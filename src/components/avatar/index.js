import React from 'react';
import {string, number} from 'prop-types';
import {Avatar as RNPAvatar} from 'react-native-paper';
import Sizes from '@themes/sizes';

const {avatar} = Sizes;

const Avatar = ({source, size, style, ...props}) => (
  <RNPAvatar.Image size={avatar} source={source} style={style} {...props} />
);

Avatar.proptypes = {
  source: string,
  size: number,
};

Avatar.defaultProps = {
  source: '',
  size: avatar,
};

export default Avatar;
