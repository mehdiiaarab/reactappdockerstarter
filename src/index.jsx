import React from "react"
import { hot } from "react-hot-loader"
import { render } from "react-dom"
import "./style"

const App = () => {
  return (
    <div>
      <h3>Hello World</h3>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Florida_Box_Turtle_Digon3_re-edited.jpg/1200px-Florida_Box_Turtle_Digon3_re-edited.jpg"/>
    </div>
  )
}

export default hot(module)(App)

render(<App />, document.getElementById("root"))
