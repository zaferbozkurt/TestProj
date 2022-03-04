import React from 'react';
import { Image, ImageProps } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';

import styles from './Image.styles';

interface NImageProps {
  useFastImage: boolean;
}

type Props = ImageProps & NImageProps & FastImageProps;

const NImage = (props: Props) => {
  const { style, useFastImage = true, ...rest } = props;

  if (useFastImage) {
    return <FastImage {...rest} style={[styles.container, style]} />;
  }

  return <Image {...rest} style={[styles.container, style]} />;
};

export default NImage;
