import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Animated,
} from 'react-native';

//import Asset Files
import {BackgroundImage} from '../Config/Images';


//import device measurements
import Metrics from '../Config/Metrics';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.btnWidth = new Animated.Value(300);
    this.btnOpacity = new Animated.Value(1);
    this.btnScale = new Animated.Value(0);
    (this.measureLoginX = 0),
      (this.measureLoginY = 0),
      (this.measureLoginWidth = 0),
      (this.measureLoginHeight = 0);
  }

  static navigationOptions = {
    header: null,
  };

  //Get Login Button Measurement
  measureLoginBtn = () => {
    this.loginBtn.measure((x, y, width, height, pageX, pageY) => {
      this.measureLoginX = pageX;
      this.measureLoginY = pageY;
      this.measureLoginWidth = width;
      this.measureLoginHeight = height;
    });
  };


  //Login Button Press event
  onLoginPressed = () => {
    
    Animated.sequence([
      Animated.parallel([
        Animated.timing(this.btnWidth, {
          toValue: 40,
          duration: 500,
        }).start(),
        Animated.timing(this.btnOpacity, {
          toValue: 0,
          duration: 100,
        }),
      ]),
      Animated.delay(600),
      Animated.timing(this.btnScale, {
        toValue: 300,
        duration: 500,
      }),
    ]).start(() => this.props.navigation.navigate('Home'));
  };

  render() {
    const loginBtnStyle = {
      width: this.btnWidth,
    };

    const loginBtnOpacity = {
      opacity: this.btnOpacity,
    };

    const loginBtnScale = {
      transform: [
        {
          scale: this.btnScale,
        },
      ],
    };
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.container} source={BackgroundImage}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={this.onLoginPressed}
                ref={btn => (this.loginBtn = btn)}
                onLayout={this.measureLoginBtn}
                style={styles.btnContainer}>
                <Animated.View style={[styles.backgroundPane, loginBtnScale]} />
                <Animated.View style={[styles.loginButton, loginBtnStyle]}>
                  <Animated.Text
                    style={[styles.loginButtonTxt, loginBtnOpacity]}>
                    Get Started
                  </Animated.Text>
                </Animated.View>
              </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.DEVICE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundPane: {
    backgroundColor: 'rgba(102,179,161,1)',
    position: 'absolute',
    width: 40,
    height: 40,
    top: 20,
    // left: this.measureLoginX,
    // backgroundColor: '#66B3A1',
    borderRadius: 20,
  },
  loginButton: {
    height: 40,
    // width: 300,
    marginTop: 20,
    backgroundColor: '#66B3A1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonTxt: {
    color: 'white',
    fontSize: 15,
    fontSize: Metrics.DEVICE_WIDTH > 400 ? 15 : 13,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
