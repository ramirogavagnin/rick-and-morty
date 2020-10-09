import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { DefaultScreensConfig, TabBarConfig } from './screensConfig';

import Sizes from '../themes/sizes';

/// Stack Screens
import HomeScreen from '../containers/home';
import SearchScreen from '../containers/search';
import FavoritesScreen from '../containers/favorites';
import ProfileScreen from '../containers/profile';
////

import routes from './routes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const { tabBarIcon } = Sizes;

const HomeStack = () => (
    <Stack.Navigator screenOptions={DefaultScreensConfig}>
        <Stack.Screen name={routes.home} component={HomeScreen} />
    </Stack.Navigator>
);

const SearchStack = () => (
    <Stack.Navigator screenOptions={DefaultScreensConfig}>
        <Stack.Screen name={routes.search} component={SearchScreen} />
    </Stack.Navigator>
);

const FavoritesStack = () => (
    <Stack.Navigator screenOptions={DefaultScreensConfig}>
        <Stack.Screen name={routes.favorites} component={FavoritesScreen} />
    </Stack.Navigator>
);

const ProfileStack = () => (
    <Stack.Navigator screenOptions={DefaultScreensConfig}>
        <Stack.Screen name={routes.profile} component={ProfileScreen} />
    </Stack.Navigator>
);

const BottomTabNavigator = ({ translations }) => {
    return (
        <Tab.Navigator tabBarOptions={TabBarConfig}>
            <Tab.Screen
                name={routes.home}
                component={HomeStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="home" color={color} size={tabBarIcon} />
                    ),
                }}
            />
            <Tab.Screen
                name={routes.search}
                component={SearchStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="magnify" color={color} size={tabBarIcon} />
                    ),
                }}
            />
            <Tab.Screen
                name={routes.favorites}
                component={FavoritesStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="heart" color={color} size={tabBarIcon} />
                    ),
                }}
            />
            <Tab.Screen
                name={routes.profile}
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon
                            name="account-circle-outline"
                            color={color}
                            size={tabBarIcon}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

BottomTabNavigator.propTypes = {
    translations: PropTypes.object,
};

BottomTabNavigator.defaultProps = {
    translations: {},
};

const mapStateToProps = state => {
    return {
        translations: state.languages.translations,
    };
};

export default connect(
    mapStateToProps,
    null,
)(BottomTabNavigator);
