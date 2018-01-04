import React, { Component } from 'react';
import './Authentication.css';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';

class Authentication extends Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            isSignUp: true,
            selectedOption: 'coach'
        }

        this.authSubmit = this.authSubmit.bind(this);
        this.signUp = this.signUp.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    authSubmit(e) {
        e.preventDefault();
        if(!this.state.isSignUp){
            this.props.onAuthSignIn(this.state.email, this.state.password, this.state.isSignUp);
        }
        else{
            this.props.onAuthSignUp(this.state.name, this.state.email, this.state.password, this.state.selectedOption);
        }
    }

    signUp(){
        return (
            <form onSubmit={ this.authSubmit }>
                <div>
                    <div>
                        <input type="text" name="name" id="name" placeholder="Name" 
                        value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
                    </div>
                    <div>
                        <input type="text" name="email" id="email" placeholder="Email" 
                        value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" 
                        value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}  /> 
                    </div>
                    <div>
                        <label htmlFor="coach">Coach</label>
                        <input type="radio" id="coach" name="userType" value="coach" 
                        checked={this.state.selectedOption === "coach"} 
                        onChange={(e) => {this.setState({selectedOption: e.target.value})}} />
                        <label htmlFor="member">Member</label>                
                        <input type="radio" id="member" name="userType" value="member"
                        checked={this.state.selectedOption === "member"}
                        onChange={(e) => {this.setState({selectedOption: e.target.value})}}  />
                    </div>
                    <div>
                        <button type="submit" id="signup">Sign Up</button>            
                        <button type="button" id="signin" onClick={() => this.setState({isSignUp: false})}>Sign In</button>        
                    </div>
                </div>
            </form>
        );
    }

    signIn() {
        return (
            <form onSubmit={ this.authSubmit }>
                <div>
                    <div>
                        <input type="text" name="email" id="email" placeholder="Email" 
                        value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
                    </div>
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password" 
                        value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}  /> 
                    </div>
                    <div>
                        <button type="submit" id="signin">Sign In</button>            
                        <button type="button" id="signup" onClick={() => this.setState({isSignUp: true})}>Sign Up</button>
                    </div>
                </div>
            </form>
             
        );
    }

    render() {
        const isSigned = this.state.isSignUp ? this.signUp() : this.signIn();
        let authCheck = null;
        if(this.props.isAuthenticated) {
            authCheck = <Redirect to='/nav' />
        }
    return (
        <div>
            { authCheck }
            <div>
                { isSigned }
            </div>
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
        onAuthSignIn: (email, password) => dispatch(actions.authSignIn(email, password)),
        onAuthSignUp: (name, email, password, userType) => dispatch(actions.authSignUp(name, email, password, userType))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);