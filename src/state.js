import { observable } from 'mobx';

class State {

  @observable
  shows = [];

  @observable
  favouriteShows = [];

  @observable
  showTitle = "";

  @observable
  showDescription = "";

  @observable
  showLikesCount = 0;

  @observable
  episodes = [];

  @observable
  loadingStates = {
      shows: false,
      showData: false
  };
}

export default new State();