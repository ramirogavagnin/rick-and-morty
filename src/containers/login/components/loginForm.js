import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';

import Text from '../../../components/text';
import TextInput from '../../../components/textInput';
import Button from '../../../components/button';
import TouchableOpacity from '../../../components/touchableOpacity';

import translationsEnums from '../../../themes/translations/translationsEnums';
import translationsKeys from '../../../themes/translations/translationsKeys';
import { renderTranslations } from '../../../utils/translationsUtils';

import { EmailTypes, PasswordTypes } from '../../../types/formsTypes';

import { initialValues, formKeys } from './loginFormKeys';

import styles from '../loginScreenStyles';

const { login } = translationsEnums;

const LoginForm = ({ onPress, translations }) => {
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
            onSubmit={values => onPress()}
        >
            {formikProps => {
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
                        <TextInput
                            onChangeText={handleChange(formKeys.email)}
                            onBlur={handleBlur(formKeys.email)}
                            value={values.email}
                            label={user}
                            autoCapitalize={EmailTypes?.autoCapitalize}
                            keyboardType={EmailTypes?.keyboardType}
                            error={
                                errors.email && touched.email && errors.email
                            }
                        />
                        <TextInput
                            onChangeText={handleChange(formKeys.password)}
                            onBlur={handleBlur(formKeys.password)}
                            value={values.password}
                            label={password}
                            containerStyle={styles.passwordInput}
                            autoCapitalize={PasswordTypes?.autoCapitalize}
                            secureTextEntry={PasswordTypes?.secureTextEntry}
                            error={
                                errors.password &&
                                touched.password &&
                                errors.password
                            }
                        />
                        <Button
                            disabled={!dirty || Object.keys(errors).length > 0}
                            buttonStyle={styles.logInButton}
                            onPress={handleSubmit}
                        >
                            {logIn}
                        </Button>
                    </View>
                );
            }}
        </Formik>
    );
};

LoginForm.propTypes = {
    onPress: PropTypes.func,
    translations: PropTypes.object,
};

LoginForm.defaultProps = {
    translations: {},
};

export default LoginForm;
