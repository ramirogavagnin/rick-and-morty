import React from 'react';
import PropTypes from 'prop-types';
import {ImageBackground} from 'react-native';

import Card from '@components/card';
import Text from '@components/text';

import Images from '@themes/images';

import styles from './homeCardStyles';

const {noImage} = Images;

const HomeCard = ({style, onPress, name, translations, ...props}) => {
  return (
    <Card style={[styles.card, style]} onPress={onPress} {...props}>
      <ImageBackground
        style={styles.imageBackground || noImage}
        source={Images[name] || noImage}
        resizeMode="cover">
        <Text style={styles.title} numberOfLines={1}>
          {translations[name] || '-'}
        </Text>
      </ImageBackground>
    </Card>
  );
};

HomeCard.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
  name: PropTypes.string,
  translations: PropTypes.object,
};

HomeCard.defaultProps = {
  translations: {},
};

export default HomeCard;
