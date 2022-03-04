import React from 'react';
import { Modal, ModalProps } from 'react-native';

import styles from './Modal.styles';

interface NModalProps {}

type Props = ModalProps & NModalProps;

const NModal = (props: Props) => {
  const { style, ...rest } = props;

  return <Modal {...rest} style={[styles.container, style]} />;
};

export default NModal;
