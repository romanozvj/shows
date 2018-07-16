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
        const url = this.props.match.url;
        fetch('https://api.infinum.academy/api/shows' + url + '/episodes')
            .then((data) => data.json())
            .then((response) => this.setState( { episodes: response.data, } ));

        fetch('https://api.infinum.academy/api/shows' + url)
            .then((data) => data.json())
            .then((response) => this.setState( { description: response.data.description, } ));
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