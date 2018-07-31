import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { css } from 'emotion';
import { AddEpisodeModalComponent } from '../components/AddEpisodeModalComponent';
import { action, observable, runInAction } from 'mobx';
import { uploadFile } from '../services/media';
import { postEpisode, getShowData } from '../services/show';

const previewImage = css`
    display: block;
    margin: auto;
    max-height: 100px;
    max-width: 500px;
`;

@inject('state')
@observer
export class AddEpisodeModalContainer extends Component {

    @observable
    componentState = {
        imagePreview: '',
        title: '',
        description: '',
        season: '1',
        episode: '1',
        data: null,
        imageId: '',
    }

    @action.bound
    _onInputChange(fieldName) {
        return ((event) => {
            runInAction(() => {
                this.componentState[fieldName] = event.target.value;
            })
        })
    }

    @action.bound
    _onClickExit() {
        this.props.history.goBack();
    }

    @action.bound
    async _onFormSubmit(event) {
        event.preventDefault();
        await uploadFile(this.componentState.data, this.props.state.currentUserToken)
            .then((res) => this.componentState.imageId = res._id)
            .catch((err) => console.log(err));
        await postEpisode({
            showId: this.props.match.params.showId,
            mediaId: this.componentState.imageId,
            title: this.componentState.title,
            description: this.componentState.description,
            episodeNumber: this.componentState.episode,
            season: this.componentState.season,
        }, this.props.state.currentUserToken)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        getShowData(this.props.state, this.props.match.params.showId);
        this.props.state.currentEpisode.showIndex = -1;
        this.props.state.currentEpisode.episodeIndex = -1;
        this.props.history.goBack();
    }

    @action.bound
    _onDrop(files) {
        console.log(files);
        const data = new FormData();
        data.append('file', files[0]);
        this.componentState.data = data;
        this.componentState.imagePreview = <img className={previewImage} src={files[0].preview} />
    }

    render() {
        const textInDropzone =
            !this.componentState.imagePreview ?
                'Drag your image here or browse' :
                'Change photo';
        return (
            <AddEpisodeModalComponent
                onClickExit={this._onClickExit}
                onDrop={this._onDrop}
                imagePreview={this.componentState.imagePreview}
                onInputChange={this._onInputChange}
                title={this.componentState.title}
                description={this.componentState.description}
                season={this.componentState.season}
                episode={this.componentState.episode}
                textInDropzone={textInDropzone}
                onFormSubmit={this._onFormSubmit}
            />
        )
    }
}