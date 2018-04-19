import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <h1>DIYLAW</h1>
        <h2>Make your own legal docs</h2>
        <div className='personal docs'>
          <h3>Personal docs</h3>
          <ul>
            <li key='will'><Link to={'/will/'}>Will</Link></li>
            <li key='epoa'><Link to={'/epoa/'}>Enduring Powers of Attorney</Link></li>
            <li key='rpa'><Link to={'/rpa/'}>Relationship Property Agreement</Link></li>
            <li key='dot'><Link to={'/dot/'}>Deed of Trust</Link></li>
            <li key='fod'><Link to={'/fod/'}>Forgiveness of Debt</Link></li>
          </ul>
        </div>
        <div className='business docs'>
          <h3>Business docs</h3>
          <ul>
            <li key='constitution'><Link to={'/constitution/'}>Company constitution</Link></li>
            <li key='shareholders-agmt'><Link to={'/shareholders-agmt/'}>Shareholders' Agreement</Link></li>
            <li key='tot'><Link to={'/tot/'}>Terms of Trade</Link></li>
            <li key='confid-agmt'><Link to={'/confid-agmt/'}>Confidentiality agreement</Link></li>
            <li key='employment-agmt'><Link to={'/employment-agmt/'}>Employment Agreement</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Home
