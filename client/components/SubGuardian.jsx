import React from 'react'
import {Link} from 'react-router-dom'

import AddSubGuardian from './AddSubGuardian'

class SubGuardian extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      addSubGuardian: 0
    }
    this.addSubGuardian = this.addSubGuardian.bind(this)
    this.removeSubGuardian = this.removeSubGuardian.bind(this)
    this.displaySubGuardians = this.displaySubGuardians.bind(this)
  }

  addSubGuardian () {
    this.setState({
      addSubGuardian: this.state.addSubGuardian + 1
    })
  }

  removeSubGuardian () {
    this.setState({
      addSubGuardian: this.state.addSubGuardian - 1
    })
  }

  displaySubGuardians () {
    let subGuardians = []
    for (let i = 0; i < this.state.addSubGuardian; i++) {
      subGuardians.push(
        <div key={i}>
          <AddSubGuardian />
        </div>
      )
    }
    return subGuardians
  }

  render () {
    return (
      <div className='subRecipient'>
        <div>
          <h4>Substitute guardians(s)</h4>
          <p>
            Full name of substitute guardian: <input name='name' />
            Relationship to substitute guardian: <input name='name' />
          </p>
          <button onClick={this.addSubGuardian}>Add substitute guardian</button>
          <button onClick={this.removeSubGuardian}>Remove substitute guardian</button>
          {this.displaySubGuardians()}
        </div>
        <p>
          <Link to='/will/submit'>Next</Link>
        </p>
      </div>
    )
  }
}

export default SubGuardian
