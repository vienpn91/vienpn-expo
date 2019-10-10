import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import IconAntDesign from 'react-native-vector-icons/AntDesign'
import Explore from './screens/Explore'
import Saved from './screens/Saved'
import Inbox from './screens/Inbox'
import Trips from './screens/Trips'


const TabNavigator = createMaterialBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: 'EXPLORE',
        tabBarIcon: ({ tintColor }) => (
          <IconAntDesign name="windows" color={tintColor} size={24} />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: 'SAVED',
        tabBarIcon: ({ tintColor }) => (
          <IconAntDesign name="save" color={tintColor} size={24} />
        )
      }
    },
    Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarLabel: 'TRIPS',
        tabBarIcon: ({ tintColor }) => (
          <IconAntDesign name="smileo" color={tintColor} size={24} />
        )
      }
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: 'INBOX',
        tabBarIcon: ({ tintColor }) => (
          <IconAntDesign name="inbox" color={tintColor} size={24} />
        )
      }
    },
    Profile: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({ tintColor }) => (
          <IconAntDesign name="user" color={tintColor} size={24} />
        )
      }
    }
  },
  {
    initialRouteName: 'Explore',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: 'red' },
  }
);
export default createAppContainer(TabNavigator);