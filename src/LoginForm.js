import React, { Component } from 'react';
import { inputUsername, inputPassword, label } from './loginCss';


export class LoginForm extends Component {
    render() {
        const login = this.props.login;
        return(
            <form>
                <div>
                    <label className={label} htmlFor='username'>{login ? 'My username is' : 'My username will be'}</label>
                    <input className={inputUsername} autoComplete='username' type='text' id='username' value={this.props.email} onChange={this.props.handleUsername} />
                </div>
                <div>
                    <label className={label} htmlFor='password'>{login ? 'and my password is' : 'and my password will be'}</label>
                    <input className={inputPassword} autoComplete={login ? 'current-password' : 'new-password'} type='password' id='password' value={this.props.password} onChange={this.props.handlePassword} />
                </div>
            </form>
        )
    }
}