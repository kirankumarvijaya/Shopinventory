import { createStackNavigator,createAppContainer } from 'react-navigation';
import HomePage from '../container/Homepage';
import DealersPage from '../container/DealerlinkPage';

const navigationScreens = createStackNavigator({
    HomeScreen:{
        screen:HomePage,
    },
    DealersPage:{
        screen:DealersPage,
    }
},{
    initialRouteName:'HomeScreen',
    defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: 'orange',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    
})

export default createAppContainer(navigationScreens);