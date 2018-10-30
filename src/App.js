import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NoMatch from './components/auth/NoMatch'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import PortofolioDetails from './components/portofolios/PortofolioDetails'
import SignIn from './components/auth/SignIn'
// import SignUp from './components/auth/SignUp'
import UnAuth from './components/auth/UnAuth'
import CreatePortofolio from './components/portofolios/CreatePortofolio'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="content-wrapper">
            <Switch>
              <Route exact path='/'component={Dashboard} />
              <Route path='/portofolio/:id' component={PortofolioDetails} />
              <Route path='/signin' component={SignIn} />
              {/* <Route path='/signup' component={SignUp} /> */}
              <Route path='/create' component={CreatePortofolio} />
              <Route path='/not-auth' component={UnAuth} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;