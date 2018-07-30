import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { ShowsContainer } from './containers/ShowsContainer';
import { ShowContainer } from './containers/ShowContainer';
import { FooterComponent } from './components/FooterComponent';
import { UserContainer } from './containers/UserContainer';
import { EpisodeContainer } from './containers/EpisodeContainer';
import state from './state';
import { configure } from 'mobx';
import { HeaderContainer } from './containers/HeaderContainer';
import { AddEpisodeModalContainer } from './containers/AddEpisodeModalContainer';


configure({ enforceActions: true });

ReactDOM.render((
    <Provider state={state}>
        <BrowserRouter>
            <div>
                <Route path="/" render={(props) => <HeaderContainer {...props} /> } />
                <Route exact path="/show/:showId/addEpisode" component={AddEpisodeModalContainer} />
                <Route exact path="/" component={ShowsContainer} />
                <Route exact path="/register" render={(props) => <UserContainer {...props} login={false} /> } />
                <Route exact path="/login" render={(props) => <UserContainer {...props} login={true} /> } />
                <Route exact path="/episode/:episodeId" component={EpisodeContainer} />
                <Route path="/show/:showId" component={ShowContainer} />
                <Route exact path="/" component={FooterComponent} />
                <Route path="/show/:showId" component={FooterComponent} />
            </div>
        </BrowserRouter>
    </Provider>

), document.querySelector('.js-app'));