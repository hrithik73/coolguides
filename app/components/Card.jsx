import React, { FC } from "react"
import { View, StyleSheet } from "react-native"
import { Avatar, Card, Title, Paragraph } from "react-native-paper"

const PostCard = ({ data, navigation }) => {
  const validateUrl = (url) => {
    var types = ["jpg", "jpeg", "tiff", "png", "gif", "bmp"]
    var parts = url.split(".")
    var extension = parts[parts.length - 1]

    if (types.indexOf(extension) !== -1) {
      return true
    }
  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.container}>
          <Card onPress={navigation}>
            <Card.Content>
              <Title>{data.item.data.title}</Title>
            </Card.Content>
            {validateUrl(data.item.data.url) && (
              <Card.Cover
                style={{ height: 600, resizeMode: "stretch" }}
                source={{ uri: data.item.data.url }}
              />
            )}
            <Card.Actions>
              <Avatar.Icon size={30} icon="heart" />
              <Paragraph style={{ marginLeft: 5 }}>Add to Fav</Paragraph>
            </Card.Actions>
          </Card>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    padding: "3%",
    margin: "1%",
  },
  containerStyle: {
    // backgroundColor: "white",
    // padding: 20,
  },
})

export default PostCard
