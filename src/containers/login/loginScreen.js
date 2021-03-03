import React, {useState, useEffect} from 'react';
import {func, object, bool, string} from 'prop-types';
import {ImageBackground, View} from 'react-native';

import {connect} from 'react-redux';
import {loginAction} from '@actions/authActions';

import Spinner from '@components/spinner';
import Snackbar from '@components/snackbar';
import KeyboardAvoidingView from '@components/keyboardAvoidingView';
import LoginForm from './components/loginForm';

import Images from '@themes/images';
import translationsEnums from '@themes/translations/translationsEnums';
import translationsKeys from '@themes/translations/translationsKeys';
import {renderTranslations} from '@utils/translationsUtils';

import styles from './loginScreenStyles';

const LoginScreen = ({
  translations,
  requesting,
  failure,
  message,
  loginAction,
}) => {
  const [errorMessage, setErrorMessage] = useState('');
  const onDismissError = () => setErrorMessage('');

  useEffect(() => {
    if (failure && message) setErrorMessage(message);
  }, [failure, message]);

  const handleOnSubmit = (form) => loginAction(form);

  const errorTranslations = renderTranslations(
    translations,
    translationsEnums.error,
    translationsKeys.error
  );

  return (
    <View style={styles.container}>
      <Spinner visible={requesting} />
      <Snackbar
        message={errorTranslations[errorMessage]}
        visible={!!errorMessage}
        onDismiss={onDismissError}
      />
      <ImageBackground
        source={Images?.loginBackground}
        style={styles.container}
        resizeMode="cover">
        <KeyboardAvoidingView>
          <LoginForm
            handleOnSubmit={handleOnSubmit}
            translations={translations}
          />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

LoginScreen.propTypes = {
  translations: object,
  requesting: bool,
  failure: bool,
  message: string,
  loginAction: func,
};

LoginScreen.defaultProps = {
  translations: {},
};

const mapStateToProps = (state) => {
  return {
    translations: state.languages.translations,
    requesting: state.auth.loginRequesting,
    failure: state.auth.loginFailure,
    message: state.auth.loginMessage,
  };
};

const mapDispatchToProps = {
  loginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
