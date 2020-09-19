import React, { lazy, Suspense } from "react";
import { Switch, Redirect, Route } from "react-router-dom";

import routes from "../routes";
import Loader from "react-loader-spinner";
import Layout from "./Layout";

const App = () => (
  <>
    <Layout>
      <Suspense
        fallback={
          <Loader
            type="MutatingDots"
            color="#00BFFF"
            height={100}
            width={100}
          />
        }
      >
        <Switch>
          <Route
            path={routes.home}
            exact
            component={lazy(() => import("../views/HomePage"))}
          />

          <Route
            path={routes.movies}
            exact
            component={lazy(() => import("../views/MoviesPage"))}
          />
          <Route
            path={routes.showMovieDetail}
            component={lazy(() => import("../views/MovieDetailsPage"))}
          />
          <Redirect to={routes.home} />
        </Switch>
      </Suspense>
    </Layout>
  </>
);

export default App;
