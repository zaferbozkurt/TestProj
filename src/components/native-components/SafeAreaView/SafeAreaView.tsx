import React from 'react';
import { SafeAreaView, NativeSafeAreaViewProps } from 'react-native-safe-area-context';

import styles from './SafeAreaView.styles';

interface NSafeAreaViewProps {}

type Props = NativeSafeAreaViewProps & NSafeAreaViewProps;

const NSafeAreaView = (props: Props) => {
  const { style, ...rest } = props;

  return <SafeAreaView {...rest} style={[styles.container, style]} />;
};

export default NSafeAreaView;
