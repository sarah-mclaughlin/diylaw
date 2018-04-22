import React from 'react'
// import {Link} from 'react-router-dom'

import SubRecipient from './SubRecipient'

class AddRecipient extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subRecipient: false
    }
    this.subRecipient = this.subRecipient.bind(this)
  }

  subRecipient () {
    this.setState({
      subRecipient: true
    })
  }

  render () {
    return (
      <p>
        Full name of recipient: <input name='name' />
        Relationship to recipient: <input name='name' />
        Share of remaining property: <input name='name' />
        <button onClick={this.subRecipient}>Substitute recipient(s)</button>
        {this.state.subRecipient ? <SubRecipient /> : null}
      </p>
    )
  }
}

export default AddRecipient
