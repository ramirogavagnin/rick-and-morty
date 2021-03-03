import React from 'react';
import {Image} from 'react-native';
import {func, object} from 'prop-types';
import {View} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';

import TextInput from '@components/textInput';
import Button from '@components/button';

import Images from '@themes/images';
import translationsEnums from '@themes/translations/translationsEnums';
import translationsKeys from '@themes/translations/translationsKeys';
import {renderTranslations} from '@utils/translationsUtils';

import {EmailTypes, PasswordTypes} from '@types/formsTypes';
import {initialValues, formKeys} from './loginFormKeys';

import styles from '../loginScreenStyles';

const {login} = translationsEnums;

const LoginForm = ({handleOnSubmit, translations}) => {
  const {
    user,
    password,
    logIn,
    emailLength,
    requiredField,
    invalidUser,
    invalidPassword,
    passwordMinLength,
    passwordMaxLength,
  } = renderTranslations(translations, login, translationsKeys.login);

  const LoginSchema = Yup.object().shape({
    [formKeys.email]: Yup.string()
      .email(invalidUser)
      .max(EmailTypes?.maxLength, emailLength)
      .required(requiredField),
    [formKeys.password]: Yup.string()
      .matches(PasswordTypes?.regex, invalidPassword)
      .min(PasswordTypes?.minLength, passwordMinLength)
      .max(PasswordTypes?.maxLength, passwordMaxLength)
      .required(requiredField),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleOnSubmit}>
      {(formikProps) => {
        const {
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          dirty,
        } = formikProps;

        return (
          <View style={styles.loginForm}>
            <Image
              source={Images?.logo}
              style={styles.logo}
              resizeMode="contain"
            />
            <TextInput
              onChangeText={handleChange(formKeys.email)}
              onBlur={handleBlur(formKeys.email)}
              value={values.email}
              label={user}
              containerStyle={styles.emailInput}
              autoCapitalize={EmailTypes?.autoCapitalize}
              keyboardType={EmailTypes?.keyboardType}
              error={errors.email && touched.email && errors.email}
            />
            <TextInput
              onChangeText={handleChange(formKeys.password)}
              onBlur={handleBlur(formKeys.password)}
              value={values.password}
              label={password}
              containerStyle={styles.passwordInput}
              autoCapitalize={PasswordTypes?.autoCapitalize}
              secureTextEntry={PasswordTypes?.secureTextEntry}
              error={errors.password && touched.password && errors.password}
            />
            <Button
              disabled={!dirty || Object.keys(errors)?.length > 0}
              buttonStyle={styles.logInButton}
              onPress={handleSubmit}>
              {logIn}
            </Button>
          </View>
        );
      }}
    </Formik>
  );
};

LoginForm.propTypes = {
  handleOnSubmit: func,
  translations: object,
};

LoginForm.defaultProps = {
  translations: {},
  handleOnSubmit: () => {},
};

export default LoginForm;
