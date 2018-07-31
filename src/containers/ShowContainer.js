import React, { Component } from 'react';
import { getShowData, likeOrDislike } from '../services/show';
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
    _addEpisode() {
        this.props.history.push(`/show/${this.props.match.params.showId}/addEpisode`);
    }


    @action.bound
    _favourite() {
        const idOfCurrentShow = this.props.match.params.showId;
        const currentShow = this.props.state.shows.find((show) => show._id === idOfCurrentShow);
        if(!(this.props.state.favouriteShows.find((show) => show._id === idOfCurrentShow))) {
            this.props.state.favouriteShows.push(currentShow);
        }
    }

    @action.bound
    async _onClickLike() {
        await likeOrDislike(this.props.match.params.showId, 'like', this.props.state.currentUserToken);
        getShowData(this.props.state, this.props.match.params.showId);
    }

    @action.bound
    async _onClickDislike() {
        await likeOrDislike(this.props.match.params.showId, 'dislike', this.props.state.currentUserToken);
        getShowData(this.props.state, this.props.match.params.showId);
    }

    render() {
        const id = this.props.match.params.showId;
        return (
            <ShowComponent
                show={this.props.state.shows.find((show) => show._id === id)}
                onClickFavourite={this._favourite}
                onClickAddEpisode={this._addEpisode}
                onClickLike={this._onClickLike}
                onClickDislike={this._onClickDislike} />
        )
    }
}