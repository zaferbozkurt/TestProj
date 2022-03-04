import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ActivityIndicator, Animated } from 'react-native';

import styles from './Loading.styles';
import { NView } from '@native-components';

const Loading = () => {
  const [isShowLoading, setIsShowLoading] = useState(false);
  const activeLoadings = useSelector((state) => state.shell.activeLoadings);

  const animatedValue = useRef(new Animated.Value(0)).current;

  const animatedValueOpacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  const isShowLoadingRedux = activeLoadings && activeLoadings.length > 0 ? true : false;

  useEffect(() => {
    let timeout = '';
    if (isShowLoadingRedux) {
      setIsShowLoading(true);
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true
      }).start();

      timeout = setTimeout(() => {
        setIsShowLoading(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isShowLoadingRedux]);

  if (isShowLoading) {
    return (
      <Animated.View
        style={[
          styles.loadingView,
          {
            opacity: animatedValueOpacity
          }
        ]}
      >
        <NView style={styles.loading}>
          <ActivityIndicator size="large" color="white" />
        </NView>
      </Animated.View>
    );
  }

  return null;
};

export default Loading;
