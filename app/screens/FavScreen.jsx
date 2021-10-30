import React from "react"
import { View, StyleSheet, Text } from "react-native"
import { theme } from "../constants/constants"

const FavScreen = () => {
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
        <Appbar.Action
          icon="heart"
          size={30}
          onPress={() => navigation.navigate("Fav")}
        />
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
            data={item}
            navigate={() => navigation.navigate("Details", item.item.data)}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.accent,
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
