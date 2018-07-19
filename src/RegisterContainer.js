import React, { Component } from 'react';
import { LoginForm } from './LoginForm';
import { HaveAccountComponent } from './HaveAccountComponent';
import { css } from 'emotion';

const formWrapper = css`
    padding: 10px 130px 10px 130px;
`;

const loginButton = css`
    background-color: rgb(255, 117, 140);
    border-radius: 7px;
    border: none;
    color: white;
    text-align: center;
    font-family: Arial, sans-serif;
    display: block;
    font-size: 18px;
    width: 250px;
    height: 60px;
    margin-top: 60px;
`;

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
        fetch('https://api.infinum.academy/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
    )
            .then((data) => data.json())
            .then((data) => console.log(data))
            .catch((error) => console.log('Request failure: ', error));
    }

    render() {
        return(
            <div className={formWrapper}>
                <LoginForm email={this.state.email} login={false} password={this.state.password} handleUsername={this._handleUsernameChange} handlePassword={this._handlePasswordChange} />
                <button className={loginButton} onClick={this._register}>Register</button>
                <HaveAccountComponent login={false} />
            </div>
        )
    }
}