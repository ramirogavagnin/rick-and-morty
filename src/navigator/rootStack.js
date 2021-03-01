import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {RootStackConfig, RootScreensConfig} from './screensConfig';

import BottomTabNavigator from './bottomTabNavigator';

import routes from './routes';

const Root = createStackNavigator();

import CharactersScreen from '@containers/characters';
import LocationsScreen from '@containers/locations';
import EpisodesScreen from '@containers/episodes';

// Here we have a Main Stack at first Screen and Screens without bottom tab comes after
const RootStack = () => (
  <Root.Navigator
    initialRouteName={routes.main}
    screenOptions={RootStackConfig}>
    <Root.Screen name={routes.main} component={BottomTabNavigator} />
    <Root.Screen
      name={routes.characters}
      component={CharactersScreen}
      options={RootScreensConfig}
    />
    <Root.Screen
      name={routes.locations}
      component={LocationsScreen}
      options={RootScreensConfig}
    />
    <Root.Screen
      name={routes.episodes}
      component={EpisodesScreen}
      options={RootScreensConfig}
    />
  </Root.Navigator>
);

export default RootStack;
