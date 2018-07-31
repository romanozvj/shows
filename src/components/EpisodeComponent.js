import React, { Component } from 'react';
import placeholder from '../images/placeholder.png';
import { css } from 'emotion';
import { observer } from 'mobx-react';
import { ArrowComponent } from './ArrowComponent';
import { arial20 } from '../styles/font';
import userPlaceholder from '../images/userPlaceholder.png';
import { EpisodeDescriptionComponent } from './EpisodeDescriptionComponent';
import { CommentFormComponent } from './CommentFormComponent';
import { RemoveCommentComponent } from './RemoveCommentComponent';

const imageClass = css`
    display: block;
    width: 90%;
    height: 800px;
    margin: auto;
`;

const arrow = css`
    margin-bottom: -100px;
`;

const commentsContainer = css`
    margin-left: 300px;
    width: 50%;
`;

const category = css`
    display: inline-block;
    color: rgb(255, 123, 145);
    font-family: Arial, sans-serif;
    font-size: 20px;
    margin-top: 60px;
    margin-right: 15px;
`;

const commentsInfo = css`
    display: inline;
    font-size: 20px;
    font-family: Arial, sans-serif;
    color: rgb(169, 169, 169);
`;

const commentsGrid = css`
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr;
`;

const userPlaceholderClass = css`
    float: left;
    display: block;
    margin-top: 30px;
    height: 45px;
    width: auto;
`;

const commenter = css`
    color: rgb(255, 123, 145);
    font-family: Arial, sans-serif;
    font-size: 20px;
`;

const commentInfo = css`
    display: inline-block;
    margin-left: 75px;
`;

const commentWrapper = css`
    display: grid;
    grid-template-columns: 1fr 7fr 1fr;
    padding: 20px;
    border-bottom: 2px solid rgb(248, 248, 248);
`;

@observer
export class EpisodeComponent extends Component {
    render() {
        const image =
            this.props.episode === null ?
                placeholder :
                this.props.episode.imageUrl ?
                    `https://api.infinum.academy/${this.props.episode.imageUrl}` :
                    placeholder;

        return (
            this.props.episode === null ?
                <p>Loading episode...</p> :
                <div>
                    <ArrowComponent className={arrow} to={`/show/${this.props.showId}`} />
                    <img className={imageClass} alt="" src={image} />

                    <EpisodeDescriptionComponent
                        title={this.props.episode.title}
                        description={this.props.episode.description} />

                    <div className={commentsContainer}>
                        <p className={category}>COMMENTS</p>
                        <p className={commentsInfo}>({this.props.episode.comments.length})</p>

                        <CommentFormComponent
                            handleCommentInput={this.props.handleCommentInput}
                            commentInputValue={this.props.commentInputValue}
                            commentInputPlaceholder={this.props.commentInputPlaceholder}
                            handleCommentButtonClick={this.props.handleCommentButtonClick}
                        />

                        <div className={commentsGrid}>
                            {this.props.episode.comments.map((comment) =>
                                <div key={comment._id} className={commentWrapper}>
                                    <img className={userPlaceholderClass} src={userPlaceholder} />
                                    <div className={commentInfo}>
                                        <p className={commenter}>{comment.userEmail.substring(0, comment.userEmail.indexOf('@'))}</p>
                                        <p className={arial20}>{comment.text}</p>
                                    </div>
                                    <RemoveCommentComponent
                                        commenter={comment.userEmail.substring(0, comment.userEmail.indexOf('@'))}
                                        currentUser={this.props.currentUser}
                                        commentId={comment._id}
                                        loginToken={this.props.loginToken}
                                        loadComments={this.props.loadComments}
                                        episodeId={this.props.episode._id}
                                        state={this.props.state}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
        )
    }
}