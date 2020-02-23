import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//import Screens
import Login from '../Screens/Login';
import Home from '../Screens/Home';


//create the navigation Stack
const Route = createStackNavigator({
  Login: {
    screen: Login,
  },
  Home: {
    screen: Home,
  },
});

export default createAppContainer(Route);