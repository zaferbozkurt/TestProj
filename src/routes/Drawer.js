import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Tabs from './Tabs';

import { DEVICE, THEME } from '@constants';
import { NView, NText, NSafeAreaView, NTouchableOpacity } from '@native-components';

const DrawerStack = createDrawerNavigator();
export const DrawerStackScreen = () => {
  return (
    <DrawerStack.Navigator
      drawerContent={() => <Settings />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: DEVICE.DIMENSIONS.WIDTH / 2
        }
      }}
    >
      <DrawerStack.Screen name="Tabs" component={Tabs} />
    </DrawerStack.Navigator>
  );
};

const Settings = () => {
  const navigation = useNavigation();

  return (
    <NSafeAreaView edges={['top']}>
      <NView style={styles.container}>
        <NTouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            height: 30,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'gray'
          }}
        >
          <NText>HIDE DRAWER</NText>
        </NTouchableOpacity>

        <NText>Test</NText>
        <NText>Test</NText>
        <NText>Test</NText>
        <NText>Test</NText>
        <NText>Test</NText>
        <NText>Test</NText>
        <NText>Test</NText>
        <NText>Test</NText>
        <NText>Test</NText>
        <NText>Test</NText>
        <NText>Test</NText>
      </NView>
    </NSafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  list: {
    marginTop: 60
  },
  listItemView: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 6
  },
  listItemText: {
    color: THEME.COLORS.BLACK,
    marginLeft: 8,
    fontWeight: '600'
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    paddingLeft: 0
  }
});

export default DrawerStackScreen;
