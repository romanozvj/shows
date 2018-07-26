import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { login, register } from '../services/user';
import { UserComponent } from '../components/UserComponent';

@inject('state')
@observer
export class UserContainer extends Component {

    @observable
    componentState = {
        email: '',
        password: '',
        rememberMe: false,
        isHidden: true
    }

    @action.bound
    _handleUsernameChange(event) {
        this.componentState.email = event.target.value;
    }

    @action.bound
    _handlePasswordChange(event) {
        this.componentState.password = event.target.value;
    }

    @action.bound
    _login() {

        login({
            email: this.componentState.email,
            password: this.componentState.password
        })
            .then((token) => this.componentState.rememberMe ?
                localStorage.setItem('loginToken', token) :
                sessionStorage.setItem('loginToken', token));

    }

    @action.bound
    _register() {
        register({
            email: this.componentState.email,
            password: this.componentState.password
        });
    }

    @action.bound
    _handleImageClick() {
        this.componentState.isHidden = !this.componentState.isHidden;
    }

    @action.bound
    _handleCheckboxClick() {
        this.componentState.rememberMe = !this.componentState.rememberMe;
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
                onRegisterButton={this._register}
                isBoxChecked={this.componentState.rememberMe}
                onCheckboxClick={this._handleCheckboxClick} />
        )
    }
}