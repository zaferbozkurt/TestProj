import React from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

import styles from './ScrollView.styles';

interface NScrollViewProps {
  getRef: () => void;
}

type Props = ScrollViewProps & NScrollViewProps;

const NScrollView = (props: Props) => {
  const { style, getRef, ...rest } = props;

  return <ScrollView {...rest} ref={getRef} style={[styles.container, style]} />;
};

export default NScrollView;
