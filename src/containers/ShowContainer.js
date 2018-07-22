import React, { Component } from 'react';
import { getData } from '../services/show';
import { ShowComponent } from '../components/ShowComponent';
import { observer } from 'mobx-react';
import state from '../state';

@observer
export class ShowContainer extends Component {

    componentDidMount() {
        getData(this.props.match.params.showId);
    }


    render() {
        return (
            <ShowComponent state={state} />
        )
    }
}