import React, { Component } from 'react';
import { css } from 'emotion';

const titleAndDesc = css`
    display: block;
    border: none;
    outline: none;
    width: 100%;
    border-bottom: 2px solid rgb(240, 240, 240);
    margin-top: 20px;
    margin-bottom: 75px;
    font-size: 20px;
    font-family: Arial, sans-serif;
    color: rgb(80, 80, 80);
`;

const submitButton = css`
    display: inline-block;
    background-color: rgb(255, 117, 140);
    border-radius: 7px;
    margin: 0 auto;
    border: none;
    color: white;
    text-align: center;
    font-family: Arial, sans-serif;
    display: block;
    font-size: 18px;
    padding: 15px;
`;

const label = css`
    font-size: 20px;
    font-family: Arial, sans-serif;
    color: rgb(80, 80, 80);
`;

export class AddEpisodeFormComponent extends Component {
    render() {
        return (
            <form onSubmit={this.props.onFormSubmit}>
                <input
                    className={titleAndDesc}
                    placeholder="Episode title"
                    type="text"
                    id="newEpisodeTitle"
                    value={this.props.title}
                    onChange={this.props.onInputChange('title')}
                />
                <label className={label} htmlFor="newEpSeasonNumber">Season:</label>
                <select
                    onChange={this.props.onInputChange('season')}
                    id="newEpSeason"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label className={label} htmlFor="newEpEpisodeNumber">Episode:</label>
                <select
                    onChange={this.props.onInputChange('episode')}
                    id="mewEpEpisodeNumber"
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input
                    className={titleAndDesc}
                    placeholder="Episode description"
                    type="text"
                    id="newEpisodeDescription"
                    value={this.props.description}
                    onChange={this.props.onInputChange('description')}
                />
                <button className={submitButton}>ADD NEW EPISODE</button>
            </form>
        )
    }
}