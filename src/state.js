import { observable, computed } from 'mobx';

class State {

  @observable
  shows = [];

  @observable
  favouriteShows = [];

  @observable
  currentUser = {
    name: '',
    loginToken: '',
  };

  @computed
  get currentUserToken () {
    return 'loginToken' in localStorage ?
      localStorage.loginToken :
      this.currentUser.loginToken;
  }


  @observable
  currentEpisode = {
    showIndex: -1,
    episodeIndex: -1,
  }
}

export default new State();