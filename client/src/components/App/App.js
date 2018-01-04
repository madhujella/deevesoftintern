import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Sidebar/Sidebar';
import Authentication from '../../containers/Authentication/Authentication';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    this.props.autoLogin()
  }

  render() {

    let routes = (
      <Switch>
        <Route path="/" exact component={ Authentication } />
        <Redirect to="/" />
      </Switch>
    )

    if(this.props.isAuthenticated) {
        <Switch>
          <Route path="/nav" exact component={ Navbar } />
        </Switch>
    }

    return (
      <div className="App">
        { routes }
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


export default connect(null, mapDispatchToProps)(App);
