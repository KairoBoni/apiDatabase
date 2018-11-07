import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/Store';
import AppStackNavigator from './src/router/Router'
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator />
      </Provider>
    );
  }
}
