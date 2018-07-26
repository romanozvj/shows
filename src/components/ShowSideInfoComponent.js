import React, { Component } from 'react';
import { css } from 'emotion';
import plus from '../images/plus.png';
import heart from '../images/heart.png';
import placeholder from '../images/placeholder.png';
import { observer } from 'mobx-react';

const icon = css`
    height: 25px;
    width: 25px;
    display: inline;
    margin-right: 10px;
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

const imageClass = css`
    display: block;
    width: 300px;
    height: 400px;
    align: left;
    margin-top: 20px;
    margin-bottom: 30px;
`;

const side = css`
    grid-area: side;
`;

const links = css`
    padding-top: 30px;
    color: rgb(255, 123, 145);
    text-decoration: none;
    font-size: 17px;
    font-family: Arial, sans-serif;
    border-top: 2px solid rgb(248, 248, 248);

    * {
        display: block;
        margin: 10px;
    }
`;

@observer
export class ShowSideInfoComponent extends Component {
    render() {
        const image =
            this.props.imageUrl ?
                `https://api.infinum.academy/${this.props.imageUrl}` :
                placeholder;
        return (
            <div className={side}>
                <div className={sideButton}>
                    <img alt="" className={icon} src={plus}></img>
                    Add episode
                </div>

                <button onClick={this.props.onClick} className={sideButton}>
                    <img alt="" className={icon} src={heart}></img>
                    Favorite
                </button>
                <img src={image} alt="" className={imageClass} />

                <div className={links}>
                    <p>Official website</p>
                    <p>Wikipedia</p>
                    <p>IMDB</p>
                </div>

            </div>
        )
    }
}