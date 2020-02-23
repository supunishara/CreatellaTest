import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

//import device measurements
import Metrics from '../../Config/Metrics';

export default class Card extends Component {

  render() {
    const {index} = this.props;
    let Index = index % 2;

    leftItemStyle={
      height: Metrics.DEVICE_HEIGHT / 4.5,
      width: Metrics.DEVICE_WIDTH/2 -15,
      backgroundColor:'yellow',
      marginLeft:10,
      marginRifgt:5,
      borderRadius:5,
      borderColor:'grey',
      borderWidth:0.7
    }

    rightItemStyle={
      height: Metrics.DEVICE_HEIGHT / 4.5,
      width: Metrics.DEVICE_WIDTH/2 -15,
      backgroundColor:'red',
      marginLeft:5,
      marginRight:10,
      borderRadius:5,
      borderColor:'grey',
      borderWidth:0.7
    }
    return <View style={styles.cardContainer}>
      <TouchableOpacity style={Index == 0 ? leftItemStyle: rightItemStyle}></TouchableOpacity>
    </View>;
  }
}

const styles = StyleSheet.create({
    cardContainer: {
    height: Metrics.DEVICE_HEIGHT / 4.5,
    width: Metrics.DEVICE_WIDTH/2,
    marginBottom: 10,
    
    
  },

});
