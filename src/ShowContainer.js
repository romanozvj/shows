import React, { Component } from 'react';
import { ShowComponent } from './ShowComponent';
import { css } from 'emotion';

const showGridWrapper = css`
  display: grid;
  margin: auto;
  width: 70%;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 82px 22px;
  grid-auto-rows: auto;
`;


const showGridElement = css`

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
      <div className={showGridWrapper}>
        {this.state.shows.map((show) => <ShowComponent className={showGridElement} key={show._id} id={show._id} title={show.title} />)}
      </div>
    );
  }
}