import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import placeholder from '../placeholder.png';
import { TextArialComponent } from './TextArialComponent';
import state from '../state';
import { EpisodeComponent } from './EpisodeComponent';

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

const desc = css`
    grid-area: desc;
`;

const side = css`
    grid-area: side;
`;

const eps = css`
    grid-area: eps;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
`;

const wrapper = css`
    margin: 0px 130px 130px 130px;
`;

const placeholderClass = css`
    width: 300px;
    height: 400px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 30px;
`;

const links = css`
    padding-top: 30px;
    color: rgb(255, 123, 145);
    font-size: 17px;
    font-family: Arial, sans-serif;
    border-top: 2px solid rgb(248, 248, 248);

    * {
        display: block;
        margin: 10px;
    }
`;

const showTitle = css`
    display: inline-block;
    margin-right: 40px;
    font-family: Arial, sans-serif;
    font-size: 35px;
    color: rgb(45, 45, 45);
`;

const category = css`
    color: rgb(255, 123, 145);
    font-family: Arial, sans-serif;
    font-size: 25px;
    padding-bottom: 20px;
    border-bottom: 2px solid rgb(248, 248, 248);
`;

const sideButton = css`
    display: inline-block;
    color: rgb(80, 80, 80);
    font-family: Arial, sans-serif;
    font-size: 17px;
    border: 3px solid rgb(245, 245, 245);
    border-radius: 40px;
    padding: 10px;
    margin-right: 20px;
    margin-top: 15px;
`;

@observer
export class ShowComponent extends Component {
    render() {
        console.log(this.props.state.loadingStates.shows);
        return (
            <div className={wrapper}>
                <div className={sideButton}>←</div>
                <div className={gridWrapper}>
                    <div className={desc}>
                        <div>
                            <p className={showTitle}>{this.props.state.showTitle}</p>
                            <div className={sideButton}>👍 {this.props.state.showLikesCount}</div>
                            <div className={sideButton}>👎 12</div>
                        </div>

                        <TextArialComponent>{this.props.state.showDescription}</TextArialComponent>
                    </div>

                    <div className={side}>

                        <div className={sideButton}>
                            Add episode
                        </div>

                        <div className={sideButton}>
                            Favorite
                        </div>

                        <img src={placeholder} className={placeholderClass} />

                        <div className={links}>
                            <p>Official website</p>
                            <p>Wikipedia</p>
                            <p>IMDB</p>
                        </div>

                    </div>

                    <div className={eps}><div className={category}>SEASONS & EPISODES</div>
                        {state.episodes.map((episode) => <EpisodeComponent title={episode.title} description={episode.description} /> )}</div>
                </div>
            </div>
        )
    }
}