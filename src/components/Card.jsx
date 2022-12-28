import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, Card, Paragraph, Title } from 'react-native-paper';

const PostCard = ({ title, url, navigate }) => {
  // removing any / from title because title is used as id
  // So whenever there is any / in the title firebase think of it as a two layer data
  // title = title.replaceAll('/', ' ');
  const [newOperation, setNewOperations] = useState(false);
  const [availableData, setAvailableData] = useState({
    icon: 'heart',
    text: 'Add to Fav',
  });

  const validateUrl = (url) => {
    var types = ['jpg', 'jpeg', 'tiff', 'png', 'gif', 'bmp'];
    var parts = url.split('.');
    var extension = parts[parts.length - 1];

    if (types.indexOf(extension) !== -1) {
      return true;
    }
  };

  if (!title) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>{title}</Title>
        </Card.Content>
        {validateUrl(url) && (
          <TouchableOpacity onPress={navigate} activeOpacity={1}>
            <Card.Cover
              style={{ height: 800, resizeMode: 'stretch' }}
              source={{ uri: url }}
            />
          </TouchableOpacity>
        )}

        <Card.Actions>
          <Avatar.Icon size={30} icon={availableData.icon} />
          <Paragraph style={{ marginLeft: 5 }}>{availableData.text}</Paragraph>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: '3%',
    margin: '1%',
  },
  containerStyle: {},
});

export default PostCard;
