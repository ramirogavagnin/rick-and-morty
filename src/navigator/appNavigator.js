import React, {useEffect, useState} from 'react';
import {func, object} from 'prop-types';
import SplashScreen from 'react-native-splash-screen';

import {defaultLanguage} from '../../app.json';

import {connect} from 'react-redux';
import {setTranslationsAction} from '@actions/languagesActions';

import AuthStack from './authStack';
import PrivateStack from './privateStack';
import AuthLoadingScreen from '@containers/authLoading';

import localTranslations from '@themes/translations';

const AppNavigator = ({user, setTranslationsAction}) => {
  const [firstRender, setFirstRender] = useState(false);

  useEffect(() => {
    localTranslations.defaultLocale = defaultLanguage;
    localTranslations.locale = defaultLanguage;
    setTranslationsAction(localTranslations);
    setFirstRender(true);
    SplashScreen.hide();
  }, []);

  if (!firstRender) return <AuthLoadingScreen />;

  return <>{user?.token ? <PrivateStack /> : <AuthStack />}</>;
};

AppNavigator.propTypes = {
  user: object,
  setTranslationsAction: func,
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispathToProps = {setTranslationsAction};

export default connect(mapStateToProps, mapDispathToProps)(AppNavigator);
