import { observable, computed } from 'mobx';

class State {

  @observable
  shows = [];

  @observable
  favouriteShows = [];

  @computed
  get currentUserToken () {
    return 'loginToken' in localStorage ?
      localStorage.loginToken :
      sessionStorage.loginToken;
  }


  @observable
  currentEpisode = {
    showIndex: -1,
    episodeIndex: -1
  }
}

export default new State();