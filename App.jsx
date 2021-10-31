import * as React from "react"
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper"

import { theme } from "./src/constants/constants"
import Routes from "./src/navigation"
import * as serviceWorkerRegistration from "./src/serviceWorkerRegistration"

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  )
}

export default App
serviceWorkerRegistration.register()
