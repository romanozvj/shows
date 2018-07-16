import React, { Component } from 'react';

export default class App extends Component {
  constructor(args) {
    super(args);

    this.state = {
      shows: [],
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    fetch('https://api.infinum.academy/api/shows')
    //.then ((data) => console.log(data))
      .then((data) => data.json())
      .then((response) => this.setState({ shows: response.data }));
  }

  render() {
    return (
      <div>
        {
          this.state.shows.length > 0
            ? <ul>{this.state.shows.map((show) => <li key={show._id}>{show.title}</li>);}</ul>
            : <button onClick={this._onButtonClick} type="button">
                Load shows
              </button>
        }
      </div>
    );
  }
}