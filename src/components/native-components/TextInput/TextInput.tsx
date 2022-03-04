import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';

import styles from './TextInput.styles';

interface NTextInputProps {
  useMaskInput: boolean;
  getRef: () => void;
}

type Props = TextInputProps & NTextInputProps & TextInputMaskProps;

const NTextInput = (props: Props) => {
  const { style, useMaskInput = false, getRef, ...rest } = props;

  if (useMaskInput) {
    return <TextInputMask {...rest} refInput={getRef} style={[styles.container, style]} />;
  }

  return <TextInput {...rest} ref={getRef} style={[styles.container, style]} />;
};

export default NTextInput;
