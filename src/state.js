import { observable } from 'mobx';

class State {

  @observable
  shows = [];
  episodes = [];

  @observable
  loadingStates = {
      shows: false,
      episodes: false
  };
}

export default new State();