import * as actionTypes from '../action-helper/actionTypes';

export const showLoading = (data) => {
  return {
    type: actionTypes.SHOW_LOADING,
    data
  };
};

export const hideLoading = (data) => {
  return {
    type: actionTypes.HIDE_LOADING,
    data
  };
};
