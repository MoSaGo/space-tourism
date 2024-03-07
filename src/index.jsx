import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ThemeProvider } from "styled-components"
import defaultTheme from "./styles/theme"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./redux/store"

const node = document.getElementById("app")

const root = ReactDOM.createRoot(node)

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return
  }
  const { worker } = await import("./mocks/browser")
  return worker.start()
}
/*
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line no-undef
  const { worker } = require("./mocks/browser")
  worker.start()
}
*/
enableMocking().then(() => {
  root.render(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>,
  )
})
