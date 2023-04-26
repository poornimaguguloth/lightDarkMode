// Write your code here
import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="header">The Button has been clicked <span className="number">{count}</span> times</h1>

        <p className="para">Click the button to increase the count!</p>
        <button
          className="click-me-btn"
          onClick={this.onIncrement}
          type="button"
        >
          Click Me
        </button>
      </div>
    )
  }
}
export default ClickCounter
