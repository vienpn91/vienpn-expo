import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Explore from './screens/Explore';
import Shop from './screens/Shop';
import Search from './screens/Search';
import SignUp from './screens/SignUp';
import Notification from './screens/Notification';
import Profile from './screens/Profile';


const TabNavigator = createMaterialBottomTabNavigator(
  {   
    SignUp: {
      screen: SignUp,
      navigationOptions: {
        tabBarLabel: 'SignUp',
        tabBarColor: '#1e65ff',
        tabBarIcon: ({ tintColor }) => (
          <IconAntDesign name="windows" color={tintColor} size={24} />
        )
      }
    },
    Shop: {
      screen: Shop,
      navigationOptions: {
        tabBarLabel: 'Shop',
        tabBarColor: '#3a79fecf',
        tabBarIcon: ({ tintColor }) => (
          <IconAntDesign name="shoppingcart" color={tintColor} size={24} />
        )
      }
    },
    Search: {
      screen: Search,
      navigationOptions: {
        tabBarLabel: 'Search',
        tabBarColor: '#1e65ff',
        tabBarIcon: ({ tintColor }) => (
          <IconAntDesign name="search1" color={tintColor} size={24} />
        )
      }
    },
    Notification: {
      screen: Notification,
      navigationOptions: {
        tabBarLabel: 'Notification',
        tabBarColor: '#3a79fecf',
        tabBarIcon: ({ tintColor }) => (
          <IconAntDesign name="notification" color={tintColor} size={24} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarColor: '#d02760',
        tabBarIcon: ({ tintColor }) => (
          <IconAntDesign name="user" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: 'SignUp',
    activeColor: '#fff',
    inactiveColor: '#bdbbbb',
    barStyle: { backgroundColor: '#036c69'},
  }
);
export default createAppContainer(TabNavigator);