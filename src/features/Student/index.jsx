import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, useRouteMatch } from "react-router";
import ListCompanyPage from "./pages/ListCompanyPage";
import ApplyRecruitmentPage from "./pages/ApplyRecruitmentPage";
import ViewProfileRecruiterByStudentPage from "./pages/ViewProfileRecruiterByStudentPage";
import ViewRecruitmentInDetailForStudentPage from "./pages/ViewRecruitmentInDetailForStudentPage";
import ViewProfileStudentByStudentPage from "./pages/ViewProfileStudentByStudentPage";
import ListRecruitmentPage from './pages/ListRecruitmentPage';
import ViewDetail from "./pages/ViewDetail";
import ViewStudentByStudentPage from "./pages/ViewStudentByStudentPage"
import NotFoundPage from '../../features/Error/NotFoundPage';


function StudentFeature(props) {
  const match = useRouteMatch();
  return (
    <>
      <Switch>
        <Route
          path={`${match.url}/listcompany`}
          exact
          component={ListCompanyPage}
        />
        <Route
          path={`${match.url}/listcompany/detail`}
          exact
          component={ApplyRecruitmentPage}
        />
        <Route
          path={`${match.url}/listrecruitments`}
          exact
          component={ListRecruitmentPage}
        />
        <Route
          path={`${match.url}/listrecruitments/detail/:id`}
          exact
          component={ViewRecruitmentInDetailForStudentPage}
        />
        <Route
          path={`${match.url}/viewRecruiterProfile/:id`}
          exact
          component={ViewProfileRecruiterByStudentPage}
        />
        <Route
          path={`${match.url}/dashboard`}
          exact
          component={ViewProfileStudentByStudentPage}
        />
        <Route
          path={`${match.url}/viewProfile/:id`}
          exact
          component={ViewDetail}
        />
        <Route
          path={`${match.url}/viewStudentProfile/:Id`}
          exact
          component={ViewStudentByStudentPage}
        />
        <Route component={NotFoundPage} />

      </Switch>
    </>
  );
}

StudentFeature.propTypes = {};

export default StudentFeature;
