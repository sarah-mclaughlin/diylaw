import React from 'react'
import {Link} from 'react-router-dom'

const Name = () => {
  return (
    <div className='home'>
      Full legal name: <input name='name' />
      <button>?</button>
      <button><Link to='/will/name/executors'>Next</Link></button>
    </div>
  )
}

export default Name
