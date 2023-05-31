import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import CreateRecruitmentPage from './pages/CreateRecruitmentPage';
import UpdateRecruitmentPage from './pages/UpdateRecruitmentPage';
import ViewCandidatesPage from './pages/ViewCandidatesPage';
import ViewCandidateDetailPage from './pages/ViewCandidateDetailPage';
import ViewProfileCompanyForRecruiterPage from './pages/ViewProfileCompanyForRecruiterPage';
import ViewRecruitmentInDetailPage from './pages/ViewRecruitmentInDetailPage';
import ViewListCandidatesPage from './pages/ViewListCandidatesPage';
import LandingPageRecruiter from './pages/LandingPageRecruiter';
import UpdateProfileRecruiterPage from './pages/UpdateProfileRecruiterPage';
import RecruiterManagementPage from './pages/RecruiterManagementPage';
import { PrivateRouteRecruiter } from '../../components/PrivateRoute';
import { useSelector } from 'react-redux';
import ViewProfileStudentByStudentPage from '../Student/pages/ViewProfileStudentByStudentPage';
import ViewDetail from '../Student/pages/ViewDetail';
import NotFoundPage from '../../features/Error/NotFoundPage';
RecruiterFeature.propTypes = {};

function RecruiterFeature(props) {
	const match = useRouteMatch();
	const loggedInUser = useSelector((state) => state.user.current);

	return (
		<>
			<Switch>
				<Route path={`${match.url}`} exact component={LandingPageRecruiter} />
				<Route
					path={`${match.url}/manage`}
					exact
					component={RecruiterManagementPage}
				/>
				<Route
					path={`${match.url}/listcandidates`}
					exact
					component={ViewCandidatesPage}
				/>
				<Route
					path={`${match.url}/listcandidates/detail/:studentId`}
					exact
					component={ViewCandidateDetailPage}
				/>
				<Route
					path={`${match.url}/listrecruitments/detail/:authorId/:recruitmentId`}
					exact
					component={ViewRecruitmentInDetailPage}
				/>
				<Route
					path={`${match.url}/profile/:RecruiterId`}
					exact
					component={ViewProfileCompanyForRecruiterPage}
				/>

				<Route
					path={`${match.url}/profile`}
					exact
					component={ViewDetail}
				/>
				<Route
					path={`${match.url}/createRecruitment`}
					exact
					component={CreateRecruitmentPage}
				/>
				<Route
					path={`${match.url}/updateRecruitment/:recruitmentId`}
					exact
					component={UpdateRecruitmentPage}
				/>
				<Route
					path={`${match.url}/viewrecruitmentindetail/:recruitmentId`}
					exact
					component={ViewListCandidatesPage}
				/>
				<Route
					path={`${match.url}/update/profile/:RecruiterId`}
					exact
					component={UpdateProfileRecruiterPage}
				/>
				<Route component={NotFoundPage} />
			</Switch>
		</>
	);
}

export default RecruiterFeature;
