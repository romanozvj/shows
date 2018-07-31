import React, { Component } from 'react';
import { ShowGridItemComponent } from '../components/ShowGridItemComponent';
import { css } from 'emotion';
import { getAllShows } from '../services/show';
import { observer, inject } from 'mobx-react';
import { runInAction } from '../../node_modules/mobx';

const showGridWrapperFav = css`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 82px 22px;
  grid-auto-rows: auto;
  padding-top: 30px;
  padding-bottom: 50px;
  border-bottom: 3px solid rgb(235, 235, 235);
`;

const showGridWrapperAll = css`
  display: grid;
  margin: auto;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 82px 22px;
  grid-auto-rows: auto;
  padding-top: 30px;
  padding-bottom: 50px;
`;

const showBodyWrapper = css`
  padding: 130px;
  background-color: rgb(248, 248, 248);
`;


const category = css`
  padding-top: 50px;
  font-family: Arial, sans-serif;
  font-size: 40px;
  color: rgb(45, 45, 45);
`;

@inject('state')
@observer
export class ShowsContainer extends Component {

  componentWillMount() {
    console.log(this.props.state.currentUser);
    if (this.props.state.currentUser.loginToken === 'undefined') this.props.history.push('/login');
    if (this.props.state.currentUser.loginToken) return;
    else {
      localStorage.rememberedLoginToken ?
        runInAction(() => {
          this.props.state.currentUser.name = localStorage.rememberedName;
          this.props.state.currentUser.loginToken = localStorage.rememberedLoginToken;
        }) :
        this.props.history.push('/login');
    }
  }

  componentDidMount() {
    getAllShows(this.props.state);
  }

  render() {
    return (
      <div className={showBodyWrapper}>
        <div className={category}>My favourite shows</div>
        <div className={showGridWrapperFav}>
          {
            this.props.state.favouriteShows.map((show) =>
              <ShowGridItemComponent
                show={show}
                key={show._id} />)
          }
        </div>
        <div className={category}>All shows</div>
        <div className={showGridWrapperAll}>
          {this.props.state.shows.map((show) =>
            <ShowGridItemComponent
              show={show}
              key={show._id} />)
          }
        </div>
      </div>

    )
  }
}