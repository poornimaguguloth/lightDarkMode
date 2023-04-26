// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      return {count: prevState.count + 10}
    })
  }

  onDecrement = () => {
    this.setState(prevState => {
      return {count: prevState.count - 10}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="speedometer-bg-container">
        <h1 className="speedometer-header">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer-icon"
          alt="speedometer"
        />
        <p className="speed-text">Speed is {count}mph</p>
        <p className="speedometer-text">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="button-container">
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="apply-brake-btn"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
