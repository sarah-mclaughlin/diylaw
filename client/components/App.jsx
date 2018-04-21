import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Will from './Will'
import Name from './Name'
import Gifts from './Gifts'
import Final from './Final'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route exact path='/' component={Home}/>
        <Route exact path='/will/' component={Will}/>
        <Route path='/will/name/' component={Name}/>
        <Route path='/will/gifts/' component={Gifts}/>
        <Route path='/will/final/' component={Final}/>
      </div>
    </Router>
  )
}

export default App
