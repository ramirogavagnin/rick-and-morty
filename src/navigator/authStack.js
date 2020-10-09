import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthStackScreensConfig, LoginScreenOptions } from './screensConfig';
import routes from './routes';

/// Screens
import LoginScreen from '../containers/login';

const Stack = createStackNavigator();

const AuthStack = () => (
    <Stack.Navigator screenOptions={AuthStackScreensConfig}>
        <Stack.Screen
            name={routes.login}
            component={LoginScreen}
            options={LoginScreenOptions}
        />
    </Stack.Navigator>
);

export default AuthStack;
