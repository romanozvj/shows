import React, { Component } from 'react';
import { css } from 'emotion';
import showLogo from '../images/showLogo.png';
import { observer } from 'mobx-react';

const header = css`
    padding: 20px 130px 20px 130px;
    border-bottom: 2px solid rgb(248, 248, 248);
    position: relative;
`;

const logo = css`
    height: 30px;
`;

const hello = css`
    color: rgb(255, 123, 145);
    font-family: Arial, sans-serif;
    font-size: 25px;
    padding-bottom: 20px;
    border-bottom: 2px solid rgb(248, 248, 248);
    position: absolute;
    top: 0px;
    right: 130px;
`;

@observer
export class HeaderComponent extends Component {
    render() {
        return (
            <div className={header}>
                <img
                    alt="Shows Logo"
                    className={logo}
                    src={showLogo} />

                <p className={hello}>{this.props.message}</p>
                {this.props.button}
            </div>
        )
    }
}