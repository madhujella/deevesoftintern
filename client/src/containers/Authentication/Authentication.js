import React, { Component } from 'react';
import './Authentication.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Dashboard from '../../components/Dashboard/Dashboard';

class Authentication extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.authSubmit = this.authSubmit.bind(this);
    }

    authSubmit(e) {
        e.preventDefault();
        this.props.onAuth(this.state.email, this.state.password);
    }

    render() {
    return (
        <div>
        <form onSubmit={ this.authSubmit }>
            <input type="text" name="email" id="email" 
            placeholder="Email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
            <input type="password" name="password" id="password" 
            placeholder="Password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}  />            
            <div>
                <label htmlFor="coach">Coach</label>
                <input type="radio" id="coach" name="userType" value="coach"  />
                <label htmlFor="member">Member</label>                
                <input type="radio" id="member" name="userType" value="member"  />
            </div>
            <button id="signin">Sign In</button>
        </form>
        </div>
    );
    }

    
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (e, p) => dispatch(actions.auth(e, p))
    }
}

export default connect(null, mapDispatchToProps)(Authentication);