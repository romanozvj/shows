import React, { Component } from 'react';
import { formWrapper, loginButton } from './loginCss'
import { LoginForm } from './LoginForm';
import { Link } from 'react-router-dom';

export class RegisterContainer extends Component {
    constructor(args) {
        super(args);
        this.state = {
            email: '',
            password: ''
        };
        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._register = this._register.bind(this);
    }

    _handleUsernameChange(event) {
        this.setState({email: event.target.value});
    }

    _handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    _register() {
        fetch('https://api.infinum.academy/api/users', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(this.state, null, 2)})
            .then((data) => data.json())
            .then((data) => console.log(data))
            .catch((error) => console.log('Request failure: ', error));
    }

    render() {
        return(
            <div className={formWrapper}>
                <LoginForm email={this.state.email} labelUsername='My username will be' labelPassword='and my password will be' password={this.state.password} handleUsername={this._handleUsernameChange} handlePassword={this._handlePasswordChange} />
                <button className={loginButton} onClick={this._register}>Register</button>
                <div>
                    <p>
                        Already have an account?
                    </p>
                    <Link to='/login'>Login</Link>
                </div>
            </div>
        )
    }
}