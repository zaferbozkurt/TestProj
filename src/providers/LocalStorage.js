import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

const setItem = (key, value) => {
  storage.set(key, value);
};

const getItem = (key) => {
  const value = storage.getString(key);

  return value;
};

const removeItem = (key) => {
  storage.delete(key);
};

const clearAll = () => {
  storage.clearAll();
};

export default {
  setItem,
  getItem,
  removeItem,
  clearAll
};
