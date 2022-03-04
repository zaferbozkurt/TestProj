import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import moment from 'moment';
import trLocale from 'moment/locale/tr';

import Navigation from './routes';

import { store } from './redux/store';
import { navigationRef } from './providers/RootNavigation';

import { DropdownAlert, Loading } from './components/shell-components';
import { initKeyboard } from './providers/Keyboard';

const App = () => {
  useEffect(() => {
    initApp();
  }, []);

  const initApp = async () => {
    initKeyboard();
    moment.locale('tr', trLocale);

    RNBootSplash.hide({ fade: true });
  };

  return (
    <Provider store={store}>
      <Loading />
      <DropdownAlert />

      <NavigationContainer ref={navigationRef}>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
