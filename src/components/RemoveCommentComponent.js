import React, { Component } from 'react';
import { css } from 'emotion';
import { action } from 'mobx';
import { removeComment } from '../services/show';

const buttonClass = css`
    background-color: rgb(255, 117, 140);
    border-radius: 7px;
    border: none;
    color: white;
    max-height: 100px;
    text-align: center;
    font-family: Arial, sans-serif;
    display: inline-block;
    float: right;
    margin-left: 30px;
    font-size: 18px;
    padding: 15px;
`;

export class RemoveCommentComponent extends Component {

    @action.bound
    async _handleRemoveCommentButtonClick() {
        await removeComment(this.props.commentId, this.props.loginToken);
        this.props.loadComments(this.props.state, this.props.episodeId);
    }

    render() {
        const button =
            this.props.commenter === this.props.currentUser ?
                <button
                    className={buttonClass}
                    onClick={this._handleRemoveCommentButtonClick}
                >
                    Remove comment
                </button> :
                null
        return button;
    }
}