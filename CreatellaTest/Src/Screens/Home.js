import React, {Component} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
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
          listData:[ 'A', 'B', 'D', 'E','F','G','H' ],
          isLoading:false,
          isShowingFooter:false,
          pageIndex:1
      }
  }

  //fetch Data from LocalHost
  componentDidMount(){
    // console.log("1234321",this.state.listData);
    // let stateArray = this.state.listData;
    // let nArray = stateArray.splice(2, 0, "C");;
    // let newArray = [ ...this.state.listData, nArray ];
    // console.log("newArray==newArray=",newArray);
    // console.log("final element", this.state.listData[this.state.listData.length-1]);

      this.fetchRecords(1);
    
  }

  //fetch Method
  fetchRecords = (pageIndex) => {
    let {listData} = this.state;
    this.setState({isLoading: true});
    fetch(`http://127.0.0.1:3000/products?_page=${pageIndex}&_limit=16`)
        .then(response => response.json())
        .then((responseJson)=> {
          let data = listData.concat(responseJson)
            this.setState({
                isLoading: false,
                listData: data,
            });

            if(Object.keys(responseJson).length == 0){
              this.setState({
                isShowingFooter:true
              });
            }
        })
        .catch(error=>console.log(error)) //to catch the errors if any
}


   //render Item of the FlatList
   renderItem = ({item, index}) => {
     let{listData} = this.state;
    const [lastItem] = listData.slice(-1)
    return (
      <Card
        item={item}
        index={index}
      />
    );
  };

  //render the List footer if isShowingFooter is true
  renderFooter = () => {
    let {isShowingFooter} = this.state;
    if(isShowingFooter){
      return(
        <View style={styles.footerContainer}>
          <Text>~ end of catalogue ~</Text>
        </View>
      )
    }
    return null;
  }


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
        <View style={styles.spinnerContainer}>
          <Spinner show={isLoading} size={40}/>
        </View>
    
        {listData && <FlatList
              data={listData}
              horizontal={false}
              numColumns={2}
              horizontal={false}
              keyExtractor={item => {
                return item.id;
              }}
              renderItem={this.renderItem}
              ListFooterComponent={this.renderFooter}
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
    zIndex:0
  },
  spinnerContainer:{
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.DEVICE_HEIGHT,
    position:'absolute',
    left:Metrics.DEVICE_WIDTH/2,
    top:Metrics.DEVICE_HEIGHT/2,
    zIndex:1
  },
  footerContainer:{
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.DEVICE_HEIGHT/10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
