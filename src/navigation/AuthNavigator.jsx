import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogInScreen from '../screens/LogInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Auth = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Auth.Navigator screenOptions={{ headerShown: false }}>
      <Auth.Screen component={LogInScreen} name='LogIn' />
      <Auth.Screen component={SignUpScreen} name='SignUp' />
    </Auth.Navigator>
  );
};

export default AuthNavigator;
