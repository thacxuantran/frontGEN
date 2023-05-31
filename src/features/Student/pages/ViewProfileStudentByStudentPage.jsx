import { Container, makeStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from '../../../api/axiosClient';
import studentApi from '../../../api/studentApi';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import Aside from '../components/ViewProfileStudentByStudentPage/Aside';
import AvatarProfile from '../components/ViewProfileStudentByStudentPage/AvatarProfile';
import Main from '../components/ViewProfileStudentByStudentPage/Main';

const useStyles = makeStyles((theme) => ({
	container: {},
	wrapper: {
		display: 'flex',
		width: '85%',
		marginTop: '50px',
	},
}));

function ViewProfileStudentByStudentPage(props) {
	const [changePage, setChangePage] = useState(false);
	const [currentMainPage, setCurrentMainPage] = useState(0);
	const loggedInUser = useSelector((state) => state.user.current);

	const [similarRecruitments, setSimilarRecruitment] = useState({});
	const [appliedRecruitments, setRecruitments] = useState({});
	const [loading, setLoading] = useState(true);
	const [studentDetail, setStudentDetail] = useState({});

	const [loading2, setLoading2] = useState(true);
	const [loadingMainPage, setLoadingMainPage] = useState(true);
	const [loadingPageChange, setLoadingPageChange] = useState(true);
	const classes = useStyles();

	const [pagination, setPagination] = useState({
		pageIndex: 1,
		pageSize: 5,
		totalCount: 100,
	});

	const [filter, setFilter] = useState({
		pageIndex: 1,
		pageSize: 5,
	});

	const [firstQuery, setFirstQuery] = useState(
		`/api/Recruitment/GetUnApplyRecruitment/${
			loggedInUser.profileId
		}?PageIndex=${1}&PageSize=${4}`
	);
	const [secondQuery, setSecondQuery] = useState(
		`api/Student/viewAppliedRecruitment/${loggedInUser.profileId}?PageIndex=${filter.pageIndex}&PageSize=${filter.pageSize}`
	);
	//    const [secondQuery, setSecondQuery] = useState(studentApi.getAppliedRecruitment('484aa47c-6e9b-6614-55bc-31d980fd0cf2', filter.pageIndex, filter.pageSize));
	useEffect(() => {
		(async () => {
			try {
				await Promise.all([axios.get(firstQuery), axios.get(secondQuery)]).then(
					(data) => {
						console.log('data', data);
						setSimilarRecruitment(data[0].data);
						setRecruitments(data[1].data);
						setPagination(data[1].data);
					}
				);
				await studentApi
					.getDetailStudent(loggedInUser.profileId)
					.then((data) => {
						setStudentDetail(data.data);
					});
				if (loading) setLoading(false);
				if (loading2) setLoading2(false);
				if (loadingPageChange) setLoadingPageChange(false);
				if (loadingMainPage) setLoadingMainPage(false);
			} catch (error) {
				console.log('err', error);
			}
		})();
	}, [filter, loading2]);

	const handlePageChange = (newPage) => {
		setLoadingPageChange(true);
		if (currentMainPage === 0) {
			setSecondQuery(
				`api/Student/viewAppliedRecruitment/${loggedInUser.profileId}?PageIndex=${newPage}&PageSize=${filter.pageSize}`
			);
		} else if (currentMainPage === 1) {
			setSecondQuery(
				`api/Student/viewSubcribedCompany/${loggedInUser.profileId}?PageIndex=${newPage}&PageSize=${filter.pageSize}`
			);
		} else if (currentMainPage === 2) {
			setSecondQuery(
				`api/Student/viewSavedRecruitment/${loggedInUser.profileId}?PageIndex=${newPage}&PageSize=${filter.pageSize}`
			);
		} else if (currentMainPage === 3) {
			setSecondQuery(
				`api/Student/viewInvitedRecruitment/${loggedInUser.profileId}?PageIndex=${newPage}&PageSize=${filter.pageSize}`
			);
		}
		setChangePage(true);
		setFilter({ ...filter, pageIndex: newPage });
	};
	const handleMainPageChange = (num) => {
		if (num === currentMainPage) {
			return;
		} else if (num === 0) {
			setSecondQuery(
				`api/Student/viewAppliedRecruitment/${
					loggedInUser.profileId
				}?PageIndex=${1}&PageSize=${filter.pageSize}`
			);
		} else if (num === 1) {
			setSecondQuery(
				`api/Student/viewSubcribedCompany/${
					loggedInUser.profileId
				}?PageIndex=${1}&PageSize=${filter.pageSize}`
			);
		} else if (num === 2) {
			setSecondQuery(
				`api/Student/viewSavedRecruitment/${
					loggedInUser.profileId
				}?PageIndex=${1}&PageSize=${filter.pageSize}`
			);
		} else if (num === 3) {
			setSecondQuery(
				`api/Student/viewInvitedRecruitment/${
					loggedInUser.profileId
				}?PageIndex=${1}&PageSize=${filter.pageSize}`
			);
		}
		setLoadingMainPage(true);
		setFilter({ ...filter, pageIndex: 1 });
		setCurrentMainPage(num);
	};

	const handleSubmitSaveRercruitment = (recruitment_id) => {
		setLoading2(true);
		studentApi.savedRercruitment({
			S_profileID: loggedInUser.profileId,
			Recruitment_ID: recruitment_id,
		});
		setFirstQuery(
			`/api/Recruitment/GetUnApplyRecruitment/${
				loggedInUser.profileId
			}?PageIndex=${1}&PageSize=${4}`
		);
		setSecondQuery(
			`api/Student/viewSavedRecruitment/${
				loggedInUser.profileId
			}?PageIndex=${1}&PageSize=${filter.pageSize}`
		);
		setCurrentMainPage(2);
	};

	const handleSubmitUnSaveRercruitment = (recruitment_id) => {
		setLoading2(true);
		studentApi.unSavedRercruitment({
			S_profileID: loggedInUser.profileId,
			Recruitment_ID: recruitment_id,
		});
		setFirstQuery(
			`/api/Recruitment/GetUnApplyRecruitment/${
				loggedInUser.profileId
			}?PageIndex=${1}&PageSize=${4}`
		);
		setSecondQuery(
			`api/Student/viewSavedRecruitment/${
				loggedInUser.profileId
			}?PageIndex=${1}&PageSize=${filter.pageSize}`
		);
		setCurrentMainPage(2);
	};

	const handleApplyRercruitment = (recruitment_id) => {
		setLoading2(true);
		studentApi.applyRercruitment({
			S_profileID: loggedInUser.profileId,
			Recruitment_ID: recruitment_id,
		});
		setFirstQuery(
			`/api/Recruitment/GetUnApplyRecruitment/${
				loggedInUser.profileId
			}?PageIndex=${1}&PageSize=${4}`
		);
	};

	const handleUnsubCompany = (r_id) => {
		setLoading2(true);
		studentApi.unSubRercruiter(loggedInUser.profileId, r_id);
	};

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<Header />
					<Container className='wrapperOutSide'>
						<Container>
							<AvatarProfile studentInfo={studentDetail} />
						</Container>
						<Container className={classes.wrapper}>
							<Aside
								onApply={handleApplyRercruitment}
								onSubmitUnSaveRercruitment={handleSubmitUnSaveRercruitment}
								onSubmitSaveRercruitment={handleSubmitSaveRercruitment}
								listSuggest={similarRecruitments.items}
							/>
							<Main
								loadingPageChange={loadingPageChange}
								loadingMainPage={loadingMainPage}
								onSubmitHandleUnsubCompany={handleUnsubCompany}
								onSubmitUnSaveRercruitment={handleSubmitUnSaveRercruitment}
								onSubmitSaveRercruitment={handleSubmitSaveRercruitment}
								loading={loading2}
								mainPage={currentMainPage}
								onMainPageChange={handleMainPageChange}
								onPageChange={handlePageChange}
								pagination={pagination}
								listApplied={appliedRecruitments.items}
							/>
						</Container>
					</Container>
					<Footer />
				</>
			)}
		</>
	);
}

ViewProfileStudentByStudentPage.propTypes = {};

export default ViewProfileStudentByStudentPage;
