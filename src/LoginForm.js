import React, { Component } from 'react';
import { inputUsername, inputPassword, label } from './loginCss';


export class LoginForm extends Component {
    render() {
        return(
            <form>
                <div>
                    <label className={label} htmlFor='username'>{this.props.labelUsername}</label>
                    <input className={inputUsername} type='text' id='username' value={this.props.email} onChange={this.props.handleUsername} />
                </div>
                <div>
                    <label className={label} htmlFor='password'>{this.props.labelPassword}</label>
                    <input className={inputPassword} type='password' id='password' value={this.props.password} onChange={this.props.handlePassword} />
                </div>
            </form>
        )
    }
}