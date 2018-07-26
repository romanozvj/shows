import React, { Component } from 'react';
import { getShowData } from '../services/show';
import { ShowComponent } from '../components/ShowComponent';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';

@inject('state')
@observer
export class ShowContainer extends Component {
    
    @action
    componentWillMount() {
        getShowData(this.props.state, this.props.match.params.showId);
        this.props.state.currentEpisode.showIndex = -1;
        this.props.state.currentEpisode.episodeIndex = -1;
    }

    @action.bound
    _onClickFavourite() {
        const idOfCurrentShow = this.props.match.params.showId;
        const currentShow = this.props.state.shows.find((show) => show._id === idOfCurrentShow);
        this.props.state.favouriteShows.push(currentShow);
    }

    render() {
        const id = this.props.match.params.showId;
        return (
            <ShowComponent
                show={this.props.state.shows.find((show) => show._id === id)}
                onClickFavourite={this._onClickFavourite} />
        )
    }
}