import * as React from 'react';
import { StackActions } from '@react-navigation/native';

export const navigationRef = React.createRef();

const navigate = (pageName, params = {}, { resetStack = false } = {}) => {
  if (resetStack) {
    navigationRef.current.reset({
      index: 0,
      routes: [
        {
          name: pageName,
          params: params
        }
      ]
    });
  } else {
    navigationRef.current.navigate(pageName, params);
  }
};

const push = (pageName, params = {}) => {
  navigationRef.current.dispatch(StackActions.push(pageName, params));
};

const goBack = () => {
  navigationRef.current.goBack();
};

export default {
  navigate,
  push,
  goBack
};
