import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home'
import ShowResult from './ShowResult'
import Count from './Count'

const SiteRouter:React.FC  = () => {
    return (
         <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Count">Count</Link>
            </li>
            <li>
              <Link to="/ShowResult">Show Result</Link>
            </li>
          </ul>
        </nav>

      <main>
        <Switch>
          <Route path="/count">
            <Count />
          </Route>
          <Route path="/ShowResult">
            <ShowResult />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </main>
      </div>
    </Router>
    )
}

export default SiteRouter
