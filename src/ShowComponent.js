import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class ShowComponent extends Component {
    render() {
        //console.log(this);
        return (
            <li>
                <Link to={"/" + this.props.id}>{this.props.title}</Link>
            </li>
        )
    }
}