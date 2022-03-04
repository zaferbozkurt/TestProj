import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import DropdownAlert from 'react-native-dropdownalert';

import styles from './DropdownAlert.styles';
import { NView, NText } from '@native-components';
import { THEME } from '@constants';
import { setDropdownAlert } from '@providers/DropdownAlert';

const CustomDropdownAlert = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    show: show
  }));

  const dropdownRef = useRef();

  const show = ({ type, message, data = {}, duration = 5000 }) => {
    let backgroundColor = '';
    let textColor = '';

    switch (type) {
      case 'success':
        backgroundColor = THEME.COLORS.GREENSEA;
        textColor = THEME.COLORS.WHITE;
        break;

      case 'error':
        backgroundColor = THEME.COLORS.ALIZARIN;
        textColor = THEME.COLORS.WHITE;
        break;

      case 'info':
        backgroundColor = THEME.COLORS.MIDNIGHTBLUE;
        textColor = THEME.COLORS.WHITE;
        break;

      case 'warning':
        backgroundColor = THEME.COLORS.SUNFLOWER;
        textColor = THEME.COLORS.BLACK;
        break;

      default:
        backgroundColor = THEME.COLORS.MIDNIGHTBLUE;
        textColor = THEME.COLORS.WHITE;
        break;
    }

    dropdownRef.current.alertWithType(
      'success',
      '',
      message,
      {
        data: data,
        textColor: textColor,
        backgroundColor: backgroundColor
      },
      duration
    );
  };

  return (
    <DropdownAlert
      successColor="transparent"
      errorColor="transparent"
      infoColor="transparent"
      renderImage={() => {
        return null;
      }}
      renderTitle={() => {
        return null;
      }}
      renderMessage={(props, item) => {
        return (
          <NView
            style={[
              styles.dropdownAlertView,
              {
                backgroundColor: item.payload.backgroundColor
              }
            ]}
          >
            <NText
              style={[
                styles.dropdownAlertText,
                {
                  color: item.payload.textColor
                }
              ]}
            >
              {item.message}
            </NText>
          </NView>
        );
      }}
      ref={dropdownRef}
      zIndex={10000}
      updateStatusBar={false}
    />
  );
});

const CustomDropdownAlertProvider = () => {
  return (
    <CustomDropdownAlert
      ref={(ref) => {
        setDropdownAlert(ref);
      }}
    />
  );
};

export default CustomDropdownAlertProvider;
