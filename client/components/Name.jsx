import React from 'react'
import {Link} from 'react-router-dom'

import NameInfo from './NameInfo'
import ExecutorsInfo from './ExecutorsInfo'
import SubExecutor from './SubExecutor'

class Name extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showNameInfo: false,
      showExecutorsInfo: false,
      addSubExecutor: false
    }
    this.toggleNameInfo = this.toggleNameInfo.bind(this)
    this.toggleExecutorsInfo = this.toggleExecutorsInfo.bind(this)
    this.addSubExecutor = this.addSubExecutor.bind(this)
  }

  toggleNameInfo () {
    this.setState({
      showNameInfo: !this.state.showNameInfo
    })
  }

  toggleExecutorsInfo () {
    this.setState({
      showExecutorsInfo: !this.state.showExecutorsInfo
    })
  }

  addSubExecutor () {
    this.setState({
      addSubExecutor: true
    })
  }

  render () {
    return (
      <div>
        <div className='name'>

          <h3>Name of will maker</h3>
          <button onClick={this.toggleNameInfo}>?</button>
          {this.state.showNameInfo ? <NameInfo /> : null}
          <p>
            Full legal name: <input name='name' />
          </p>

          <h3>Executor(s)</h3>
          <button onClick={this.toggleExecutorsInfo}>?</button>
          {this.state.showExecutorsInfo ? <ExecutorsInfo /> : null}
          <p>
            Full name of executor: <input name='name' />
            Relationship to executor: <input executor-relationship='executor-relationship' />
          </p>
          <button onClick={this.addSubExecutor}>Add a substitute executor</button>
          {this.state.addSubExecutor ? <SubExecutor /> : null}
        </div>
        <div>
          <button><Link to='/will/gifts'>Next</Link></button>
        </div>
      </div>
    )
  }
}

export default Name
