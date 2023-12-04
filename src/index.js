import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import EsilehtBackupvana from './views/esileht-backupvana'
import Meistvana from './views/meistvana'
import Esilehtvana from './views/esilehtvana'
import Teenusedvana from './views/teenusedvana'
import Kontaktvana from './views/kontaktvana'
import Test from './views/test'
import Onepager from './views/onepager'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={EsilehtBackupvana} exact path="/esileht-backupvana" />
        <Route component={Meistvana} exact path="/meistvana" />
        <Route component={Esilehtvana} exact path="/esilehtvana" />
        <Route component={Teenusedvana} exact path="/teenusedvana" />
        <Route component={Kontaktvana} exact path="/kontaktvana" />
        <Route component={Test} exact path="/test" />
        <Route component={Onepager} exact path="/" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
