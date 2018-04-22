import React from 'react'
import {Link} from 'react-router-dom'

import GiftsInfo from './GiftsInfo'
import PropertyInfo from './PropertyInfo'
import AddGift from './AddGift'
import AddRecipient from './AddRecipient'

import SubRecipient from './SubRecipient'

class Distribution extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showGiftsInfo: false,
      showPropertyInfo: false,
      addGift: 0,
      addRecipient: 0,
      subRecipient: false
    }
    this.toggleGiftsInfo = this.toggleGiftsInfo.bind(this)
    this.togglePropertyInfo = this.togglePropertyInfo.bind(this)
    this.addGift = this.addGift.bind(this)
    this.removeGift = this.removeGift.bind(this)
    this.displayGift = this.displayGift.bind(this)
    this.addRecipient = this.addRecipient.bind(this)
    this.removeRecipient = this.removeRecipient.bind(this)
    this.displayRecipient = this.displayRecipient.bind(this)
    this.subRecipient = this.subRecipient.bind(this)
  }

  toggleGiftsInfo () {
    this.setState({
      showGiftsInfo: !this.state.showGiftsInfo
    })
  }

  togglePropertyInfo () {
    this.setState({
      showPropertyInfo: !this.state.showPropertyInfo
    })
  }

  addGift () {
    this.setState({
      addGift: this.state.addGift + 1
    })
  }
  removeGift () {
    this.setState({
      addGift: this.state.addGift - 1
    })
  }

  displayGift () {
    let gifts = []
    for (let i = 0; i < this.state.addGift; i++) {
      gifts.push(
        <div key={i}>
          <AddGift />
        </div>
      )
    }
    return gifts
  }

  addRecipient () {
    this.setState({
      addRecipient: this.state.addRecipient + 1
    })
  }

  removeRecipient () {
    this.setState({
      addRecipient: this.state.addRecipient - 1
    })
  }

  displayRecipient () {
    let recipients = []
    for (let i = 0; i < this.state.addRecipient; i++) {
      recipients.push(
        <div key={i}>
          <AddRecipient />
        </div>
      )
    }
    return recipients
  }

  subRecipient () {
    this.setState({
      subRecipient: true
    })
  }

  render () {
    return (
      <div className='name'>
        <div>
          <h3>Specific gift(s)</h3>
          <button onClick={this.toggleGiftsInfo}>?</button>
          {this.state.showGiftsInfo ? <GiftsInfo /> : null}
          <p>
            Item description: <input name='name' />
            Full name of recipient: <input name='name' />
            Relationship to recipient: <input name='name' />
          </p>
          <button onClick={this.addGift}>Add a gift</button>
          <button onClick={this.removeGift}>Remove last gift</button>
          {this.displayGift()}

          <h3>Remaining property</h3>
          <button onClick={this.togglePropertyInfo}>?</button>
          {this.state.showPropertyInfo ? <PropertyInfo /> : null}
          <p>
            Full name of recipient: <input name='name' />
            Relationship to recipient: <input name='name' />
            Share of remaining property: <input name='name' />
            <button onClick={this.subRecipient}>Substitute recipient(s)</button>
            {this.state.subRecipient ? <SubRecipient /> : null}

          </p>
          <button onClick={this.addRecipient}>Add recipient</button>
          <button onClick={this.removeRecipient}>Remove last recipient</button>
          {this.displayRecipient()}
        </div>
        <div>
          <button><Link to='/will/final'>Next</Link></button>
        </div>
      </div>
    )
  }
}

export default Distribution
