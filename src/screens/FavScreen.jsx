import React, { useEffect, useState } from "react"
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Platform,
  Dimensions,
} from "react-native"
import { theme } from "../config/constants"
import { Appbar } from "react-native-paper"

import PostCard from "../components/Card"

import { auth, db } from "../utils/Fiirebase"

const FavScreen = ({ navigation }) => {
  const [Data, setData] = useState([])
  const [windowWidth, setWindowWidth] = useState()
  // console.log(Data)

  const getData = async () => {
    db.collection("Users")
      .doc(auth.currentUser.uid)
      .collection("Fav")
      .orderBy("timeInterval")
      .get()
      .then((querySnapshot) => {
        const tempDoc = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() }
        })
        setData(tempDoc)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    setWindowWidth(Dimensions.get("window").width)
  }, [windowWidth])

  if (!Data) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    )
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
      <Appbar.Header style={styles.headerStyle}>
        <Appbar.BackAction onPress={() => navigation.navigate("HomeScreen")} />
        <Appbar.Action
          icon="account"
          size={30}
          onPress={() => navigation.navigate("User")}
        />
      </Appbar.Header>

      {!Data ? (
        <ActivityIndicator
          size="large"
          style={{ position: "absolute", top: "15%", left: "40%" }}
          color={theme.colors.primary}
        />
      ) : (
        <FlatList
          data={Data}
          style={{ marginTop: 10, height: "100%" }}
          keyExtractor={(item) => item.title}
          renderItem={(item) => (
            <PostCard
              title={item.item.title}
              url={item.item.url}
              navigate={() => navigation.navigate("Details", item.item)}
            />
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.accent,
  },
  active: {
    backgroundColor: theme.colors.primary,
  },
  headerStyle: {
    justifyContent: "space-between",
  },
  sortby: {
    flex: 1,
    backgroundColor: "white",
    height: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginLeft: 20,
    borderRadius: 15,
    margin: 10,
  },
  sortbyFont: {
    fontSize: 17,
    fontWeight: "700",
  },
})
export default FavScreen
