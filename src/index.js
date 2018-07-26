import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { ShowsContainer } from './containers/ShowsContainer';
import { ShowContainer } from './containers/ShowContainer';
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import { UserContainer } from './containers/UserContainer';
import { EpisodeContainer } from './containers/EpisodeContainer';
import state from './state';
import { configure } from 'mobx';


configure({ enforceActions: true });

ReactDOM.render((
    <Provider state={state}>
        <BrowserRouter>
            <div>
                <HeaderComponent />
                <Route exact path="/" component={ShowsContainer} />
                <Route exact path="/register" render={() => <UserContainer login={false} /> } />
                <Route exact path="/login" render={() => <UserContainer login={true} /> } />
                <Route exact path="/episode/:episodeId" component={EpisodeContainer} />
                <Route exact path="/show/:showId" component={ShowContainer} />
                <Route exact path="/" component={FooterComponent} />
                <Route exact path="/show/:showId" component={FooterComponent} />
            </div>
        </BrowserRouter>
    </Provider>

), document.querySelector('.js-app'));