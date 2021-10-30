import React, { useEffect, useState } from "react"
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { Avatar, Card, Title, Paragraph } from "react-native-paper"

import { auth, db } from "../utils/Fiirebase"

const PostCard = ({ title, url, navigate }) => {
  // const [isAvailable, setIsAvailable] = useState(false)
  const [newOperation, setNewOperations] = useState(false)
  const [availableData, setAvailableData] = useState({
    icon: "heart",
    text: "Add to Fav",
  })

  const validateUrl = (url) => {
    var types = ["jpg", "jpeg", "tiff", "png", "gif", "bmp"]
    var parts = url.split(".")
    var extension = parts[parts.length - 1]

    if (types.indexOf(extension) !== -1) {
      return true
    }
  }
  const addToFav = async (title, url) => {
    db.collection("Users")
      .doc(auth.currentUser.uid)
      .collection("Fav")
      .doc(title)
      .set({
        url,
        title,
        timeInterval: new Date().getTime(),
      })
      .then(() => {
        setNewOperations(true)
        console.log("Document successfully written!")
      })
      .catch((error) => {
        console.error("Error writing document: ", error)
      })

    console.log("SucessFull")
  }

  //! Checks if this post exist
  const readData = async () => {
    var docRef = db
      .collection("Users")
      .doc(auth.currentUser.uid)
      .collection("Fav")
      .doc(title)

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          // setIsAvailable(true)
          setAvailableData({ icon: "cancel", text: "Remove from Fav" })
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!")
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error)
      })
  }

  const deleteData = async (title) => {
    db.collection("Users")
      .doc(auth.currentUser.uid)
      .collection("Fav")
      .where("title", "==", title)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs[0].ref.delete()
        setAvailableData({ icon: "heart", text: "Add To Fav" })
      })
  }

  useEffect(() => {
    readData()
  }, [newOperation])

  if (!title) {
    return null
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
            <TouchableOpacity
              onPress={
                availableData.icon === "heart"
                  ? () => addToFav(title, url)
                  : () => deleteData(title)
              }
            >
              <Card.Actions>
                <Avatar.Icon size={30} icon={availableData.icon} />
                <Paragraph style={{ marginLeft: 5 }}>
                  {availableData.text}
                </Paragraph>
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
  containerStyle: {},
})

export default PostCard
