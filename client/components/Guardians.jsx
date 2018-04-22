import React from 'react'
// import {Link} from 'react-router-dom'

import GuardiansInfo from './GuardiansInfo'
import AddGuardian from './AddGuardian'
import SubGuardian from './SubGuardian'

class Guardians extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showGuardiansInfo: false,
      addGuardian: 0,
      subGuardian: false
    }
    this.toggleGuardiansInfo = this.toggleGuardiansInfo.bind(this)
    this.addGuardian = this.addGuardian.bind(this)
    this.removeGuardian = this.removeGuardian.bind(this)
    this.displayGuardians = this.displayGuardians.bind(this)
    this.subGuardian = this.subGuardian.bind(this)
  }

  toggleGuardiansInfo () {
    this.setState({
      showGuardiansInfo: !this.state.showGuardiansInfo
    })
  }

  addGuardian () {
    this.setState({
      addGuardian: this.state.addGuardian + 1
    })
  }
  removeGuardian () {
    this.setState({
      addGuardian: this.state.addGuardian - 1
    })
  }

  displayGuardians () {
    let guardians = []
    for (let i = 0; i < this.state.addGuardian; i++) {
      guardians.push(
        <div key={i}>
          <AddGuardian />
        </div>
      )
    }
    return guardians
  }

  subGuardian () {
    this.setState({
      subGuardian: true
    })
  }

  render () {
    return (
      <div className='name'>
        <div>
          <h3>Guardian(s)</h3>
          <button onClick={this.toggleGuardiansInfo}>?</button>
          {this.state.showGuardiansInfo ? <GuardiansInfo /> : null}
          <p>
            Full name of guardian: <input name='name' />
            Relationship to guardian: <input name='name' />
          </p>
          <button onClick={this.addGuardian}>Add a guardian</button>
          <button onClick={this.removeGuardian}>Remove last guardian</button>
          {this.displayGuardians()}

          <p>
            <button onClick={this.subGuardian}>Substitute guardian(s)</button>
            {this.state.subGuardian ? <SubGuardian /> : null}
          </p>
        </div>
      </div>
    )
  }
}

export default Guardians
