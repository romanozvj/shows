import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import { ShowContainer } from './ShowContainer';
import { EpisodeContainer } from './EpisodeContainer';
import { RegisterContainer } from './RegisterContainer';
import { LoginContainer } from './LoginContainer';
import { HeaderComponent } from './HeaderComponent';
import { FooterComponent } from './FooterComponent';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <HeaderComponent />
            <div>
                <Route exact path = "/" component = {ShowContainer} />
                <Route exact path = "/register" component = {RegisterContainer} />
                <Route exact path = "/login" component = {LoginContainer} />
                <Route exact path = "/show/:showId" component = {EpisodeContainer} />
            </div>
            <Route exact path = "/" component = {FooterComponent} />
        </div>
    </BrowserRouter>

), document.querySelector('.js-app'));