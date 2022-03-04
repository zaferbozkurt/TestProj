import KeyboardManager from 'react-native-keyboard-manager';

import DEVICE from '@constants/Device';

export const initKeyboard = () => {
  if (DEVICE.SYSTEM.IS_IOS) {
    KeyboardManager.setEnable(true);
    KeyboardManager.setToolbarDoneBarButtonItemText('Kapat');
    KeyboardManager.setToolbarPreviousNextButtonEnable(true);
    KeyboardManager.setShouldShowToolbarPlaceholder(false);
    setTextFieldDistance(30);
  }
};

export const setTextFieldDistance = (distance = 10) => {
  if (DEVICE.SYSTEM.IS_IOS) {
    KeyboardManager.setKeyboardDistanceFromTextField(distance);
  }
};
