import React from 'react';
import {View} from 'react-native';

import ActivityIndicator from '@components/activityIndicator';

import styles from './authLoadingScreenStyles';

const AuthLoadingScreen = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default AuthLoadingScreen;
