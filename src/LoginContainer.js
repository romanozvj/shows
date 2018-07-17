import React, { Component } from 'react';
import { css } from 'emotion';

const customInput = css`
    border: none;
    outline: none;
    border-bottom: 2px solid #ff758c;
    margin: 5px;
`;


export class LoginContainer extends Component {
    constructor(args) {
        super(args);
        this.state = {
            email: '',
            password: ''
        };
        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._login = this._login.bind(this);
    }

    _handleUsernameChange(event) {
        this.setState({email: event.target.value});
    }

    _handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    _login() {
        const body = JSON.stringify(this.state);
        const request = new Request('https://api.infinum.academy/api/users/sessions', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: body});
        fetch(request)
            .then((data) => localStorage.setItem(this.state.email, data))
            .catch((error) => console.log('Request failure: ', error));
    }

    render() {
        return(
            <div>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input className={customInput} type='text' id='username' value={this.state.email} onChange={this._handleUsernameChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input className={customInput} type='password' id='password' value={this.state.password} onChange={this._handlePasswordChange} />
                </div>
                <button onClick={this._login}>Register</button>
            </div>
        )
    }
}