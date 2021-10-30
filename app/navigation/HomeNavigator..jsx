import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../screens/HomeScreen"
import PostCard from "../components/Card"
import PostDetail from "../screens/PostDetail"
import UserScreen from "../screens/UserScreen"
import FavScreen from "../screens/FavScreen"

const Stack = createNativeStackNavigator()

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={PostCard} name="Card" />
      <Stack.Screen component={PostDetail} name="Details" />
      <Stack.Screen component={UserScreen} name="User" />
      <Stack.Screen component={FavScreen} name="Fav" />
    </Stack.Navigator>
  )
}
export default HomeNavigator
