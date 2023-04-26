// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onChange = () => {
    const {isDarkMode} = this.state

    if (isDarkMode === true) {
      return (
        <button className="change-btn" type="button">
          Light Mode
        </button>
      )
    }
    return (
      <button className="change-btn" type="button">
        Dark Mode
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="header">Click To Change Mode</h1>
          {this.onChange()}
        </div>
      </div>
    )
  }
}
export default LightDarkMode
