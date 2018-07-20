import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { ShowContainer } from './containers/ShowContainer';
import { EpisodeContainer } from './containers/EpisodeContainer';
import { HeaderComponent } from './components/HeaderComponent';
import { FooterComponent } from './components/FooterComponent';
import { UserContainer } from './containers/UserContainer';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <HeaderComponent />
            <div>
                <Route exact path = "/" component = {ShowContainer} />
                <Route exact path = "/register" render={() => <UserContainer login={false} /> } />
                <Route exact path = "/login" render={() => <UserContainer login={true} /> } />
                <Route exact path = "/show/:showId" component = {EpisodeContainer} />
            </div>
            <Route exact path = "/" component = {FooterComponent} />
        </div>
    </BrowserRouter>

), document.querySelector('.js-app'));