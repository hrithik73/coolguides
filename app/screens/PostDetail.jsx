import React, { FC, useState } from "react"
import { StyleSheet, Platform, Modal } from "react-native"
import ImageViewer from "react-native-image-zoom-viewer"
import { Button } from "react-native-paper"

const PostDetail = ({ route, navigation }) => {
  const images = [
    {
      url: route.params.url,
    },
  ]

  const backHandler = () => {
    setVisivle(false)
    navigation.goBack()
  }

  const [visible, setVisivle] = useState(true)

  return (
    <Modal
      style={styles.container}
      visible={visible}
      transparent={true}
      onRequestClose={backHandler}
    >
      <Button mode="contained" icon="close" onPress={backHandler}></Button>
      <ImageViewer
        // renderIndicator={(currentIndex?: number, allSize?) => (
        //   <Text>{currentIndex}</Text>
        // )}
        imageUrls={images}
      />
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "red",
  },
})
export default PostDetail
