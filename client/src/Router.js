import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import ArtistPage from "./pages/ArtistPage";
import ErrorPage from "./pages/ErrorPage";
import NotFoundPage from "./pages/NotFoundPage";

import {
  HOME_URL,
  SEARCH_URL,
  AUTH_CALLBACK_URL,
  ARTIST_URL,
  ERROR_URL,
  NOT_FOUND_URL,
} from "./routes";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={HOME_URL} component={HomePage} />
      <Route exact path={SEARCH_URL} component={SearchPage} />
      <Route path={AUTH_CALLBACK_URL} component={AuthCallbackPage} />
      <Route path={ARTIST_URL} component={ArtistPage} />
      <Route path={ERROR_URL} component={ErrorPage} />
      <Route path={NOT_FOUND_URL} component={NotFoundPage} />
      <Redirect to={NOT_FOUND_URL} />
    </Switch>
  </BrowserRouter>
);

export default Router;
