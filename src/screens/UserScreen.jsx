import { AntDesign } from '@expo/vector-icons';
import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Appbar, Avatar, Button } from 'react-native-paper';

import { auth } from '../utils/Fiirebase';

import { PaperTheme as theme } from '../config/constants';
import { AuthenticatedUserContext } from '../navigation/AuthenticatedUserProvider';

const UserScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticatedUserContext);

  const _goBack = () => {
    navigation.navigate('HomeScreen');
  };

  const handleLogOut = () => {
    auth.signOut();
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
      </Appbar.Header>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {user.displayName && (
          <View style={styles.headerContainer}>
            <Avatar.Text size={50} label={user.displayName.charAt(0)} />
            <Text
              style={{
                alignSelf: 'center',
                color: theme.colors.backdrop,
                fontSize: 17,
              }}
            >
              {user.displayName}
            </Text>
            <Text style={styles.mail}>
              <AntDesign
                style={{
                  marginRight: 5,
                }}
                name='mail'
                size={16}
                color='black'
              />
              {user.email}
            </Text>
          </View>
        )}

        <Button
          style={{ marginHorizontal: '30%', borderRadius: 10 }}
          mode='contained'
          onPress={handleLogOut}
        >
          Sign Out
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.accent,
  },
  headerContainer: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mail: {},
});
export default UserScreen;
