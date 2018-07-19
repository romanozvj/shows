import React, { Component } from 'react';
import { formWrapper, loginButton } from './loginCss.js'
import { LoginForm } from './LoginForm';
import { HaveAccountComponent } from './HaveAccountComponent';
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
        fetch('https://api.infinum.academy/api/users/sessions', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(this.state)})
            .then((data) => data.json())
            .then(async function (data) {
                const dataObject = await data;
                console.log(dataObject.data.token);
                localStorage.setItem('loginToken', dataObject.data.token);
            })
            .catch((error) => console.log('Request failure: ', error));
    }

    render() {
        return(
            <div className={formWrapper}>

                <LoginForm email={this.state.email} login={true} password={this.state.password} handleUsername={this._handleUsernameChange} handlePassword={this._handlePasswordChange} />

                <button className={loginButton} onClick={this._login}>LOGIN</button>

                <HaveAccountComponent login={true} />
                
            </div>
        )
    }
}