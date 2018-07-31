import React, { Component } from 'react';
import { HeaderComponent } from '../components/HeaderComponent';
import { action } from 'mobx';
import { observer, inject } from 'mobx-react';
import { css } from 'emotion';

const logoutButton = css`
    background-color: rgb(255, 117, 140);
    border-radius: 7px;
    border: none;
    color: white;
    text-align: center;
    font-family: Arial, sans-serif;
    display: block;
    font-size: 18px;
    padding: 15px;
    position: absolute;
    top: 10px;
    right: 500px;
`;

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
        const button =
            this.props.state.currentUser.name ?
                <button className={logoutButton} onClick={this._onClickLogout}>Logout</button> :
                null;
        return (
            <HeaderComponent button={button} message={message} />
        )
    }
}