import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { css } from 'emotion';
import { AddEpisodeFormComponent } from './AddEpisodeFormComponent';

const modal = css`
    height: 650px;
    width: 600px;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    padding: 20px;
    background-color: white;
    border-radius: 7px;

    select {
        padding: 5px 8px;
        width: 30%; 
        border: none;
        box-shadow: none;
        background: transparent;
        background-image: none;
        -webkit-appearance: none;
        font-size: 20px;
        font-family: Arial, sans-serif;
        color: rgb(255, 123, 145);
        border-bottom: 2px solid rgb(240, 240, 240);
        margin-bottom: 75px;
    }
`;

const header = css`
    display: inline-block;
    margin: 0;
    font-family: Arial, sans-serif;
    font-size: 25px;
    color: rgb(45, 45, 45);
    width: auto;
    height: auto;
`;

const exitButton = css`
    height: 50px;
    width: 50px;
    font-size: 30px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid rgb(248, 248, 248);
    position: absolute;
    top: 20px;
    right: 20px;
`;

const backgroundWrapper = css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const dropZone = css`
    margin-top: 30px;
    border: 3px dashed rgb(220, 220, 220);
    width: 100%;
    height: 150px;
    background-color: white;
    position: relative;
    text-align: center;
    margin-bottom: 30px;
`;

const textInDropzone = css`
    display: inline-block;
`;

export class AddEpisodeModalComponent extends Component {
    render() {
        return(
            <div className={backgroundWrapper}>
                <div className={modal}>
                    <p className={header}>Add new episode</p>
                    <button className={exitButton} onClick={this.props.onClickExit}>x</button>
                    <Dropzone
                        className={dropZone}
                        onDrop={this.props.onDrop}
                    >
                        {this.props.imagePreview}
                        <p className={textInDropzone}>{this.props.textInDropzone}</p>
                    </Dropzone>
                    <AddEpisodeFormComponent
                        title={this.props.title}
                        onInputChange={this.props.onInputChange}
                        description={this.props.description}
                        onClickSubmit={this.props.onClickSubmit}
                        onFormSubmit={this.props.onFormSubmit}
                     />
                </div>
            </div>
        )
    }
}