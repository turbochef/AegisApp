import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AuthStack = createStackNavigator({ 
  SignIn: SignInScreen,
  SignUp: SignUpScreen,
 },
 {
   initialRouteName: "SignIn"
 });

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: MainTabNavigator,
  },{
    initialRouteName: 'AuthLoading',
  })
);
