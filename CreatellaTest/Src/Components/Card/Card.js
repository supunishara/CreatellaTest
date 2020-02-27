import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

//import device measurements
import Metrics from '../../Config/Metrics';

//import Helper class for Helper functions
import Helper from '../../Util/Helper';

let helper = new Helper();

export default class Card extends Component {

  constructor(props){
    super(props);
  }

//format Currency ans show with $ Sign
  


  render() {
    const {index,item} = this.props;
    let Index = index % 2;
    // console.log("===item===item",item);

    leftItemStyle={
      height: Metrics.DEVICE_HEIGHT / 4,
      width: Metrics.DEVICE_WIDTH/2 -15,
      // backgroundColor:'yellow',
      marginLeft:10,
      marginRifgt:5,
      borderRadius:5,
      borderColor:'grey',
      borderWidth:0.7,
      justifyContent: 'center',
      alignItems: 'center',
    }

    rightItemStyle={
      height: Metrics.DEVICE_HEIGHT / 4,
      width: Metrics.DEVICE_WIDTH/2 -15,
      // backgroundColor:'red',
      marginLeft:5,
      marginRight:10,
      borderRadius:5,
      borderColor:'grey',
      borderWidth:0.7,
      justifyContent: 'center',
      alignItems: 'center',
    }

    return <View style={styles.cardContainer}>
      <TouchableOpacity style={Index == 0 ? leftItemStyle: rightItemStyle} >
        <Text style={{fontSize:item.size, marginBottom:10}}>{item.face}</Text>
        {/* <Text style={{marginBottom:10}}>{helper.currencyFormat(item.price)}</Text> 
         <Text style={{textAlign:'center'}}>{helper.timeFormat(item.date)}</Text> */}
      </TouchableOpacity>
    </View>;
  }
}

const styles = StyleSheet.create({
    cardContainer: {
    height: Metrics.DEVICE_HEIGHT / 4,
    width: Metrics.DEVICE_WIDTH/2,
    marginTop: 10,

  },

});
