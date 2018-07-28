import React, { Component } from 'react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import { arial20 } from '../styles/font';

const link = css`
    text-decoration: none;
    color: rgb(255, 117, 140);
`;

const haveAccountDiv = css`
    display: flex;
    flex-direction: row;
    margin-top: 150px;
`;


export class HaveAccountComponent extends Component {
    render() {
        const login = this.props.login;
        return (
            <div className={haveAccountDiv}>
                <p className={arial20}>
                    {
                        login ?
                            'Still don\'t have an account? ' :
                            'Already have an account? '
                    }
                    <Link className={link} to={login ? '/register' : '/login'}>
                        {
                            login ?
                                'Register' :
                                'Login'
                        }
                    </Link>
                </p>
            </div>
        )
    }
}