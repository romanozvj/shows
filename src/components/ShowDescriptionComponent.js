import React, { Component } from 'react';
import { css } from 'emotion';
import { observer } from 'mobx-react';
import { arial20 } from '../styles/font';

const desc = css`
    grid-area: desc;
`;


const showTitle = css`
    display: inline-block;
    margin-right: 40px;
    font-family: Arial, sans-serif;
    font-size: 35px;
    color: rgb(45, 45, 45);
`;

const sideButton = css`
    display: inline-block;
    flex-direction: row;
    color: rgb(80, 80, 80);
    font-family: Arial, sans-serif;
    vertical-align: middle;
    line-height: 25px;
    width: 25px;
    text-decoration: none;
    font-size: 17px;
    border: 3px solid rgb(245, 245, 245);
    border-radius: 40px;
    padding: 10px;
    margin-right: 20px;
    margin-top: 15px;
`;

const likes = css`
    display: inline-block;
    margin-right: 13px;
`;

@observer
export class ShowDescriptionComponent extends Component {
    render() {
        return (
            'data' in this.props.show ?
                <div className={desc}>
                    <div>
                        <p className={showTitle}>{this.props.show.data[0].title}</p>
                        <div className={sideButton}>👍</div>
                        <p className={likes}>{this.props.show.data[0].likesCount}</p>
                        <div className={sideButton}>👎</div>
                    </div>
                    <p className={arial20}>{this.props.show.data[0].description}</p>
                </div> :
                <p>Loading...</p>
        )
    }
}