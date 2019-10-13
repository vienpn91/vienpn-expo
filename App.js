import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
import LoadingScreen from './screens/LoadingScreen';


export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
