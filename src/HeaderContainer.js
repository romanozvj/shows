import React, { Component } from 'react';
import { css } from 'emotion';
import showLogo from './showLogo.png';

const headerClass = css`
    display: block;
    width: 100%;
`;

export class HeaderContainer extends Component {
    render() {
        return(
            <div className={headerClass}>
                <img className={css`float: left; width: auto; height: 40px`} src={showLogo} />
            </div>
        )
    }
}