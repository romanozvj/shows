import React, { Component } from 'react';
import { css } from 'emotion';
import showLogo from '../icons/showLogo.png';
import { observer } from 'mobx-react';

const header = css`
    margin: 20px 130px 20px 130px;
`;

const logo = css`
    height: 30px;
`;

@observer
export class HeaderComponent extends Component {
    render() {
        return(
            <div className={header}>
                <img alt="Shows Logo" className={logo} src={showLogo} />
            </div>
        )
    }
}