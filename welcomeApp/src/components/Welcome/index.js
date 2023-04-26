// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: true,
  }

  renderSubscribeButton = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      return (
        <button className="sub-btn" type="button">
          Subscribe
        </button>
      )
    }
    return (
      <button className="sub-btn" type="button">
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="header">Welcome</h1>
        <p className="description">Thank You! Happy Learning</p>
        {this.renderSubscribeButton()}
      </div>
    )
  }
}
export default Welcome
