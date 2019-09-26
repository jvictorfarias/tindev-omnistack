import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './pages/login';
import Main from './pages/Main';

export default createAppContainer(
  createSwitchNavigator({
    Login,
    Main,
  }),
);
