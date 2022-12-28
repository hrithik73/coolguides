import React, { useEffect, useState } from 'react';
import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { Button, HelperText, Text, TextInput } from 'react-native-paper';

// import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider"
import { NavigationTheme } from '../config/constants';

import { auth } from '../utils/Fiirebase';

const LogInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [windowWidth, setWindowWidth] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [securePass, setSecurepass] = useState(true);

  const handleLogIn = async (email, pass) => {
    try {
      await auth.signInWithEmailAndPassword(email, pass);
    } catch (err) {
      console.error(err);
      setHasError(true);
    }
  };

  useEffect(() => {
    setWindowWidth(Dimensions.get('window').width);
  }, [windowWidth]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }}>
        LOGIN
      </Text>

      <TextInput
        label='Email'
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        secureTextEntry={securePass}
        style={styles.input}
        label='Password'
        value={pass}
        onChangeText={(text) => setPass(text)}
        right={
          <TextInput.Icon
            name={securePass ? 'eye-off' : 'eye'}
            onPress={() => setSecurepass(!securePass)}
          />
        }
      />
      <HelperText type='error' visible={hasError}>
        Wrong PassWord
      </HelperText>
      <View style={styles.bntContainer}>
        <Button
          style={styles.buttonStyle}
          mode='contained'
          onPress={() => handleLogIn(email, pass)}
        >
          LogIn
        </Button>
        <Text style={{ alignSelf: 'center' }}>OR</Text>
        <Button
          style={styles.buttonStyle}
          mode='contained'
          onPress={() => navigation.navigate('SignUp')}
        >
          SignUp
        </Button>
      </View>
      <Button onPress={() => auth.signInAnonymously()}>Guest Login</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '10%',
    backgroundColor: NavigationTheme.colors.accent,
    paddingTop: Platform.OS === 'web' ? '' : '50%',
  },
  buttonStyle: {
    alignSelf: 'center',
    marginVertical: '4%',
  },
  bntContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    marginVertical: '2%',
    borderRadius: 10,
  },
});
export default LogInScreen;
