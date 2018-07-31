import React, { Component } from 'react';
import { observable, action, runInAction } from 'mobx';
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
    _handleInputChange(fieldName, fieldValue = 'value') {
        return action((event) => {
            const value = event.target[fieldValue];
            this.componentState[fieldName] = value;
        });
    }

    @action.bound
    async _login() {
        await login(JSON.stringify({
            email: this.componentState.email,
            password: this.componentState.password
        }))
            .then((token) => {
                runInAction(() => {
                    this.props.state.currentUser.name = this.componentState.email.substring(0, this.componentState.email.indexOf('@'));
                    if (this.componentState.rememberMe) {
                        localStorage.setItem('rememberedName', this.props.state.currentUser.name);
                        localStorage.setItem('rememberedLoginToken', token);
                    }
                    this.props.state.currentUser.loginToken = token;
                })
            });
        this.props.history.push('/');
    }

    @action.bound
    _register() {
        register(JSON.stringify({
            email: this.componentState.email,
            password: this.componentState.password
        }));
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
                handleUsername={this._handleInputChange('email')}
                handlePassword={this._handleInputChange('password')}
                handleImageClick={this._handleImageClick}
                isHidden={this.componentState.isHidden}
                onLoginButton={this._login}
                onRegisterButton={this._register}
                isBoxChecked={this.componentState.rememberMe}
                onCheckboxClick={this._handleInputChange('rememberMe', 'checked')} />
        )
    }
}