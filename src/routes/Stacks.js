import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { defaultOptions } from './Options';

// pages
import Home from '@pages/Home/Home';

const HomeStack = createStackNavigator();
export const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator screenOptions={defaultOptions}>
      <HomeStack.Screen
        name="Accounts"
        component={Home}
        initialParams={{
          path: 'accounts'
        }}
      />
    </HomeStack.Navigator>
  );
};

const MarketsStack = createStackNavigator();
export const MarketsStackNavigator = () => {
  return (
    <MarketsStack.Navigator screenOptions={defaultOptions}>
      <MarketsStack.Screen
        name="Beneficiaries"
        component={Home}
        initialParams={{
          path: 'beneficiaries'
        }}
      />
    </MarketsStack.Navigator>
  );
};

const TradeStack = createStackNavigator();
export const TradeStackNavigator = () => {
  return (
    <TradeStack.Navigator screenOptions={defaultOptions}>
      <TradeStack.Screen
        name="Transactions"
        component={Home}
        initialParams={{
          path: 'transactions'
        }}
      />
    </TradeStack.Navigator>
  );
};

const FundingStack = createStackNavigator();
export const FundingStackNavigator = () => {
  return (
    <FundingStack.Navigator screenOptions={defaultOptions}>
      <FundingStack.Screen
        name="Profile"
        component={Home}
        initialParams={{
          path: 'profile'
        }}
      />
    </FundingStack.Navigator>
  );
};
