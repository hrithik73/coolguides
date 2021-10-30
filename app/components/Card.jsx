import React from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Avatar, Card, Title, Paragraph } from "react-native-paper"

//Firebase imports
import { getFirestore, doc, setDoc, collection } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const auth = getAuth()
const db = getFirestore()

const PostCard = ({ data, navigate }) => {
  const title = data.item.data.title
  const url = data.item.data.url

  const validateUrl = (url) => {
    var types = ["jpg", "jpeg", "tiff", "png", "gif", "bmp"]
    var parts = url.split(".")
    var extension = parts[parts.length - 1]

    if (types.indexOf(extension) !== -1) {
      return true
    }
  }

  const addToFav = async (title, url) => {
    const userRef = doc(collection(db, "Users", auth.currentUser.uid, "Fav"))

    try {
      await setDoc(userRef, {
        title,
        url,
      })

      // console.log(docRef)
      console.log("Added SuKESSSFULLY")
    } catch (e) {
      console.error("Error adding document: ", e)
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.container}>
          <Card>
            <Card.Content>
              <Title>{title}</Title>
            </Card.Content>
            {validateUrl(url) && (
              <TouchableOpacity onPress={navigate} activeOpacity={1}>
                <Card.Cover
                  style={{ height: 600, resizeMode: "stretch" }}
                  source={{ uri: url }}
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => addToFav(title, url)}>
              <Card.Actions>
                <Avatar.Icon size={30} icon="heart" />
                <Paragraph style={{ marginLeft: 5 }}>Add to Fav</Paragraph>
              </Card.Actions>
            </TouchableOpacity>
          </Card>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: "3%",
    margin: "1%",
  },
  containerStyle: {
    // backgroundColor: "white",
    // padding: 20,
  },
})

export default PostCard
