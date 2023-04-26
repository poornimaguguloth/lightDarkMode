// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  onIncrement = () => {
    this.setState(prevState => {
      return {mango: prevState.mango + 1}
    })
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="text">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="image-container">
            <div className="mango-banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="pic"
                alt="mango"
              />
              <button
                className="click-btn"
                type="button"
                onClick={this.onIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="mango-banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="pic"
                alt="banana"
              />
              <button
                className="click-btn"
                type="button"
                onClick={this.onIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
