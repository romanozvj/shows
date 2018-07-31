import { get, post, deleteRequest } from './api';
import { runInAction } from 'mobx';


export async function getAllShows(state) {
  const shows = await get('shows');
  runInAction(() => {
    state.shows.replace(shows);
  });
}

export async function getShowData(state, id) {
  const data = await Promise.all([
    get(`shows/${id}`),
    get(`shows/${id}/episodes`)
  ]);
  const showIndex = state.shows.findIndex((show) => show._id === id);
  runInAction(() => {
    state.shows[showIndex].data = data;
  });
}

export async function getEpisodeComments(state, episodeId) {
  const showId = await get(`episodes/${episodeId}`).then((res) => res.showId);
  const comments = await get(`episodes/${episodeId}/comments`);
  const showIndex = state.shows.findIndex((show) => show._id === showId);
  const episodeIndex = state.shows[showIndex].data[1].findIndex((episode) => episode._id === episodeId);
  runInAction(() => {
    state.currentEpisode.showIndex = showIndex;
    state.currentEpisode.episodeIndex = episodeIndex;
    state.shows[showIndex].data[1][episodeIndex].comments = comments;
  });
}

export function postComment(comment, loginToken) {
  return post('comments', JSON.stringify(comment), loginToken);
}

export function postEpisode(episode, loginToken) {
  return post('episodes', JSON.stringify(episode), loginToken);
}

export function likeOrDislike(showId, likeOrDislike, loginToken) {
  return post(`shows/${showId}/${likeOrDislike}`, null, loginToken);
}

export function removeComment(comment, loginToken) {
  return deleteRequest(`comments/${comment}`, loginToken);
}