import { store } from '../redux/store';
import { actions } from '@actions';

const show = ({ isActive = true, name = '' } = {}) => {
  store.dispatch(actions.shell.showLoading({ isActive, name }));
};

const hide = ({ isActive = true, name = '' } = {}) => {
  setTimeout(() => {
    store.dispatch(actions.shell.hideLoading({ isActive, name }));
  }, 300);
};

export default {
  show,
  hide
};
