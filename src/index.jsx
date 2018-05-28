import React from "react"
import { hot } from "react-hot-loader"
import { render } from "react-dom"
import "./style"

const App = () => <h3>Hello World</h3>

export default hot(module)(App)

render(<App />, document.getElementById("root"))
