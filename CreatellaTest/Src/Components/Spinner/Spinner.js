import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, Animated} from 'react-native';

//import Asset Files
import {Spin} from '../../Config/Images';

export default class Spinner extends Component {

    constructor(props){
        super(props);
        this.loadingSpin = new Animated.Value(0);
    }

    componentDidMount(){
        this.spinAnimation();
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.show){
            this.spinAnimation();
          }
    }

    //Spin the PNG image 
    spinAnimation(){
        this.loadingSpin .setValue(0);
        Animated.sequence([
            Animated.timing(
                this.loadingSpin,{
                    toValue: 1,
                    duration: 3000
                }
            ),
            // Animated.timing(
            //     this.loadingSpin,{
            //         toValue: 0,
            //         duration: 3000
            //     }
            // )
        ]).start(() => this.spinAnimation)
        
    }

    render() {
      const {show, size} = this.props;
      

      //interpolate when loadingSpin values goes to 0 to 1
      const spin = this.loadingSpin.interpolate({
        inputRange:[0,1],
        outputRange:['0deg', '360deg']
      });
  

      //rotate the image
      const spinnerStyle = {
        transform:[{rotate: spin}]
      };

      //set width and height to Animated Image
      propsSpinnerStyle= {
          height:size,
          width:size,
          resizeMode:'contain'
      }
      return <View style={{opacity:(show)? 1: 0}}>
          <Animated.Image source={Spin} style={[propsSpinnerStyle,spinnerStyle]}></Animated.Image>
      </View>;
    }
  }

