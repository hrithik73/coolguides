import React, { useEffect, useState } from "react"
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  Dimensions,
} from "react-native"
import { Appbar } from "react-native-paper"

import PostCard from "../components/Card"
import { useFetch } from "../hooks/useFetch"
import { theme } from "../constants/constants"

const HomeScreen = ({ navigation }) => {
  const [Data, fetchData] = useFetch()
  const sortByOptions = ["Hot", "New", "Top"]
  const [sortBy, setSortBy] = useState("hot")
  const [windowWidth, setWindowWidth] = useState("")
  console.log(windowWidth)
  // const windowHeight = Dimensions.get("window").height

  useEffect(() => {
    // console.log(auth.currentUser)
    fetchData(sortBy)
  }, [sortBy])

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

  const _handleFavorite = () => console.log("Searching")

  return (
    <>
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
          <Appbar.Action icon="heart" size={30} onPress={_handleFavorite} />
          <Appbar.Action
            icon="account"
            size={30}
            onPress={() => navigation.navigate("User")}
          />
        </Appbar.Header>

        <FlatList
          data={sortByOptions}
          style={{
            // backgroundColor: "red",
            height: "8%",
            paddingLeft: "10%",
            paddingBottom: 1,
            // width: "100%",
          }}
          horizontal={true}
          scrollEnabled
          keyExtractor={(item) => item}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={
                  item.toLowerCase() === sortBy
                    ? [styles.sortby, styles.active]
                    : styles.sortby
                }
                onPress={() => setSortBy(item.toLowerCase())}
              >
                <Text style={styles.sortbyFont}>{item}</Text>
              </TouchableOpacity>
            )
          }}
        />

        <FlatList
          data={Data}
          style={{ marginTop: 10, height: "100%" }}
          keyExtractor={(item) => item.data.title}
          renderItem={(item) => (
            <PostCard
              // key={item.item.data.title}
              data={item}
              navigate={() => navigation.navigate("Details", item.item.data)}
            />
          )}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.accent,
    // marginHorizontal: Platform.OS === "web" ? "10%" : "0%",
  },
  styleFOrWeb: {},
  active: {
    backgroundColor: theme.colors.primary,
  },
  headerStyle: {
    // flex: 1,
    height: "4%",
    flexDirection: "row",
    paddingTop: "2%",
    alignContent: "center",
    justifyContent: "flex-end",
  },
  sortby: {
    flex: 1,
    backgroundColor: "white",
    height: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    // paddingBottom: 10,
    marginLeft: 20,
    borderRadius: 15,
    margin: 10,
  },
  sortbyFont: {
    fontSize: 17,
    fontWeight: "700",
  },
})
export default HomeScreen
