import * as React from "react"
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper"
import { theme } from "./app/constants/constants"

import Routes from "./app/navigation"
// const theme = {
//   ...DefaultTheme,
//   roundness: 2,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: "#1de9b6",
//     accent: "##663bb7",
//   },
// }

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  )
}

export default App
