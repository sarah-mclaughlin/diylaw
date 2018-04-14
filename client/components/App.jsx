import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Name from './Name'
// import Executors from './Executors'
// import Gifts from './Gifts'
// import Property from './Property'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <h1>Make my will!</h1>
        <div className='will'>
          <Route exact path='/' component={Home}/>
          <Route path='/name' component={Name}/>
          {/* <Route exact path='/name/executors' component={Executors}/>
          <Route path='name/executors/gifts' component={Gifts}/>
          <Route path='name/executors/gifts/property' component={Property}/> */}
        </div>
      </div>
    </Router>
  )
}

export default App
