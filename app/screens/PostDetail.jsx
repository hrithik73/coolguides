import React, { FC, useState } from "react"
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  ImageBackground,
  Modal,
} from "react-native"
import ImageViewer from "react-native-image-zoom-viewer"

const PostDetail = ({ route, navigation }) => {
  console.log(Platform)

  const images = [
    {
      url: route.params.url,
      // width: number
      // height: number
      // Optional, if you know the image size, you can set the optimization performance
    },
  ]

  const backHandler = () => {
    setVisivle(false)
    navigation.goBack()
  }

  const [visible, setVisivle] = useState(true)

  return (
    // <View style={styles.container}>
    <Modal
      style={styles.container}
      visible={visible}
      transparent={true}
      onRequestClose={backHandler}
    >
      <ImageViewer
        // renderIndicator={(currentIndex?: number, allSize?) => (
        //   <Text>{currentIndex}</Text>
        // )}
        imageUrls={images}
      />
    </Modal>
    // </View>
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
    // padding: 20,
    // margin: 20,
  },
})
export default PostDetail
