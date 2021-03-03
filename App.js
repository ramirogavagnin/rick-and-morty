import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';

import {Provider as PaperProvider} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigator/appNavigator';

import Theme from './src/themes/theme';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={Theme}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
};

export default App;
