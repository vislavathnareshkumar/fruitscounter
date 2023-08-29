import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(preState => ({mango: preState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(preState => ({banana: preState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="maincontainer">
        <div className="small-container">
          <h1 className="heading">
            Bob ate <span className="span">{mango}</span> mangoes{' '}
            <span className="span">{banana}</span> bananas
          </h1>
          <div className="images">
            <div className="image-container1">
              <img
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
              />
              <button onClick={this.eatMango} type="button" className="button">
                Eat Mango
              </button>
            </div>
            <div className="image-container2">
              <img
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
              />
              <button onClick={this.eatBanana} type="button" className="button">
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
