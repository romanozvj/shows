import React, { Component } from 'react';
import { HeaderComponent } from '../components/HeaderComponent';
import { action } from 'mobx';
import { observer, inject } from 'mobx-react';



@inject('state')
@observer
export class HeaderContainer extends Component {

    @action.bound
    _onClickLogout() {
        localStorage.clear();
        this.props.state.currentUser.name = '';
        this.props.state.currentUser.loginToken = '';
        this.props.history.push('/login');
    }

    render() {
        const message =
            this.props.state.currentUser.name ?
                `Hello, ${this.props.state.currentUser.name}` :
                null;
        return (
            <HeaderComponent handleLogout={this._onClickLogout} message={message} />
        )
    }
}