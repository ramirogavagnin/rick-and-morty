import React, {useEffect} from 'react';
import {object, func, bool} from 'prop-types';
import {View} from 'react-native';
import {capitalize} from 'lodash';

import {connect} from 'react-redux';
import {logoutAction, getUserAction} from '@actions/authActions';

import Avatar from '@components/avatar';
import Text from '@components/text';
import Button from '@components/button';
import ActiviyIndicator from '@components/activityIndicator';

import translationsEnums from '@themes/translations/translationsEnums';
import translationsKeys from '@themes/translations/translationsKeys';
import {renderTranslations} from '@utils/translationsUtils';

import styles from './profileScreenStyles';

const ProfileScreen = ({
  navigation,
  translations,
  user: {avatar, name, surname, age, role},
  requesting,
  logoutAction,
  getUserAction,
}) => {
  useEffect(() => {
    navigation.setOptions({title: profile});
    getUserAction();
  }, []);

  const {
    profile,
    age: ageTranslation,
    role: roleTranslation,
    logout,
  } = renderTranslations(
    translations,
    translationsEnums.generic,
    translationsKeys.generic
  );
  const onPressLogout = () => logoutAction();

  return (
    <View style={styles.container}>
      {requesting && <ActiviyIndicator />}
      <Avatar source={{uri: avatar}} style={styles.avatar} />
      <Text style={styles.boldText}>
        {name} {surname}
      </Text>
      <Text style={styles.text}>
        {ageTranslation}: {age}
      </Text>
      <Text style={styles.text}>
        {roleTranslation}: {capitalize(role)}
      </Text>
      <Button buttonStyle={styles.button} onPress={onPressLogout}>
        {logout}
      </Button>
    </View>
  );
};

ProfileScreen.propTypes = {
  navigation: object,
  translations: object,
  user: object,
  logoutAction: func,
  getUserAction: func,
  requesting: bool,
};

ProfileScreen.defaultProps = {
  navigation: {},
  translations: {},
};

const mapStateToProps = (state) => {
  return {
    translations: state.languages.translations,
    user: state.auth.user,
    requesting: state.auth.getUserRequesting,
  };
};
const mapDispatchToProps = {
  logoutAction,
  getUserAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
