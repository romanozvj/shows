import React, { Component } from 'react'; 
import { css } from 'emotion';
import placeholder from '../placeholder.png';
import { observer } from 'mobx-react';

const item = css`
  vertical-align: top;
  display: inline-block;
  text-align: center;
`;

const caption = css`
  display: block;
  font-family: Arial, sans-serif;
  font-size: 30px;
  color: rgb(83, 83, 83);
`;

const image = css`
    width: 100%;
    width: 100%;
`;

@observer
export class ShowComponent extends Component {
    render() {
        const { show } = this.props;
        return (
            <div className={item}>
                <a href={'/show/' + this.props.show._id}>
                <img alt={show.title} className={image} src={placeholder} />
                </a>
                <span className={caption}>{show.title}</span>
            </div>
        )
    }
}