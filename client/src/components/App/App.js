import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Authentication from '../../containers/Authentication/Authentication';

import * as actions from '../../actions';

class App extends Component {

  componentDidMount() {
    this.props.autoLogin()
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/auth" component={ Authentication } />
        <Route path="/" component = { Home } />
        <Redirect to="/" />
      </Switch>
    )

    if(this.props.isAuthenticated) {
        routes = (
            <Switch>
              <Route path="/nav" component={ Navbar } />
              <Route path="/dashboard" component={ Dashboard } />
            </Switch>
        )
    }

    return (
      <div className="App">
        { console.log(routes) }
          {routes} 
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.authReducer.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(actions.checkAuth())
  }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
