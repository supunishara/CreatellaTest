import React, {Component} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  NetInfo
} from 'react-native';

//import device measurements
import Metrics from '../Config/Metrics';

//import Common Components
import {Card, Spinner, Header} from '../Components/index';

export default class Home extends Component {
  static navigationOptions = {
    header: null,
    
  };

  constructor(props){
      super(props);
      this.state = {
          // listData:[ 'A', 'B', 'D', 'E','F','G','H' ],
          listData:[],
          isLoading:false,
          isShowingFooter:false,
          pageIndex:1,
          addIndex:20,
          selectedDropDownValue:null,
          data :[
              {
                value: 'id',
              },
              {
                value: 'price',
              },
              {
                value: 'size',
              }
            ]
      }
  }

  //fetch Data from LocalHost for the first time
  componentDidMount(){
      this.fetchRecords(1);
      // this.fetchAdvertisements();
  }

  //fetch Method
  fetchRecords = async(pageIndex) => {
    let {listData,addIndex,selectedDropDownValue} = this.state;
    this.setState({isLoading: true,});

    let addObj = {
      type:"URL"
    }
    let URL = selectedDropDownValue == null ? `http://127.0.0.1:3000/products?_page=${pageIndex}&_limit=10`: `http://127.0.0.1:3000/products?_sort=${selectedDropDownValue}`;

    fetch(URL)
        .then(response => response.json())
        .then((responseJson)=> {
          let data = listData.concat(responseJson)
            this.setState({
                isLoading: false,
                listData:  data,
            }, () => {
              if( pageIndex >= 2){
                let stateArray = this.state.listData;
                let nArray = stateArray.splice(addIndex, 0, addObj);
                // let newArray = [ ...this.state.listData, nArray ];
                this.setState({
                  listData: stateArray,
                  addIndex:addIndex + 20
                },() =>{
                  console.log('listData--listData--123',stateArray);
                });
              }
            });


            if(Object.keys(responseJson).length == 0){
              this.setState({
                isShowingFooter:true
              });
            }
        })
        .catch(error=>this.setState({isLoading: false,})) //to catch the errors if any
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

//DropDown Item selection method
onChangeText = (value, index, data) => {
  this.setState({
    selectedDropDownValue: value,
    listData:[],
  }, () => {
    this.fetchRecords(1);
  });
}

  render() {
      let {isLoading, listData,data,selectedDropDownValue} = this.state;
    return <View style={styles.container}>
    
        <View style={styles.spinnerContainer}>
          <Spinner show={isLoading} size={40}/>
        </View>

        <Header data={data} onChangeText={this.onChangeText}/>
    
        {listData &&  <FlatList
              data={listData}
              horizontal={false}
              numColumns={2}
              horizontal={false}
              // keyExtractor={item => {
              //   return item.face;
              // }}
              renderItem={this.renderItem}
              ListFooterComponent={this.renderFooter}
              onEndReached={this.onScrollHandler}
              extraData={selectedDropDownValue}
              onEndThreshold={0}
            />}
    </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    width: Metrics.DEVICE_WIDTH,
    height: Metrics.DEVICE_HEIGHT,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
