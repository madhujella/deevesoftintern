import React, { Component } from 'react';
import axios from 'axios';
import './Dashboard.css';

class Dashboard extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      classes: []
    }

  }

  componentDidMount(){
    var url = "http://localhost:3001/class/classes";
    axios.get(url)
    .then((res) => { 
      console.log(res)
      this.setState({classes: res.data});
    })
    .catch((err) => {});
  }


  render() {
    const classes = this.state.classes.map((e) => { 
      return (
        <div key={e.id}>
          <ol>{e.id}</ol>
          <ol>{e.name}</ol>
          <ol>{e.date}</ol>
          <ol>{e.duration}</ol>
          <ol>{e.info}</ol>
          <ol>{e.invitation}</ol>
          <ol>{e.maxEnrolls}</ol>
          <ol>{e.whatToHave}</ol>
          <ol>{e.reqCredits}</ol>
        </div>
      )
    })
    return (
      <div>
        { classes }
      </div>
    );
  }

  
}

export default Dashboard;
