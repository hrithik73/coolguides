import * as React from "react"
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper"
import { NavigationContainer } from "@react-navigation/native"

// import StackNaigator from "./app/navigation/HomeNavigator."

import Routes from "./app/navigation"
const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#1de9b6",
    accent: "##663bb7",
  },
}

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  )
}

export default App
