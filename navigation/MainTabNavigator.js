import React from 'react';
import { Platform, Dimensions, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, BottomTabBar } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import colors from '../constants/Colors'

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

const ScreenWidth = Dimensions.get('screen').width;

HomeStack.navigationOptions = {
  tabBarLabel: 'Dashboard',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="finance"
    />
  ),
};

HomeStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name="account" />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  SettingsStack,
},{
  tabBarComponent: props =>(<View style={{
    bottom: 20,
    alignSelf: 'center',
    position: 'absolute',
  }}><BottomTabBar style={{
    height: 75,
    width: ScreenWidth - 100,
    borderTopWidth: 0,
    backgroundColor: colors.tabColor,
    paddingVertical: 10,
    borderRadius: 45,
    elevation: 6,
  }} {...props} /></View>),
  tabBarOptions:{
    activeTintColor: colors.highlightColor,
    inactiveTintColor: '#ccc',
    labelStyle: {
      fontFamily: 'cambay-bold',
      fontSize: 14,
    }
  },
});

tabNavigator.path = '';

export default tabNavigator;
