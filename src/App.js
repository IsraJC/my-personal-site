import React, {Component} from 'react'
import About from './About'
import Landing from './Landing'
import Nav from './Nav'

class App extends Component {
  render() {
    return (
      <html style={{height:"100vh"}}>
        <div style={{height: "100vh"}}>
          <Landing></Landing>
        </div>
        <div>
          <About></About>
        </div>
      </html>
      
    )
  }
}

export default App