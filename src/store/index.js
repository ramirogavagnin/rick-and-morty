import AsyncStorage from '@react-native-community/async-storage';

import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import thunk from 'redux-thunk';
import ENV from 'react-native-config';

import reducers from './reducers';

const persistConfig = {
    timeout: 10000, // this line is used when the remote debbuger is running to avoid reyhdrate errors
    key: `${ENV.APP_NAME}-app`,
    storage: AsyncStorage,
    blacklist: ['navigation'],
    stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
