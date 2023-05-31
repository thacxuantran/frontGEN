import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";

import ForgotPassword from "./components/ForgotPass";
import Login from "./components/Login";
import Register from "./components/Register";
import RegisterWithRecruiter from "./components/RegisterWithRecruiter/RegisterWithRecruiter";
import SelectRole from "./components/SelectRole/SelectRole";
import ConfirmEmail from "./pages/ConfirmEmail";

AuthFeature.propTypes = {};

function AuthFeature(props) {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.url}/signup/:role`} component={Register} />
        <Route path={`${match.url}/signin/:role`} exact component={Login} />
        <Route
          path={`${match.url}/selectRole/:option`}
          exact
          component={SelectRole}
        />
        <Route
          path={`${match.url}/Account/confirmemail`}
          exact
          component={ConfirmEmail}
        />
        <Route path={`${match.url}/forgot`} component={ForgotPassword} />

        <Route
          path={`${match.url}/signupwithrecruiter`}
          component={RegisterWithRecruiter}
        />
      </Switch>
    </>
  );
}

export default AuthFeature;
