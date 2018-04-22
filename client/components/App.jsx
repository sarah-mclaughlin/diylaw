import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Will from './Will'
import Name from './Name'
import Distribution from './Distribution'
import Children from './Children'
import Submit from './Submit'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route exact path='/' component={Home}/>
        <Route exact path='/will/' component={Will}/>
        <Route path='/will/name/' component={Name}/>
        <Route path='/will/distribution/' component={Distribution}/>
        <Route path='/will/guardians/' component={Children}/>
        <Route path='/will/submit/' component={Submit}/>
      </div>
    </Router>
  )
}

export default App
