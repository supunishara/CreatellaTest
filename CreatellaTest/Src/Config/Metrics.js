import {Dimensions} from 'react-native';

//Get device Dimensions
const {width, height} = Dimensions.get('window');

export default {
  DEVICE_HEIGHT: height,
  DEVICE_WIDTH: width,
};