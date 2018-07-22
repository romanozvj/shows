import React, { Component } from 'react';
import { css } from 'emotion';
import { LoginFormComponent } from './LoginFormComponent';
import { HaveAccountComponent } from './HaveAccountComponent';
import { observer } from 'mobx-react';

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
margin-top: 30px;
`;

@observer
export class UserComponent extends Component {
    render() {
        return (
            <div className={formWrapper}>

                <LoginFormComponent
                    email={this.props.email}
                    login={this.props.login}
                    password={this.props.password}
                    handleUsername={this.props.handleUsername}
                    handlePassword={this.props.handlePassword}
                    onImageClick={this.props.handleImageClick}
                    isHidden={this.props.isHidden}
                    isBoxChecked={this.props.isBoxChecked}
                    onCheckboxClick={this.props.onCheckboxClick} />

                <button
                    className={loginButton}
                    onClick={
                        this.props.login ?
                            this.props.onLoginButton :
                            this.props.onRegisterButton
                    }>
                    {
                        this.props.login ?
                            'LOGIN' :
                            'REGISTER'
                    }
                </button>

                <HaveAccountComponent login={this.props.login} />

            </div>
        )
    }
}