import React, { Component } from 'react';
import { ShowComponent } from './ShowComponent';
import { showGridWrapper, showBodyWrapper, category } from './showGridCss';

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