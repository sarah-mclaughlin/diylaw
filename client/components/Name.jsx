import React from 'react'
import {Link} from 'react-router-dom'

class Name extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showInfo: false
    }
    this.toggleInfo = this.toggleInfo.bind(this)
  }

  toggleInfo () {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  render () {
    // const id = Number(this.props.match.params.id)
    // const person = list.find(p => p.id === id)
    // const color = {color: person.color}
    return (
      <div className='person-color'>
        <h1 style={color}>{person.name}</h1>
        <button onClick={this.toggleColor}>Toggle colour name</button>
        {/* this.state.isShowingColor ? <ColorName name={person.color} /> : null */}
        {this.state.isShowingColor && <ColorName name={person.color} />}
      </div>
    )
  }
}

// const Name = () => {
//   return (
//     <div className='home'>
//       Full legal name: <input name='name' />
//       <button>?</button>
//       <button><Link to='/will/name/executors'>Next</Link></button>
//     </div>
//   )
// }

export default Name
