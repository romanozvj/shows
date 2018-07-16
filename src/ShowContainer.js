import React, { Component } from 'react';
import { ShowComponent } from './ShowComponent';

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
        <ul>{this.state.shows.map((show) => <ShowComponent key={show._id} id={show._id} title={show.title} />)}</ul>
    );
  }
}