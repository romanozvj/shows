import React, { Component } from 'react';
import { css } from 'emotion';
import { EpisodeGridItemComponent } from './EpisodeGridItemComponent';
import { observer } from 'mobx-react';

const eps = css`
    grid-area: eps;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
`;

const category = css`
    color: rgb(255, 123, 145);
    font-family: Arial, sans-serif;
    font-size: 25px;
    padding-bottom: 20px;
    border-bottom: 2px solid rgb(248, 248, 248);
`;

@observer
export class EpisodeListComponent extends Component {
    render() {
        return (
            'data' in this.props.show ?
                <div className={eps}>
                    <p className={category}>SEASONS & EPISODES</p>
                    {this.props.show.data[1].map((episode) =>
                        <EpisodeGridItemComponent
                            episode={episode}
                            key={episode._id}
                            imageUrl={episode.imageUrl}
                        />
                    )}
                </div> :
                <p>Loading...</p>
        )
    }
}