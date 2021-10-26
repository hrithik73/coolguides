import React, { useState } from "react"
import { View, StyleSheet, Platform } from "react-native"
import { TextInput, Button, Text } from "react-native-paper"

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { app } from "../utils/Fiirebase"

const LogInScreen = ({ navigation }) => {
  const auth = getAuth(app)

  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const handleLogIn = async (email, pass) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log({ errorCode }, { errorMessage })
        // ..
      })
  }

  return (
    <View style={styles.container}>
      <TextInput
        label="Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        label="Password"
        value={pass}
        onChangeText={(text) => setPass(text)}
      />
      <View style={styles.bntContainer}>
        <Button
          style={styles.buttonStyle}
          mode="contained"
          onPress={() => handleLogIn(email, pass)}
        >
          LogIn
        </Button>
        <Text style={{ alignSelf: "center" }}>OR</Text>
        <Button
          style={styles.buttonStyle}
          mode="contained"
          onPress={() => navigation.navigate("SignUp")}
        >
          SignUp
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "10%",
    marginVertical: "30%",
    // backgroundColor: "red",
    paddingTop: Platform.OS === "web" ? "" : "10%",
  },
  buttonStyle: {
    alignSelf: "center",
    marginVertical: "4%",
  },
  bntContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    marginVertical: "2%",
  },
})
export default LogInScreen
