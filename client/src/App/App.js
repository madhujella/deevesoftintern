import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Sidebar from '../Sidebar/Sidebar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Dashboard />
        <Sidebar />
      </div>
    );
  }
}

export default App;
