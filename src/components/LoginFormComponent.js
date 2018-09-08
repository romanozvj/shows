import React, { Component } from 'react';
import { css } from 'emotion';
import passwordEyeRed from '../images/passwordEyeRed.png';
import { observer } from 'mobx-react';

const inputUsername = css`
    border: none;
    outline: none;
    width: 430px;
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
    width: 430px;
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

const checkbox = css`
    margin-top: 30px;
    margin-right: 15px;
`;

const checkboxLabel = css`
    font-size: 18px;
    vertical-align: bottom;
    font-family: Arial, sans-serif;
    color: rgb(80, 80, 80);
`;

@observer
export class LoginFormComponent extends Component {
    render() {
        const login = this.props.login;
        return (
            <form>
                <div>
                    <label className={label} htmlFor="username">
                        {
                            login ?
                                'My username is' :
                                'My username will be'
                        }
                    </label>
                    <input
                        className={inputUsername}
                        autoComplete="username"
                        type="text"
                        id="username"
                        value={this.props.email}
                        onChange={this.props.handleUsername}
                    />
                </div>

                <div>
                    <label className={label} htmlFor="password">
                        {
                            login ?
                                'and my password is' :
                                'and my password will be'
                        }
                    </label>
                    <input
                        className={inputPassword}
                        autoComplete=
                        {
                            login ?
                                'current-password' :
                                'new-password'
                        }
                        type=
                        {
                            this.props.isHidden ?
                                'password' :
                                'text'
                        }
                        id="password"
                        value={this.props.password}
                        onChange={this.props.handlePassword}
                    />

                    <img
                        className={passwordEye}
                        alt='Eye'
                        src={passwordEyeRed}
                        onClick={this.props.onImageClick}
                    />

                </div>
                <input
                    id="rememberMeCheckbox"
                    type="checkbox"
                    onChange={this.props.onCheckboxClick}
                    checked={this.props.isBoxChecked}
                    className={checkbox}
                />
                <label
                    className={checkboxLabel}
                    htmlFor="rememberMeCheckbox"
                >
                    Remember me
                </label>
            </form>
        )
    }
}