import React, { Component } from 'react';
import { css } from 'emotion';
import placeholder from '../images/placeholder.png';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const item = css`
    vertical-align: top;
    display: inline-block;
    text-align: center;
`;

const caption = css`
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 30px;
    color: rgb(83, 83, 83);
`;

const imageCss = css`
    width: 100%;
    width: 100%;
`;

@observer
export class ShowGridItemComponent extends Component {
    render() {
        const { show } = this.props;
        const image =
            show.imageUrl ?
                `https://api.infinum.academy/${show.imageUrl}` :
                placeholder;
        return (
            <div className={item}>
                <Link to={`/show/${show._id}`}>
                    <img
                        alt={show.title}
                        className={imageCss}
                        src={image} />
                </Link>
                <p className={caption}>{show.title}</p>
            </div>
        )
    }
}