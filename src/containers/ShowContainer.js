import React, { Component } from 'react';
import { getData } from '../services/show';
import { ShowComponent } from '../components/ShowComponent';
import { observer } from 'mobx-react';
import state from '../state';

@observer
export class ShowContainer extends Component {
    constructor(args) {
        super(args);
        this._onClickFavourite=this._onClickFavourite.bind(this);
    }
    componentDidMount() {
        getData(this.props.match.params.showId);
    }

    _onClickFavourite() {
        const id = this.props.match.params.showId;
        console.log(id);
        const show = state.shows.find((show) => show.id = id);
        console.log(show);
    }

    render() {
        return (
            <ShowComponent onClickFavourite={this._onClickFavourite} />
        )
    }
}