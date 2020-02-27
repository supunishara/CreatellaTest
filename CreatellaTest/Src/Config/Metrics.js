import {Dimensions} from 'react-native';

//Get device Dimensions
const {width, height} = Dimensions.get('window');

export default {
  DEVICE_HEIGHT: height,
  DEVICE_WIDTH: width,
  HEADER_HEIGHT: height / 8,
  DEVICE_PADDING_WIDTH: width - 2 * (width / 10),
  BTN_HEIGHT: height / 14,
  DEVICE_HEADER_PADDING_WIDTH: width - 2 * (width / 20),
  BORDER_RADIUS: 5,
};