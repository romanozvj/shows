import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { EpisodeComponent } from '../components/EpisodeComponent'
import { getData } from '../services/show';

export class EpisodeContainer extends Component {

    componentDidMount() {
        const id = this.props.match.params.showId;
        getData(id)
            .then((res) => console.log(res));
    }


    render() {
        return (
            
        );

    }
}

                /*<p>{this.state.description}</p>
                <ul>{this.state.episodes.map((episode) => <EpisodeComponent key={episode._id} title={episode.title} />)}</ul>
                <Link to="/">Back to main page</Link> */