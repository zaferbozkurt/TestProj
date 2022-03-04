import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import AuthStackNavigator from './AuthStack';
import Drawer from './Drawer';

import { defaultOptions } from './Options';

const RootStack = createStackNavigator();
const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Drawer" component={Drawer} />
        <RootStack.Screen name="Auth" component={AuthStackNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
