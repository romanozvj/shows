import { get } from './api';


export async function getAll(state) {
  state.loadingStates.shows = true;
  const shows = await get('shows');
  state.shows.replace(shows);
  state.loadingStates.shows = false;
}

export async function getData(id) {
  return await Promise.all([
    get(`shows/${id}`),
    get(`shows/${id}/episodes`)
  ]);
}