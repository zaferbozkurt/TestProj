import React from 'react';
import { ImageBackground, ImageBackgroundProps } from 'react-native';

import styles from './ImageBackground.styles';

interface NImageBackgroundProps {}

type Props = ImageBackgroundProps & NImageBackgroundProps;

const NImageBackground = (props: Props) => {
  const { style, ...rest } = props;

  return <ImageBackground {...rest} style={[styles.container, style]} />;
};

export default NImageBackground;
