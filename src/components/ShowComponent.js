import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import { Link } from 'react-router-dom';
import arrow from '../icons/arrow.png';
import { ShowDescriptionComponent } from './ShowDescriptionComponent';
import { ShowSideInfoComponent } from './ShowSideInfoComponent';
import { EpisodeListComponent } from './EpisodeListComponent';

const gridWrapper = css`
    display: grid;
    margin-left: 160px;
    margin-right: 160px;
    grid-template-areas:
        "desc side"
        "eps side";
    grid-template-columns: 870px 1fr;
    grid-template-rows: 300px 1fr;
    grid-gap: 50px;
    grid-auto-rows: auto;
    padding-top: 30px;
    padding-bottom: 15px;
`;

const wrapper = css`
    margin: 0px 130px 130px 130px;
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

const arrowClass = css`
    height: 20px;
    width: 20px;
    display: inline;
`;

@observer
export class ShowComponent extends Component {
    render() {
        return (
            <div className={wrapper}>
                <Link to="/" className={sideButton}><img src={arrow} className={arrowClass} /></Link>
                <div className={gridWrapper}>
                    <ShowDescriptionComponent />
                    <ShowSideInfoComponent
                        onClick={this.props.onClickFavourite} />
                    <EpisodeListComponent />
                </div>
            </div>
        )
    }
}