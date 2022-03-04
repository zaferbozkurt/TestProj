import React from 'react';

import styles from './Login.styles';
import { NContainer } from '@native-components';
import WebView from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <WebView source={{ uri: 'https://test-banking-fo.integrated.finance/' }} />
    </SafeAreaView>
  );
};
export default Login;
