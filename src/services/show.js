import { get } from './api';
import state from '../state';
import { toJS } from '../../node_modules/mobx';


export async function getAll() {
  state.loadingStates.shows = true;
  const shows = await get('shows');
  state.shows.replace(shows);
  state.loadingStates.shows = false;
}

export async function getData(id) {
  state.loadingStates.showData = true;
  const data = await Promise.all([
    get(`shows/${id}`),
    get(`shows/${id}/episodes`)
  ]);
  state.showTitle = data[0].title;
  state.showDescription = data[0].description;
  state.showLikesCount = data[0].likesCount;
  state.episodes = data[1];
  state.loadingStates.showData = false;
  console.log(toJS(state));
}