import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// pages
import Login from '@pages/Login/Login';

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
