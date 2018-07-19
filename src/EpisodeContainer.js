import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { EpisodeComponent } from './EpisodeComponent'

export class EpisodeContainer extends Component {
    constructor(args) {

        super(args);

        this.state = {
            episodes: [],
        };
    }

    componentDidMount() {
        const id = this.props.match.params.showId;
        Promise.all([
            fetch(`https://api.infinum.academy/api/shows/${id}/episodes`).then((response) => response.json()),
            fetch(`https://api.infinum.academy/api/shows/${id}`).then((response) => response.json())
        ])
            .then((data) => this.setState({
                episodes: data[0].data,
                description: data[1].data.description
            }));
    }


    render() {
        return (
            <div>
                <p>{this.state.description}</p>
                <ul>{this.state.episodes.map((episode) => <EpisodeComponent key={episode._id} title={episode.title} />)}</ul>
                <Link to="/">Back to main page</Link>
            </div>
        );

    }
}