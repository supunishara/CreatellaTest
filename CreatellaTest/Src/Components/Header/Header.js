import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Keyboard,
  Fragment,
} from 'react-native';

//import device measurements
import Metrics from '../../Config/Metrics';

import {Dropdown} from 'react-native-material-dropdown';

export default class Header extends Component {

  renderHeader = () => {
    const { data, onChangeText, label} = this.props;

    return (
      <View style={styles.Container}>
        <Dropdown
              label="Select Item"
              data={data}
              dropdownOffset={styles.dropdownOffset}
              lineWidth={0}
              overlayStyle={styles.containerStyle}
              itemPadding={10}
              containerStyle={styles.itemTextStyle}
              onChangeText={onChangeText}
              itemColor="#000"
              selectedItemColor="#000"
              disabledItemColor="#000"
              itemColor="#000"
            />
      </View>
    );
  };

  render() {
    const {style} = this.props;
    return <View>{this.renderHeader()}</View>;
  }
}

const styles = StyleSheet.create({
    Container: {
        width: Metrics.DEVICE_WIDTH,
        height:Metrics.HEADER_HEIGHT,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      textInputContainer: {
        height: Metrics.BTN_HEIGHT,
        width: Metrics.DEVICE_PADDING_WIDTH,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 10,
        borderRadius: Metrics.BORDER_RADIUS,
        borderWidth: 0.3,
        borderColor: 'grey',
        flexDirection: 'row',
      },
      descriptionPart: {
        flex: 1,
      },
      containerStyle: {
        height: Metrics.BTN_HEIGHT,
        marginTop:50,
        width: Metrics.DEVICE_HEADER_PADDING_WIDTH,
      },
      dropdownOffset: {
        top: 20,
        left: 50,
      },
      itemTextStyle: {
        marginLeft: 10,
        paddingLeft:10,
        width: Metrics.DEVICE_PADDING_WIDTH,
        height:Metrics.BTN_HEIGHT,
        borderWidth:0.9,
        borderColor:'grey',
        borderRadius: Metrics.BORDER_RADIUS
      },
});
