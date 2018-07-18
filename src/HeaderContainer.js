import React, { Component } from 'react';
import { css } from 'emotion';
import showLogo from './showLogo.png';

const headerClass = css`
    display: block;
    width: 100%;
    height: 50px;
`;

export class HeaderContainer extends Component {
    render() {
        return(
            <div className={headerClass}>
                <img alt="Header" className={css`float: left; width: auto; height: 30px`} src={showLogo} />
            </div>
        )
    }
}