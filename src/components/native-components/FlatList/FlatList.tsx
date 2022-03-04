import React from 'react';
import { FlatList, FlatListProps } from 'react-native';

import styles from './FlatList.styles';

interface NFlatListProps {}

type Props = FlatListProps<any> & NFlatListProps;

const NFlatList = (props: Props) => {
  const { style, ...rest } = props;

  return <FlatList {...rest} style={[styles.container, style]} />;
};

export default NFlatList;
