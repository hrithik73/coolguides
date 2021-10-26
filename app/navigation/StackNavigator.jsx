import * as React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "../screens/HomeScreen"
import PostCard from "../components/Card"
import PostDetail from "../screens/PostDetail"
import LogInScreen from "../screens/LogInScreen"
import SignUpScreen from "../screens/SignUpScreen"

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={LogInScreen} name="LogIn" />
      <Stack.Screen component={SignUpScreen} name="SignUp" />
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={PostCard} name="Card" />
      <Stack.Screen component={PostDetail} name="Details" />
    </Stack.Navigator>
  )
}
export default StackNavigator
