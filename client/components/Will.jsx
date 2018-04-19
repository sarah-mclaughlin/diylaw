import React from 'react'
import {Link} from 'react-router-dom'

const Will = () => {
  return (
    <div className='home'>
      <h2>Write my will</h2>
      <p>[insert brief explanation of what a will is]</p>
      <button><Link to='/will/name/'>Start</Link></button>
    </div>
  )
}

export default Will
