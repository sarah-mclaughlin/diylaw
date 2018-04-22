import React from 'react'
import {Link} from 'react-router-dom'

import Guardians from './Guardians'
// import Submit from './Submit'

class Children extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      guardians: false,
      submit: false
    }
    this.showGuardians = this.showGuardians.bind(this)
    this.showSubmit = this.showSubmit.bind(this)
  }

  showGuardians () {
    this.setState({
      guardians: true
    })
  }

  showSubmit () {
    this.setState({
      submit: true
    })
  }

  render () {
    return (
      <div className='name'>
        <div>
          <p>Do you have children under the age of 18?</p>
          <input type='radio' onChange={this.showGuardians} name='name' />Yes
          <input type='radio' onChange={this.showSubmit} name='name' />No
          {this.state.guardians ? <Guardians /> : null}
          <p>
            {this.state.submit ? <Link to='/will/submit'>Next</Link> : null}
          </p>
        </div>
      </div>
    )
  }
}

export default Children
