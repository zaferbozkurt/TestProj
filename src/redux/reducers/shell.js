import * as actionTypes from '../action-helper/actionTypes';

const defaultState = {
  activeLoadings: [],
  passiveLoadings: []
};

const showLoading = (state, action) => {
  const activeLoadingsTemp = [...state.activeLoadings];
  const passiveLoadingsTemp = [...state.passiveLoadings];

  if (action.data.isActive) {
    activeLoadingsTemp.push(action.data.name);
  } else {
    passiveLoadingsTemp.push(action.data.name);
  }

  return {
    ...state,
    activeLoadings: [...activeLoadingsTemp],
    passiveLoadings: [...passiveLoadingsTemp]
  };
};

const hideLoading = (state, action) => {
  let activeLoadingsTemp = [...state.activeLoadings];
  let passiveLoadingsTemp = [...state.passiveLoadings];

  if (action.data.isActive) {
    const loadingIndex = activeLoadingsTemp.indexOf(action.data.name);
    if (loadingIndex >= 0) {
      activeLoadingsTemp.splice(loadingIndex, 1);
    }
  } else {
    const loadingIndex = passiveLoadingsTemp.indexOf(action.data.name);
    if (loadingIndex >= 0) {
      passiveLoadingsTemp.splice(loadingIndex, 1);
    }
  }

  return {
    ...state,
    activeLoadings: [...activeLoadingsTemp],
    passiveLoadings: [...passiveLoadingsTemp]
  };
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_LOADING:
      return showLoading(state, action);

    case actionTypes.HIDE_LOADING:
      return hideLoading(state, action);

    default:
      return state;
  }
};

export default reducer;
