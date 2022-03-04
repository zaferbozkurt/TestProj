import React from 'react';
import { View, ViewProps } from 'react-native';

import styles from './View.styles';

interface NViewProps {}

type Props = ViewProps & NViewProps;

const NView = (props: Props) => {
  const { style, ...rest } = props;

  return <View {...rest} style={[styles.container, style]} />;
};

export default NView;
