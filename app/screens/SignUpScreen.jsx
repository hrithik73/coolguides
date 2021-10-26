import React, { useState } from "react"
import { View, StyleSheet, Platform } from "react-native"
import { TextInput, Button, Text } from "react-native-paper"

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [name, setName] = useState("")

  const handleSignUp = () => {}

  return (
    <View style={styles.container}>
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
    marginVertical: "30%",
    // backgroundColor: "red",
    paddingTop: Platform.OS === "web" ? "" : "10%",
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
