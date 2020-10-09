import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerMenu from '../components/drawerMenu';

import routes from './routes';
import { DrawerStyle } from './screensConfig';

import RootStack from './rootStack';

const Drawer = createDrawerNavigator();

const PrivateStack = props => (
    <Drawer.Navigator
        drawerStyle={DrawerStyle}
        drawerContent={props => <DrawerMenu {...props} />}
    >
        <Drawer.Screen name={routes.root} component={RootStack} />
    </Drawer.Navigator>
);

export default PrivateStack;
