import React, { Component } from 'react';
import { ShowGridItemComponent } from '../components/ShowGridItemComponent';
import { css } from 'emotion';
import state from '../state';
import { getAll as getAllShows } from '../services/show';
import { observer } from 'mobx-react';

const showGridWrapper = css`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 82px 22px;
  grid-auto-rows: auto;
  padding-top: 30px;
  padding-bottom: 15px;
`;

const showBodyWrapper = css`
  padding: 130px;
  background-color: rgb(248, 248, 248);
`;


const category = css`
  display: block;
  font-family: Arial, sans-serif;
  font-size: 40px;
  color: rgb(45, 45, 45);
`;

@observer
export class ShowsContainer extends Component {

  componentDidMount() {
    getAllShows();
  }

  render() {

    return (
      <div className={showBodyWrapper}>
        <span className={category}>All shows</span>
        <div className={showGridWrapper}>
          {state.shows.map((show) => <ShowGridItemComponent show={show} key={show._id} />)}
        </div>
      </div>

    );
  }
}