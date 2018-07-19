import React, { Component } from 'react';
import { css } from 'emotion';
import passwordEyeRed from './icons/passwordEyeRed.png';

const inputUsername = css`
    border: none;
    outline: none;
    width: 200px;
    border-bottom: 2px solid #ff758c;
    margin-top: 20px;
    margin-bottom: 5px;
    font-family: Arial, sans-serif;
    font-size: 40px;
    color: rgb(255, 117, 140);
`;

const inputPassword = css`
    border: none;
    outline: none;
    width: 350px;
    border-bottom: 2px solid #ff758c;
    letter-spacing: 10px;
    margin-top: 20px;
    margin-bottom: 5px;
    font-size: 40px;
    color: rgb(255, 117, 140);
`;

const label = css`
    display: block;
    font-family: Arial, sans-serif;
    font-size: 40px;
    color: rgb(80, 80, 80);
`;

const passwordEye = css`
    margin-left: -30px;
    height: 25px;
    width: auto;
`;

export class LoginForm extends Component {
    render() {
        const login = this.props.login;
        return(
            <form>
                <div>
                    <label className={label} htmlFor='username'>{login ? 'My username is' : 'My username will be'}</label>
                    <input className={inputUsername} autoComplete='username' type='text' id='username' value={this.props.email} onChange={this.props.handleUsername} />
                </div>
                <div className>
                    <label className={label} htmlFor='password'>{login ? 'and my password is' : 'and my password will be'}</label>
                    <input className={inputPassword} autoComplete={login ? 'current-password' : 'new-password'} type='password' id='password' value={this.props.password} onChange={this.props.handlePassword} />
                    <img className={passwordEye} alt='Eye' src={passwordEyeRed} />
                </div>
            </form>
        )
    }
}