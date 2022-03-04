import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const DIMENSIONS = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
  SCALE: Dimensions.get('window').scale,
  FONT_SCALE: Dimensions.get('window').fontScale
};

const SYSTEM = {
  MODEL: DeviceInfo.getModel(),
  DEVICE_ID: DeviceInfo.getDeviceId(),
  ID: DeviceInfo.getUniqueId(),
  OS_VERSION: DeviceInfo.getSystemVersion(),
  OS_NAME: Platform.OS,
  IS_IOS: Platform.OS === 'ios',
  IS_ANDROID: Platform.OS === 'android',
  IS_TABLET: DeviceInfo.isTablet(),
  IS_MOBILE_PHONE: !DeviceInfo.isTablet(),
  APP_VERSION: DeviceInfo.getVersion()
};

export default {
  DIMENSIONS,
  SYSTEM
};
