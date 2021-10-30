import { StatusBar } from "expo-status-bar"
import React, { useContext } from "react"
import { View, StyleSheet, Text, Platform } from "react-native"
import { Avatar, Button, Appbar } from "react-native-paper"

import { getAuth, onAuthStateChanged } from "firebase/auth"
import { app } from "../utils/Fiirebase"
import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider"
import { theme } from "../constants/constants"

const UserScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticatedUserContext)
  console.log(user.uid)

  const auth = getAuth(app)

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     // User is signed in, see docs for a list of available properties
  //     // https://firebase.google.com/docs/reference/js/firebase.User
  //     const uid = user.uid
  //     // ...
  //   } else {
  //     // User is signed out
  //     // ...
  //   }
  // })

  const _goBack = () => {
    navigation.navigate("Home")
  }

  const _handleSearch = () => console.log("Searching")

  const _handleMore = () => console.log("Shown more")

  const handleLogOut = () => {
    auth.signOut()
  }

  return (
    <View style={styles.container}>
      <Appbar.Header
        style={{
          height: "4%",
          paddingTop: "2%",
        }}
      >
        <Appbar.BackAction onPress={_goBack} />
      </Appbar.Header>

      {user.displayName && (
        <View style={styles.headerContainer}>
          <Avatar.Text size={50} label={user.displayName.charAt(0)} />
          <Text
            style={{
              alignSelf: "center",
              color: theme.colors.backdrop,
              fontSize: 17,
            }}
          >
            {user.displayName}
          </Text>
        </View>
      )}

      <Button
        style={{ marginHorizontal: "20%", borderRadius: 10 }}
        mode="contained"
        onPress={handleLogOut}
      >
        Sign Out
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.accent,
  },
  headerContainer: {
    // flex: 1,
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
})
export default UserScreen
