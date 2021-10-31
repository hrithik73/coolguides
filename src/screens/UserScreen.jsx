import React, { useContext, useState, useEffect } from "react"
import { View, StyleSheet, Text, Platform, Dimensions } from "react-native"
import { Avatar, Button, Appbar } from "react-native-paper"
import { MaterialIcons } from "@expo/vector-icons"

import { auth } from "../utils/Fiirebase"

import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider"
import { theme } from "../constants/constants"

const UserScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticatedUserContext)
  // console.log(user.uid)
  const [windowWidth, setWindowWidth] = useState("")

  useEffect(() => {
    setWindowWidth(Dimensions.get("window").width)
  }, [windowWidth])

  const _goBack = () => {
    navigation.navigate("HomeScreen")
  }

  const handleLogOut = () => {
    auth.signOut()
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
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
      </Appbar.Header>

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
            <Text style={styles.mail}>
              <MaterialIcons name="email" size={16} color="black" />{" "}
              {user.email}
            </Text>
          </View>
        )}

        <Button
          style={{ marginHorizontal: "30%", borderRadius: 10 }}
          mode="contained"
          onPress={handleLogOut}
        >
          Sign Out
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.accent,
  },
  headerContainer: {
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  mail: {
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    fontSize: 16,
  },
})
export default UserScreen
