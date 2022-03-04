import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import styles from './TouchableOpacity.styles';

interface NTouchableOpacityProps {}

type Props = TouchableOpacityProps & NTouchableOpacityProps;

const NTouchableOpacity = (props: Props) => {
  const { style, ...rest } = props;

  return <TouchableOpacity activeOpacity={0.8} {...rest} style={[styles.container, style]} />;
};

export default NTouchableOpacity;
