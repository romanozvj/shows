import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
import { css } from 'emotion';
import placeholder from './placeholder.png';

const itemClass = css`
  vertical-align: top;
  display: inline-block;
  text-align: center;
`;

const captionClass = css`
  display: block;
  font-family: Arial, sans-serif;
  font-size: 20px;
  color: rgb(83, 83, 83);
`;

const imageClass = css`
    width: 100%;
    width: 100%;
`;

export class ShowComponent extends Component {
    render() {
        return (
            <div className={itemClass}>
                <a href={'/show/' + this.props.id}>
                <img className={imageClass} src={placeholder} />
                </a>
                <span className={captionClass}>{this.props.title}</span>
            </div>
        )
    }
}