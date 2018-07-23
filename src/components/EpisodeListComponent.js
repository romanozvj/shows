import React, { Component } from 'react';
import { css } from 'emotion';
import state from '../state';
import { EpisodeComponent } from './EpisodeComponent';
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
            <div className={eps}><div className={category}>SEASONS & EPISODES</div>
                {state.episodes.map((episode) =>
                    <EpisodeComponent
                        title={episode.title}
                        key={episode._id}
                        id={episode._id}
                        description={episode.description} />)
                }
            </div>
        )
    }
}