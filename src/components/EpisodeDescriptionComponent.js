import React, { Component } from 'react';
import { css } from 'emotion';
import { arial20 } from '../styles/font';

const title = css`
    font-size: 35px;
    font-family: Arial, sans-serif;
    color: rgb(80, 80, 80);
`;

const info = css`
    margin-left: 300px;
    width: 800px;
`;

export class EpisodeDescriptionComponent extends Component {
    render() {
        return (
            <div className={info}>
                <p className={title}>{this.props.title}</p>
                <p className={arial20}>{this.props.description}</p>
            </div>
        )
    }
}