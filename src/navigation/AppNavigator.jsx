import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, ActivityIndicator } from 'react-native';

import { auth } from '../utils/Fiirebase';
import { AuthenticatedUserContext } from './AuthenticatedUserProvider';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator.';
import { NavigationTheme } from '../config/constants';

import * as Linking from 'expo-linking';

const prefix = Linking.createURL('/');

export default function AppNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);

  const [isLoading, setIsLoading] = useState(true);

  const linking = {
    prefixes: [prefix],
  };
  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth.onAuthStateChanged(
      async (authenticatedUser) => {
        try {
          await (authenticatedUser
            ? setUser(authenticatedUser)
            : setUser(null));
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    );

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator
          color={NavigationTheme.colors.primary}
          size='large'
        />
      </View>
    );
  }

  return (
    <NavigationContainer theme={NavigationTheme} linking={linking}>
      {user ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
