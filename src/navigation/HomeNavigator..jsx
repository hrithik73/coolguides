import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { Dimensions, Platform } from 'react-native';

import StackNavigator from './StackNavigator';
import UserScreen from '../screens/UserScreen';
import FavScreen from '../screens/FavScreen';
import { NavigationTheme } from '../config/constants';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingHorizontal: Dimensions.get('window').width > 800 ? '20%' : 0,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name='Home'
        component={StackNavigator}
        options={{
          tabBarIcon: (props) => <AntDesign name='home' {...props} />,
        }}
      />
      <Tab.Screen
        name='Fav'
        component={FavScreen}
        options={{
          tabBarIcon: (props) => <AntDesign name='heart' {...props} />,
        }}
      />
      <Tab.Screen
        name='User'
        component={UserScreen}
        options={{
          tabBarIcon: (props) => <AntDesign name='user' {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default HomeNavigator;
