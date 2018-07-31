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
    color: rgb(80, 80, 80);
    font-family: Arial, sans-serif;
    vertical-align: middle;
    line-height: 25px;
    width: 50px;
    text-decoration: none;
    font-size: 17px;
    border: 3px solid rgb(245, 245, 245);
    border-radius: 40px;
    padding: 10px;
    margin-right: 20px;
`;

const likes = css`
    display: inline-block;
    margin-right: 13px;
    color: rgb(255, 123, 145);
    font-family: Arial, sans-serif;
    font-size: 25px;
`;

@observer
export class ShowDescriptionComponent extends Component {
    render() {
        return (
            'data' in this.props.show ?
                <div className={desc}>
                    <div>
                        <p className={showTitle}>{this.props.show.data[0].title}</p>
                        <button onClick={this.props.onClickLike} className={sideButton}>👍</button>
                        <p className={likes}>{this.props.show.data[0].likesCount}</p>
                        <button onClick={this.props.onClickDislike} className={sideButton}>👎</button>
                    </div>
                    <p className={arial20}>{this.props.show.data[0].description}</p>
                </div> :
                <p>Loading...</p>
        )
    }
}