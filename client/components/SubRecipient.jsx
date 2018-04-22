import React from 'react'
// import {Link} from 'react-router-dom'

// import SubRecipientInfo from './SubRecipientInfo'
import AddSubRecipient from './AddSubRecipient'

class SubRecipient extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      // showSubRecipientInfo: false,
      addSubRecipient: 0
    }
    // this.toggleSubRecipientInfo = this.toggleSubRecipientInfo.bind(this)
    this.addSubRecipient = this.addSubRecipient.bind(this)
    this.removeSubRecipient = this.removeSubRecipient.bind(this)
    this.displaySubRecipient = this.displaySubRecipient.bind(this)
  }

  // toggleSubRecipientInfo () {
  //   this.setState({
  //     showSubRecipientInfo: !this.state.showSubRecipientInfo
  //   })
  // }

  addSubRecipient () {
    this.setState({
      addSubRecipient: this.state.addSubRecipient + 1
    })
  }

  removeSubRecipient () {
    this.setState({
      addSubRecipient: this.state.addSubRecipient - 1
    })
  }

  displaySubRecipient () {
    let subRecipients = []
    for (let i = 0; i < this.state.addSubRecipient; i++) {
      subRecipients.push(
        <div key={i}>
          <AddSubRecipient />
        </div>
      )
    }
    return subRecipients
  }

  render () {
    return (
      <div className='subRecipient'>
        <h4>Substitute recipient(s)</h4>
        {/* <button onClick={this.toggleSubRecipientInfo}>?</button>
        {this.state.showGiftsInfo ? <SubRecipientInfo /> : null} */}
        <p>
          Full name of recipient: <input name='name' />
          Relationship to recipient: <input name='name' />
          Share of primary recipient's property: <input name='name' />
        </p>
        <button onClick={this.addSubRecipient}>Add substitute recipient</button>
        <button onClick={this.removeSubRecipient}>Remove substitute recipient</button>
        {this.displaySubRecipient()}
      </div>
    )
  }
}

export default SubRecipient
