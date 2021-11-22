import * as React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AntDesign } from "@expo/vector-icons"
import { Dimensions, Platform } from "react-native"

import StackNavigator from "./StackNavigator"
import UserScreen from "../screens/UserScreen"
import FavScreen from "../screens/FavScreen"
import { theme } from "../config/constants"

const Tab = createBottomTabNavigator()

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: theme.colors.accent,
        tabBarActiveBackgroundColor: theme.colors.primary,
        tabBarStyle: {
          paddingHorizontal: Dimensions.get("window").width > 800 ? "20%" : 0,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{ tabBarIcon: () => <AntDesign name="home" size={24} /> }}
      />
      <Tab.Screen
        name="Fav"
        component={FavScreen}
        options={{ tabBarIcon: () => <AntDesign name="heart" size={24} /> }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: () => <AntDesign name="user" size={24} />,
        }}
      />
    </Tab.Navigator>
  )
}
export default HomeNavigator
