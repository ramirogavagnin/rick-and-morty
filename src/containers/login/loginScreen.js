import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, Image, ImageBackground, View} from 'react-native';

import {connect} from 'react-redux';
import {isAuthAction} from '@actions/authActions';

import Spinner from '@components/spinner';
import KeyboardAvoidingView from '@components/keyboardAvoidingView';
import LoginForm from './components/loginForm';

import Images from '@themes/images';

import styles from './loginScreenStyles';

const LoginScreen = ({isAuthAction, translations, ...props}) => {
  const [isLoading, setIsLoading] = useState(false);

  const loginAction = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      isAuthAction(true);
    }, 250);
  };

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <ImageBackground
        source={Images?.loginBackground}
        style={styles.container}
        resizeMode="cover">
        <KeyboardAvoidingView>
          <LoginForm onPress={loginAction} translations={translations} />
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

LoginScreen.propTypes = {
  isAuthAction: PropTypes.func,
  translations: PropTypes.object,
};

LoginScreen.defaultProps = {
  translations: {},
};

const mapStateToProps = (state) => {
  return {
    translations: state.languages.translations,
  };
};

const mapDispatchToProps = {
  isAuthAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
