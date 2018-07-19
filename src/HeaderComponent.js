import React, { Component } from 'react';
import { css } from 'emotion';
import showLogo from './icons/showLogo.png';

const header = css`
    margin: 20px 130px 20px 130px;
`;

const logo = css`
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