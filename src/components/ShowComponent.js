import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion';
import { ShowDescriptionComponent } from './ShowDescriptionComponent';
import { ShowSideInfoComponent } from './ShowSideInfoComponent';
import { EpisodeListComponent } from './EpisodeListComponent';
import { ArrowComponent } from './ArrowComponent';

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

@observer
export class ShowComponent extends Component {
    render() {
        return (
            <div className={wrapper}>
                <ArrowComponent to="/" />
                <div className={gridWrapper}>
                    <ShowDescriptionComponent show={this.props.show} />
                    <ShowSideInfoComponent
                        onClickFavourite={this.props.onClickFavourite}
                        onClickAddEpisode={this.props.onClickAddEpisode}
                        imageUrl={this.props.show.imageUrl} />
                    <EpisodeListComponent show={this.props.show} />
                </div>
            </div>
        )
    }
}