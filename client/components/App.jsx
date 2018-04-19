import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
// import {Link} from 'react-router-dom'

import Home from './Home'
import Will from './Will'
import Name from './Name'
import Executors from './Executors'
import Gifts from './Gifts'
import Property from './Property'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Route exact path='/' component={Home}/>
        <Route path='/will/' component={Will}/>
        <Route path='/will/name/' component={Name}/>
        <Route path='/will/name/executors/' component={Executors}/>
        <Route path='/will/name/executors/gifts/' component={Gifts}/>
        <Route path='/will/name/executors/gifts//property' component={Property}/>
      </div>
    </Router>
  )
}

export default App
