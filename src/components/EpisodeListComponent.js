import React, { Component } from 'react';
import { css } from 'emotion';
import { EpisodeGridItemComponent } from './EpisodeGridItemComponent';
import { observer } from 'mobx-react';

const eps = css`
    grid-area: eps;
    display: grid;
    height: 500px;
    overflow: auto;
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
                <div>
                    <p className={category}>SEASONS & EPISODES</p>
                    <div className={eps}>
                        {this.props.show.data[1].map((episode) =>
                            <EpisodeGridItemComponent
                                episode={episode}
                                key={episode._id}
                                imageUrl={episode.imageUrl}
                            />
                        )}
                    </div>
                </div> :
                <p>Loading...</p>
        )
    }
}