import React, {Component} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Text,
  Animated,
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class Home extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return <View style={styles.container}>
        
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
});
