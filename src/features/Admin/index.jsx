import React from "react";
import PropTypes from "prop-types";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import ViewListVerificationPage from "./pages/ViewListVerificationPage";
import LoginAdmin from "./components/Login";

AdminFeature.propTypes = {};

function AdminFeature(props) {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route
          path={`${match.url}/viewListVerification`}
          exact
          component={ViewListVerificationPage}
        />
        <Route path={`${match.url}`} exact component={LoginAdmin} />
      </Switch>
    </>
  );
}

export default AdminFeature;
