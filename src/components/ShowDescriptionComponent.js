import React, { Component } from 'react';
import { css } from 'emotion';
import state from '../state';
import { TextArialComponent } from './TextArialComponent';
import { observer } from 'mobx-react';

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
    display: inline-flex;
    flex-direction: row;
    color: rgb(80, 80, 80);
    font-family: Arial, sans-serif;
    vertical-align: middle;
    line-height: 25px;  
    text-decoration: none;
    font-size: 17px;
    border: 3px solid rgb(245, 245, 245);
    border-radius: 40px;
    padding: 10px;
    margin-right: 20px;
    margin-top: 15px;
`;

@observer
export class ShowDescriptionComponent extends Component {
    render() {
        return (
            <div className={desc}>
                <div>
                    <p className={showTitle}>{state.showTitle}</p>
                    <div className={sideButton}>👍 {state.showLikesCount}</div>
                    <div className={sideButton}>👎 12</div>
                </div>
                <TextArialComponent>{state.showDescription}</TextArialComponent>
            </div>
        )
    }
}