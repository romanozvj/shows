import React, { Component } from 'react';
import { css } from 'emotion';

const customInput = css`
    border: none;
    outline: none;
    border-bottom: 2px solid #ff758c;
    margin: 5px;
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
        const body = JSON.stringify(this.state, null, 2);
        const request = new Request('https://api.infinum.academy/api/users', {method: 'POST', body: body});
        fetch(request)
            .then((data) => console.log('Request success: ', data))
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
                <button onClick={this._register}>Register</button>
            </div>
        )
    }
}