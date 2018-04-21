import React from 'react'
import {Link} from 'react-router-dom'

import GiftsInfo from './GiftsInfo'
import PropertyInfo from './PropertyInfo'
import AddGift from './AddGift'
import AddRecipient from './AddRecipient'

class Final extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showGiftsInfo: false,
      showPropertyInfo: false,
      addNewGift: false,
      addRecipient: false
    }
    this.toggleGiftsInfo = this.toggleGiftsInfo.bind(this)
    this.togglePropertyInfo = this.togglePropertyInfo.bind(this)
    this.addNewGift = this.addNewGift.bind(this)
    this.addRecipient = this.addRecipient.bind(this)
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

  addNewGift () {
    this.setState({
      addNewGift: true
    })
  }

  addRecipient () {
    this.setState({
      addRecipient: true
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
          <button onClick={this.addNewGift}>Add a gift</button>
          {this.state.addNewGift ? <AddGift /> : null}

          <h3>Remaining property</h3>
          <button onClick={this.togglePropertyInfo}>?</button>
          {this.state.showPropertyInfo ? <PropertyInfo /> : null}
          <p>
            Full name of recipient: <input name='name' />
            Relationship to recipient: <input name='name' />
            Share of remaining property: <input name='name' />
          </p>
          <button onClick={this.addRecipient}>Add recipient</button>
          {this.state.addRecipient ? <AddRecipient /> : null}
        </div>
        <div>
          <button><Link to='/will/final'>Next</Link></button>
        </div>
      </div>
    )
  }
}

export default Final
