import React, { Component } from 'react';
import { css } from 'emotion';
import showLogo from './showLogo.png';

const footer = css`
    display: block;
    padding: 20px 130px 10px 130px;
    height: 50px;
`;

const logo = css`
    float: left;
    display: block;
    height: 30px;
`;

export class FooterComponent extends Component {
    render() {
        return(
            <div className={footer}>
                <img alt="Shows Logo" className={logo} src={showLogo} />
            </div>
        )
    }
}