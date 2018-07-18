import React, { Component } from 'react';
import { css } from 'emotion';
import showLogo from './showLogo.png';

const header = css`
    display: block;
    padding: 10px 130px 10px 130px;
    height: 50px;
`;

const logo = css`
    float: left;
    width: auto;
    height: 30px;
`;
export class HeaderComponent extends Component {
    render() {
        return(
            <div className={header}>
                <img alt="Shows Logo" className={logo} src={showLogo} />
            </div>
        )
    }
}