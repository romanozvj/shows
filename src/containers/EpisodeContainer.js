import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { getEpisodeComments, postComment } from '../services/show';
import { EpisodeComponent } from '../components/EpisodeComponent';
import { action, observable } from 'mobx';


@inject('state')
@observer
export class EpisodeContainer extends Component {
    componentDidMount() {
        getEpisodeComments(this.props.state, this.props.match.params.episodeId);
    }

    @observable
    componentState = {
        commentInputValue: ''
    }

    @action.bound
    _handleCommentInput(event) {
        this.componentState.commentInputValue = event.target.value;
    }

    @action.bound
    async _handleCommentButtonClick() {
        await postComment({
            text: this.componentState.commentInputValue,
            episodeId: this.props.match.params.episodeId
        }, this.props.state.currentUserToken);
        getEpisodeComments(this.props.state, this.props.match.params.episodeId);
    }

    render() {
        const currentShowIndex = this.props.state.currentEpisode.showIndex;
        const currentEpisodeIndex = this.props.state.currentEpisode.episodeIndex;
        const currentShowId =
            currentShowIndex > -1 && currentEpisodeIndex > -1 ?
                this.props.state.shows[currentShowIndex].data[0]._id :
                '';
        const episode =
            currentShowIndex > -1 && currentEpisodeIndex > -1 ?
                this.props.state.shows[currentShowIndex].data[1][currentEpisodeIndex] :
                null;
        return (
            <EpisodeComponent
                episode={episode}
                showId={currentShowId}
                handleCommentInput={this._handleCommentInput}
                commentInputValue={this.componentState.commentInputValue}
                commentInputPlaceholder="Post a comment..."
                handleCommentButtonClick={this._handleCommentButtonClick}
                currentUser={this.props.state.currentUser.name}
                loginToken={this.props.state.currentUserToken}
                loadComments={getEpisodeComments}
                state={this.props.state}
            />
        )
    }
}