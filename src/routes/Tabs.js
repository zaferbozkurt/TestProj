import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SvgIcons } from '@page-components';
import { THEME } from '@constants';
import {
  HomeStackNavigator,
  MarketsStackNavigator,
  TradeStackNavigator,
  FundingStackNavigator,
  WalletsStackNavigator
} from './Stacks';
import { NTouchableOpacity, NText, NView } from '@native-components';

const TabStack = createBottomTabNavigator();
const TabStackScreen = (props) => {
  const { initialRouteName } = props;

  return (
    <TabStack.Navigator
      tabBarOptions={{
        activeTintColor: THEME.COLORS.PRIMARY_PURPLE
      }}
      initialRouteName={initialRouteName}
      tabBar={(customTabProps) => <MyTabBar {...customTabProps} />}
      screenOptions={{ headerShown: false }}
    >
      <TabStack.Screen
        options={({ route }) => {
          return {
            title: 'Accounts'
          };
        }}
        name="Accounts"
        component={HomeStackNavigator}
      />

      <TabStack.Screen
        options={({ route }) => {
          return {
            title: 'Beneficiaries'
          };
        }}
        name="Beneficiaries"
        component={MarketsStackNavigator}
      />

      <TabStack.Screen
        options={({ route }) => {
          return {
            title: 'Transactions'
          };
        }}
        name="Transactions"
        component={TradeStackNavigator}
      />

      <TabStack.Screen
        options={({ route }) => {
          return {
            title: 'Profile'
          };
        }}
        name="Profile"
        component={FundingStackNavigator}
      />
    </TabStack.Navigator>
  );
};

const MyTabBar = ({ state, descriptors, navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <NView style={styles.tabContainer}>
      <NView
        style={[
          styles.customTabBarContainer,
          {
            marginBottom: insets.bottom + 10
          }
        ]}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const color = isFocused ? THEME.COLORS.PRIMARY : '#A7A7A7';

          const IconElement = SvgIcons[route.name];

          return (
            <NTouchableOpacity key={route.name} onPress={onPress} style={styles.tabButton} activeOpacity={1}>
              <IconElement fill={color} width="28" height="28" />
              <NText style={[styles.tabBarText, { color: color }]}>{label}</NText>
            </NTouchableOpacity>
          );
        })}
      </NView>
    </NView>
  );
};

export default TabStackScreen;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: 'white'
  },
  customTabBarContainer: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: 'white',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 15,
    ...THEME.SHADOW_STYLE_LIST_ITEM
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabBarText: {
    marginTop: 10,
    fontSize: 11
  }
});
