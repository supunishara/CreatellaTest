import React, {Component} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

//import device measurements
import Metrics from '../Config/Metrics';

//import Common Components
import {Card, Spinner} from '../Components/index';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
    
  };

  constructor(props){
      super(props);
      this.state = {
          listData:null,
          isLoading:false,
          pageIndex:1
      }
  }

  //fetch Data from LocalHost
  componentDidMount(){
      this.setState({
        isLoading: true
      });
      this.fetchRecords(1);
    
  }

  //fetch Method
  fetchRecords = (pageIndex) => {
    alert('fetchin');
    fetch(`http://127.0.0.1:3000/products?_page=${pageIndex}&_limit=16`)
        .then(response => response.json())
        .then((responseJson)=> {
            this.setState({
                isLoading: false,
                listData: responseJson
            });
        })
        .catch(error=>console.log(error)) //to catch the errors if any
}


   //render Item of the FlatList
   renderItem = ({item, index}) => {
    return (
      <Card
        item={item}
        index={index}
      />
    );
  };

//calls when flatlist reaches end
  onScrollHandler = () => {
   let {pageIndex} =  this.state;
    this.setState({
      pageIndex: pageIndex + 1
    }, () => {
       this.fetchRecords(pageIndex);
    });
}

  render() {
      let {isLoading, listData} = this.state;
    return <View style={styles.container}>
    <Spinner show={isLoading} size={40}/>
        {listData && <FlatList
              data={listData}
              horizontal={false}
              numColumns={2}
              horizontal={false}
              keyExtractor={item => {
                return item.id;
              }}
              renderItem={this.renderItem}
              onEndReached={this.onScrollHandler}
              onEndThreshold={0}
            />}
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.DEVICE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
