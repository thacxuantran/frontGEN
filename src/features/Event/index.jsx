import React from "react";
import PropTypes from "prop-types";
import LandingPageEvent from "./Page/LandingPageEvent";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ViewDetailEventPage from "./Page/ViewDetailEventPage";
import ManageEventPage from "./Page/ManageEventPage";
import CreateEventPage from "./Page/CreateEventPage";
EventFeature.propTypes = {};

function EventFeature(props) {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${match.url}`} exact component={LandingPageEvent} />
        <Route
          path={`${match.url}/viewDetailEvent`}
          exact
          component={ViewDetailEventPage}
        />
        <Route
          path={`${match.url}/manageEvent`}
          exact
          component={ManageEventPage}
        />
        <Route
          path={`${match.url}/createEvent`}
          exact
          component={CreateEventPage}
        />
      </Switch>
    </>
  );
}

export default EventFeature;
