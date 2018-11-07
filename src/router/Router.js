import TestPage from '../component/TestPage';
import { createStackNavigator } from 'react-navigation';

export default AppStackNavigator = createStackNavigator(
    {
        TestPageScreen: TestPage,
    },
    {
        initialRouteName: 'TestPageScreen',
        headerMode: 'none',
    }
)