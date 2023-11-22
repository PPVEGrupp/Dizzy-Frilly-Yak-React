import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import EsilehtBackup from './views/esileht-backup'
import Meist from './views/meist'
import Esileht from './views/esileht'
import Teenused from './views/teenused'
import Kontakt from './views/kontakt'
import Test from './views/test'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={EsilehtBackup} exact path="/esileht-backup" />
        <Route component={Meist} exact path="/meist" />
        <Route component={Esileht} exact path="/" />
        <Route component={Teenused} exact path="/teenused" />
        <Route component={Kontakt} exact path="/kontakt" />
        <Route component={Test} exact path="/test" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
