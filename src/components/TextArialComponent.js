import React, { Component } from 'react';
import { css } from 'emotion';

const arial20 = css`
    font-size: 20px;
    font-family: Arial, sans-serif;
    color: rgb(80, 80, 80);
`;

export class TextArialComponent extends Component {
    render() {
        return(
            <p className={arial20}>{this.props.children}</p>
        )
    }
}