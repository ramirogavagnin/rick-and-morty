import React, {useEffect, useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import SplashScreen from 'react-native-splash-screen';

import {defaultLanguage} from '../../app.json';

import {connect} from 'react-redux';
import {setTranslationsAction} from '@actions/languagesActions';

import AuthStack from './authStack';
import PrivateStack from './privateStack';

import AuthLoadingScreen from '@containers/authLoading';

import localTranslations from '@themes/translations';

const AppNavigator = ({isAuth, setTranslationsAction}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    localTranslations.defaultLocale = defaultLanguage;
    localTranslations.locale = defaultLanguage;
    setTranslationsAction(localTranslations);

    setTimeout(() => {
      setIsLoading(false);
      SplashScreen.hide();
    }, 200);
  }, []);

  if (isLoading) return <AuthLoadingScreen />;

  return <>{isAuth ? <PrivateStack /> : <AuthStack />}</>;
};

AppNavigator.propTypes = {
  translations: PropTypes.object,
  isAuth: PropTypes.bool,
  setTranslationsAction: PropTypes.func,
};

AppNavigator.defaultProps = {
  translations: {},
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    translations: state.languages.translations,
  };
};

const mapDispathToProps = {setTranslationsAction};

export default connect(mapStateToProps, mapDispathToProps)(AppNavigator);
