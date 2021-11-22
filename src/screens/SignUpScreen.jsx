import { View, StyleSheet, Platform, Dimensions } from "react-native"
import React, { useContext, useState, useEffect } from "react"
import { TextInput, Button, Text, HelperText } from "react-native-paper"

import { auth, db } from "../utils/Fiirebase"
import { theme } from "../config/constants"

const SignUpScreen = ({ navigation }) => {
  // const { user, setUser } = useContext(AuthenticatedUserContext)

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [name, setName] = useState("")
  const [windowWidth, setWindowWidth] = useState("")
  const [hasErrors, setHasError] = useState(false)
  const [securePass, setSecurepass] = useState(true)

  useEffect(() => {
    setWindowWidth(Dimensions.get("window").width)
  }, [windowWidth])

  const handleSignUp = async (email, pass, name) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, pass)
      const user = res.user
      // auth.currentUser.displayName =
      user.updateProfile({
        displayName: name,
      })
      await db
        .collection("Users")
        .doc(auth.currentUser.uid)
        .collection("Details")
        .add({
          uid: user.uid,
          name,
          authProvider: "local",
          email,
        })
    } catch (err) {
      console.error(err)
      alert(err.message)
    }
  }

  return (
    <View
      style={[
        styles.container,
        Platform.OS === "web"
          ? {
              marginHorizontal: windowWidth > 800 ? windowWidth * 0.2 : 0,
            }
          : "",
      ]}
    >
      <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
        SIGNUP
      </Text>

      <TextInput
        label="Name"
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        label="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <HelperText type="error" visible={hasErrors}>
        Email address is invalid!
      </HelperText>
      <TextInput
        style={styles.input}
        label="Password"
        value={pass}
        secureTextEntry={securePass}
        right={
          <TextInput.Icon
            name={securePass ? "eye-off" : "eye"}
            onPress={() => setSecurepass(!securePass)}
          />
        }
        onChangeText={(text) => setPass(text)}
      />
      <HelperText type="error" visible={hasErrors}>
        Password Must be minimun of 6 charactor
      </HelperText>
      <View style={styles.bntContainer}>
        <Button
          style={styles.buttonStyle}
          mode="contained"
          onPress={() => handleSignUp(email, pass, name)}
        >
          SignUp
        </Button>
        <Text style={{ alignSelf: "center" }}>OR</Text>
        <Button
          style={styles.buttonStyle}
          mode="contained"
          onPress={() => navigation.navigate("LogIn")}
        >
          LogIn
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "10%",
    backgroundColor: theme.colors.accent,
    paddingTop: Platform.OS === "web" ? "" : "50%",
  },
  buttonStyle: {
    alignSelf: "center",
    marginVertical: "4%",
    width: "40%",
  },
  input: {
    marginVertical: "2%",
  },
})
export default SignUpScreen
