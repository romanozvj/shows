import React, { Component } from 'react';
import { ShowComponent } from './ShowComponent';
import { css } from 'emotion';

export const showGridWrapper = css`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 82px 22px;
  grid-auto-rows: auto;
  padding-top: 30px;
  padding-bottom: 15px;
`;

export const showBodyWrapper = css`
  padding: 130px;
  
  background-color: rgb(248, 248, 248);
`;


export const category = css`
  display: block;
  font-family: Arial, sans-serif;
  font-size: 40px;
  color: rgb(45, 45, 45);
`;

export class ShowContainer extends Component {
  constructor(args) {
    super(args);

    this.state = {
      shows: [],
    };
  }

  componentDidMount() {
    fetch('https://api.infinum.academy/api/shows')
      .then((data) => data.json())
      .then((response) => this.setState({ shows: response.data }));
  }

  render() {
    return (
      <div className={showBodyWrapper}>
        <span className={category}>All shows</span>
        <div className={showGridWrapper}>
          {this.state.shows.map((show) => <ShowComponent key={show._id} id={show._id} title={show.title} />)}
        </div>
      </div>
    );
  }
}