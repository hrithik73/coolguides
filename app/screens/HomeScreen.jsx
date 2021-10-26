import React, { useEffect, useState } from "react"
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native"
import { StatusBar } from "expo-status-bar"
import { Appbar, Avatar, Paragraph, Dialog, Portal } from "react-native-paper"

import PostCard from "../components/Card"
import { app } from "../utils/Fiirebase"
import { useFetch } from "../hooks/useFetch"

const HomeScreen = ({ navigation }) => {
  const [Data, fetchData] = useFetch()
  // const [isWeb, setIsWeb] = useState(false)
  const sortByOptions = ["Hot", "New", "Top"]
  const [sortBy, setSortBy] = useState("hot")
  const [count, setCount] = useState(20)

  useEffect(() => {
    console.log(Platform.OS)
    fetchData(sortBy)
  }, [sortBy])

  if (!Data) {
    return null
  }

  const _handleFavorite = () => console.log("Searching")

  return (
    <>
      {/* <StatusBar backgroundColor="black" /> */}
      <View style={styles.container}>
        <Appbar.Header style={styles.headerStyle}>
          <Appbar.Action icon="heart" size={30} onPress={_handleFavorite} />
          <Appbar.Action
            icon="account"
            size={30}
            onPress={() => navigation.navigate("LogIn")}
          />
        </Appbar.Header>
        <FlatList
          data={sortByOptions}
          style={{
            height: "7%",
            paddingLeft: 20,
            paddingBottom: 1,
            // width: "100%",
            // backgroundColor: "red",
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
          keyExtractor={(item) => item.data.title}
          renderItem={(item) => (
            <PostCard
              // key={item.item.data.title}
              data={item}
              navigation={() => navigation.navigate("Details", item.item.data)}
            />
          )}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: "#1de9b6",
  },
  container: {
    flex: 1,
    backgroundColor: "#E9F7E9",
    paddingTop: Platform.OS === "web" ? "" : "5%",
  },
  headerStyle: {
    // flex: 1,
    height: "4%",
    flexDirection: "row",
    paddingTop: Platform.OS === "web" ? "2%" : "0%",
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
