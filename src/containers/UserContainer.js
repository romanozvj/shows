import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { login, register } from '../services/user';
import { UserComponent } from '../components/UserComponent';

@observer
export class UserContainer extends Component {

    constructor(args) {
        super(args);
        this._handleUsernameChange = this._handleUsernameChange.bind(this);
        this._handlePasswordChange = this._handlePasswordChange.bind(this);
        this._login = this._login.bind(this);
        this._register = this._register.bind(this);
        this._handleImageClick = this._handleImageClick.bind(this);
    }

    @observable
    componentState = {
        email: '',
        password: '',
        rememberMe: false,
        isHidden: true
    }

    _handleUsernameChange(event) {
        this.componentState.email = event.target.value;
    }

    _handlePasswordChange(event) {
        this.componentState.password = event.target.value;
    }

    _login() {

        login({
            email: this.componentState.email,
            password: this.componentState.password
        })
            .then((token) => this.componentState.rememberMe ?
                localStorage.setItem('loginToken', token) :
                sessionStorage.setItem('loginToken', token));

    }

    _register() {
        register({
            email: this.componentState.email,
            password: this.componentState.password
        });
    }

    _handleImageClick() {
        this.componentState.isHidden = !this.componentState.isHidden;
    }

    render() {
        return (
            <UserComponent
                email={this.componentState.email}
                login={this.props.login}
                password={this.componentState.password}
                handleUsername={this._handleUsernameChange}
                handlePassword={this._handlePasswordChange}
                handleImageClick={this._handleImageClick}
                isHidden={this.componentState.isHidden}
                onLoginButton={this._login}
                onRegisterButton={this._register} />
        )
    }
}