import React, { Component } from 'react';

export class EpisodeComponent extends Component {
    render() {
        return (
            <li>
                {this.props.title}
            </li>
        )
    }
}