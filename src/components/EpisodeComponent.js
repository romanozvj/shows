import React, { Component } from 'react';
import placeholder from '../placeholder.png';
import { css } from 'emotion';
import { observer } from 'mobx-react';


const episodeContainer = css`
    padding: 20px;
`;

const thumbnail = css`
    float: left;
    img {
        display: block;
        width: 250px;
        height: 150px;
    }
`;

const content = css`
    margin-left: 260px;
`;

const description = css`
    width: 600px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 17px;
    font-family: Arial, sans-serif;
    color: rgb(80, 80, 80);
`;

const title = css`
    display: block;
    font-family: Arial, sans-serif;
    font-size: 20px;
    color: rgb(45, 45, 45);
`;

const votes = css`
    font-family: Arial, sans-serif;
    font-size: 17px;
    color: rgb(200, 200, 200);
`;

@observer
export class EpisodeComponent extends Component {
    render() {
        return(
            <div className={episodeContainer}>
                <div className={thumbnail}>
                    <img alt="" src={placeholder} />
                </div>
                <div className={content}>
                    <p className={title}>{this.props.title}</p>
                    <p className={description}>{this.props.description}</p>
                    <div className={votes}>👎 82 👍 128</div>
                </div>
            </div>
        )
    }
}