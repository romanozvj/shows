import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { css } from 'emotion';

import { ShowContainer } from './ShowContainer';
import { EpisodeContainer } from './EpisodeContainer';
import { RegisterContainer } from './RegisterContainer';
import { LoginContainer } from './LoginContainer';
import { HeaderContainer } from './HeaderContainer';

ReactDOM.render((
    <BrowserRouter>
        <div>
            <HeaderContainer />
            <div className={css`background-color: rgb(240, 240, 240);`}>
                <Route exact path = "/" component = {ShowContainer} />
                <Route exact path = "/register" component = {RegisterContainer} />
                <Route exact path = "/login" component = {LoginContainer} />
                <Route exact path = "/show/:showId" component = {EpisodeContainer} />
            </div>
        </div>
    </BrowserRouter>

), document.querySelector('.js-app'));