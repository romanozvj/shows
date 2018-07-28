import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import arrow from '../images/arrow.png';

const arrowWrapperClass = css`
    display: inline-flex;
    flex-direction: row;
    background-color: white;
    vertical-align: middle;
    line-height: 25px;  
    text-decoration: none;
    border: 3px solid rgb(245, 245, 245);
    border-radius: 40px;
    padding: 10px;
    margin-right: 20px;
    margin-top: 15px;
`;

const arrowClass = css`
    height: 20px;
    width: 20px;
    display: inline;
`;

export class ArrowComponent extends Component {
    render() {
        return (
            <Link to={this.props.to} className={arrowWrapperClass}>
                <img alt="" src={arrow} className={arrowClass} />
            </Link>
        )
    }
}