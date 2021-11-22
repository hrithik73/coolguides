import { Provider as PaperProvider } from "react-native-paper"
import * as React from "react"
import { Platform } from "react-native"

import { theme } from "./src/config/constants"
import Routes from "./src/navigation"
import * as serviceWorkerRegistration from "./src/serviceWorkerRegistration"

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  )
}

if (Platform.OS === "web") {
  serviceWorkerRegistration.register()
}
