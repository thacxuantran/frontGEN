import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ViewAccountPage from "./pages/ViewAccountPage";
import ChangePass from "./components/ChangePass/ChangePass";
AccountFeature.propTypes = {};

function AccountFeature(props) {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.url}/viewAccount`} component={ViewAccountPage} />
        <Route path={`${match.url}/changePassword`} component={ChangePass} />
      </Switch>
    </>
  );
}

export default AccountFeature;
