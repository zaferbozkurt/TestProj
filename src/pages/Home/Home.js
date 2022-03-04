import React, { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';

import styles from './Home.styles';
import { NText, NContainer, NSafeAreaView, NTouchableOpacity } from '@native-components';
import { ServiceCaller, Translate } from '@providers';
import WebView from 'react-native-webview';

const Home = ({ route }) => {
  const { path } = route.params;
  // const [price, setPrice] = useState('');

  useEffect(() => {
    database()
      .ref(`instanceURL`)
      .once('value', (snapshot) => {
        let value = snapshot.val();
        console.log("🚀 ~ file: Home.js ~ line 18 ~ .once ~ value", value)
      });
  }, []);

  return (
    <NContainer style={styles.container}>
      <WebView source={{ uri: `https://test-banking-fo.integrated.finance/${path}` }} />
    </NContainer>
  );
};
export default Home;
