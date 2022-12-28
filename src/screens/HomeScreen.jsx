import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Appbar } from 'react-native-paper';

import PostCard from '../components/Card';
import { NavigationTheme as theme } from '../config/constants';
import { useFetch } from '../hooks/useFetch';

const HomeScreen = ({ navigation }) => {
  const [Data, isLoading, fetchData] = useFetch();
  const sortByOptions = ['Hot', 'New', 'Top'];
  const [sortBy, setSortBy] = useState('hot');
  const [windowWidth, setWindowWidth] = useState('');

  useEffect(() => {
    // console.log(auth.currentUser)
    fetchData(sortBy);
  }, [sortBy]);

  return (
    <>
      <View style={styles.container}>
        <Appbar.Header style={styles.headerStyle}>
          <Appbar.Action
            icon='heart'
            size={30}
            onPress={() => navigation.navigate('Fav')}
          />
          <Appbar.Action
            icon='account'
            size={30}
            onPress={() => navigation.navigate('User')}
          />
        </Appbar.Header>

        <FlatList
          data={sortByOptions}
          style={{
            // backgroundColor: "blue",
            // width: "100%",
            height: '8%',
            paddingLeft: '10%',
            paddingBottom: 1,
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
            );
          }}
        />

        {!isLoading ? (
          <FlatList
            data={Data}
            style={{ marginTop: 10, height: '100%' }}
            keyExtractor={(item) => item.data.title}
            renderItem={(item) => (
              <PostCard
                title={item.item.data.title}
                url={item.item.data.url}
                navigate={() => navigation.navigate('Details', item.item.data)}
              />
            )}
          />
        ) : (
          <ActivityIndicator
            size='large'
            style={{ position: 'absolute', top: '15%', left: '40%' }}
            color={theme.colors.primary}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.accent,
  },
  active: {
    backgroundColor: theme.colors.primary,
  },
  headerStyle: {
    flexDirection: 'row',
    paddingTop: '2%',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  sortby: {
    flex: 1,
    backgroundColor: 'white',
    height: 30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginLeft: 20,
    borderRadius: 15,
    margin: 10,
  },
  sortbyFont: {
    fontSize: 17,
    fontWeight: '700',
  },
});
export default HomeScreen;
