import React, { Component } from 'react';
import { css } from 'emotion';

const commentInput = css`
    width: 100%;
    height: 150px;
    border-radius: 10px;
    background-color: rgb(248, 248, 248);
    font-size: 20px;
    padding: 20px;
    font-family: Arial, sans-serif;
    color: rgb(80, 80, 80);
`;

const postCommentButton = css`
    float: right;
    background-color: rgb(255, 117, 140);
    border-radius: 7px;
    border: none;
    color: white;
    text-align: center;
    font-family: Arial, sans-serif;
    display: block;
    font-size: 18px;
    width: 170px;
    height: 60px;
    margin-top: 30px;
    margin-bottom: 100px;
`;

export class CommentFormComponent extends Component {
    render() {
        return (
            <div>
                <textarea
                    type="text"
                    className={commentInput}
                    onChange={this.props.handleCommentInput}
                    value={this.props.commentInputValue}
                    placeholder={this.props.commentInputPlaceholder}
                />
                <button
                    className={postCommentButton}
                    onClick={this.props.handleCommentButtonClick} >
                    COMMENT
                </button>
            </div>
        )
    }
}