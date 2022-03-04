import React from 'react';
import { StatusBar, View, ViewProps } from 'react-native';

import styles from './Container.styles';

interface NContainerProps {
  barStyle?: 'default' | 'light-content' | 'dark-content';
}

type Props = ViewProps & NContainerProps;

const NContainer = (props: Props) => {
  const { style, children, barStyle = 'dark-content', ...rest } = props;

  return (
    <View {...rest} style={[styles.container, style]}>
      <StatusBar barStyle={barStyle} />

      {children}
    </View>
  );
};

export default NContainer;
