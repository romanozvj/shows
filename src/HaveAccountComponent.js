import React, { Component } from 'react';
import { css } from 'emotion';
import { TextArialComponent } from './TextArialComponent';
import { Link } from 'react-router-dom';

export class HaveAccountComponent extends Component {
    render() {
        const login = this.props.login;
        return(
            <div className={css`display: flex; flex-direction: row; margin-top: 150px`}>
                <TextArialComponent>{login ? "Still don't have an account? " : "Already have an account? "}
                    <Link className={css`text-decoration: none; color: rgb(255, 117, 140) !important`} to={login ? '/register' : '/login'}>{login ? 'Register' : 'Login'}</Link>
                </TextArialComponent>
            </div>
        )
    }
}