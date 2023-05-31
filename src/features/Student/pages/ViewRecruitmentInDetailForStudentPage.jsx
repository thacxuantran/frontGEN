import { Button, Container, Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';
import messageApi from '../../../api/messageApi';
import studentApi from '../../../api/studentApi';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import InformationFeature from '../components/ViewRecruitmentInDetailForStudent/Information/InformationFeature';
import DescriptionFeature from '../components/ViewRecruitmentInDetailForStudent/JobDescription/DescriptionFeature';
import JobTag from '../components/ViewRecruitmentInDetailForStudent/JobTag/JobTag';
import LocationFeature from '../components/ViewRecruitmentInDetailForStudent/Location/LocationFeature';
import OverviewDetailFeature from '../components/ViewRecruitmentInDetailForStudent/Overview/OverviewDetailFeature';
import ListRecruitment from '../components/ViewRecruitmentInDetailForStudent/SimilarJob/ListRecruitment';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

function ViewRecruitmentInDetailForStudentPage(props) {
	const loggedInUser = useSelector((state) => state.user.current);

	console.log(loggedInUser);
	const [recruitment, setRecruitment] = useState({});
	const [loading, setLoading] = useState(true);
	const { enqueueSnackbar } = useSnackbar();
	const [similarRecruitments, setSimilarRecruitment] = useState({});
	const [open, setOpen] = useState(false);
	const [openDialogSave, setOpenDialogSave] = useState(false);
	const [openDialogCancelApply, setOpenDialogCancelApply] = useState(false);
	const [openDialogUnsaved, setOpenDialogUnsaved] = useState(false);
	const [apply, setApply] = useState(false);
	const [saveJob, setSaveJob] = useState(false);
	const [presentCandidate, setPresentCandidate] = useState(false);
	const history = useHistory();

	const { id } = useParams();
	console.log(id);
	useEffect(() => {
		Aos.init({});
	}, []);
	useEffect(() => {
		(async () => {
			try {
				await Promise.all([
					studentApi.getRecruitmentInDetailNoState(id),
					studentApi.getSimilarRecruitmentsForStudent(1, 4),
				]).then((data) => {
					setRecruitment(data[0].data);
					setSimilarRecruitment(data[1].data);
					console.log(data[0].data);
					const filterCandidate = data[0].data.applications.filter((item) => {
						return item.s_ProfileID === loggedInUser.profileId;
					});
					console.log('filterCandidate', filterCandidate);
					if (filterCandidate.length <= 0) {
						setApply(false);
						setSaveJob(false);
						setPresentCandidate(filterCandidate);

						setLoading(false);
						return;
					}
					if (filterCandidate[0].state === 'Waiting') {
						setApply(true);
					} else if (!filterCandidate) {
						setApply(false);
					}
					if (filterCandidate[0].isSaved) {
						setSaveJob(true);
					} else {
						setSaveJob(false);
					}
					setPresentCandidate(filterCandidate);
					setLoading(false);
				});
			} catch (error) {
				console.log('err', error);
			}
		})();
	}, [apply, saveJob, id]);
	console.log('result recruitment: ', recruitment.applications);

	// Event dialog Apply Job
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleApplyRecruitment = async () => {
		const data = {
			s_profileID: loggedInUser.profileId,
			recruitment_ID: id,
		};
		if (presentCandidate.length > 0 && presentCandidate[0].state === 'Cancel') {
			enqueueSnackbar('This recruitment cannot apply again 😿😿😿', {
				variant: 'error',
			});
			setOpen(false);

			return;
		} else {
			await studentApi.applyRercruitment(data);

			await messageApi.subcribe({
				device_token: loggedInUser.device_token,
				receiver_id: loggedInUser.userId,
				topic: 'SubcribeRecruitment' + id,
			});
			setOpen(false);
			setApply(true);
			enqueueSnackbar('Apply Successfully 💟💟💟', { variant: 'success' });
		}
	};

	// Event save job
	const handleClickOpenSaveJob = () => {
		setOpenDialogSave(true);
	};
	const handleSaveRecruitmentClose = () => {
		setOpenDialogSave(false);
	};
	const handleSaveRecruitment = async () => {
		const data = {
			s_profileID: loggedInUser.profileId,
			recruitment_ID: id,
		};

		await studentApi.savedRercruitment(data);
		await messageApi.subcribe({
			device_token: loggedInUser.device_token,
			receiver_id: loggedInUser.userId,
			topic: 'SubcribeRecruitment' + id,
		});
		setOpenDialogSave(false);
		setSaveJob(true);

		enqueueSnackbar('Save this job Successfully !!!', {
			variant: 'success',
		});
	};

	// Event dialog Unsaved Job

	const handleClickUnsavedJob = async () => {
		const data = {
			s_profileID: loggedInUser.profileId,
			recruitment_ID: id,
		};

		await studentApi.unSavedRercruitment(data);
		await messageApi.unSubcribe({
			device_token: loggedInUser.device_token,
			receiver_id: loggedInUser.userId,
			topic: 'SubcribeRecruitment' + id,
		});
		setOpenDialogUnsaved(false);
		setSaveJob(false);

		enqueueSnackbar('Unsaved This Job Successfully', {
			variant: 'success',
		});
	};

	const handleOpenDialogUnsavedJob = () => {
		setOpenDialogUnsaved(true);
	};

	// Event dialog unApply

	const handleCloseDialogUnsavedJob = () => {
		setOpenDialogUnsaved(false);
	};

	// Event dialog unApply
	const handleClickCancelApply = async () => {
		const data = {
			s_profileID: loggedInUser.profileId,
			recruitment_ID: id,
		};

		await studentApi.cancelApplyRecruitment(data);
		await messageApi.unSubcribe({
			device_token: loggedInUser.device_token,
			receiver_id: loggedInUser.userId,
			topic: 'SubcribeRecruitment' + id,
		});

		setPresentCandidate((prevState) => {
			const firstAppli = { ...prevState[0] };
			firstAppli.state = 'Cancel';
			prevState[0] = firstAppli;
			return prevState;
		});
		setApply(false);
		setOpenDialogCancelApply(false);

		enqueueSnackbar('Cancel Apply this job Successfully', {
			variant: 'success',
		});
	};

	const handleOpenDialogCancelApply = () => {
		setOpenDialogCancelApply(true);
	};

	const handleCloseDialogCancelApply = () => {
		setOpenDialogCancelApply(false);
	};

	const onHandleViewDetail = (id) => {
		history.push(`/student/listrecruitments/detail/${id}`);
	};

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<Header />
					<Container>
						<OverviewDetailFeature
							recruitment={recruitment}
							onClick={handleClickOpen}
							onOpenSaveJob={handleClickOpenSaveJob}
							onOpenDialogCancelApply={handleOpenDialogCancelApply}
							handleOpenDialogUnsavedJob={handleOpenDialogUnsavedJob}
							applyChange={apply}
							saveJob={saveJob}
							state={
								presentCandidate &&
								presentCandidate[0] &&
								presentCandidate[0].state
							}
						/>
					</Container>
					<Container>
						<InformationFeature recruitment={recruitment} />
					</Container>
					<Container>
						<DescriptionFeature recruitment={recruitment} />
					</Container>
					<Container>
						<LocationFeature recruitment={recruitment} />
					</Container>
					<Container>
						<JobTag recruitment={recruitment} />
					</Container>

					<Container>
						<Grid container>
							{similarRecruitments.items.map((item, index) => (
								<Grid key={index} item xs={12} sm={6} md={4} lg={3}>
									<ListRecruitment
										onHandleViewDetail={onHandleViewDetail}
										recruitment={item}
									/>
								</Grid>
							))}
						</Grid>
					</Container>
					<Footer />
					{/* Apply */}
					<Dialog
						open={open}
						TransitionComponent={Transition}
						keepMounted
						onClose={handleClose}
						aria-labelledby='alert-dialog-slide-title'
						aria-describedby='alert-dialog-slide-description'>
						<DialogTitle id='alert-dialog-slide-title'>
							{'Are you sure apply this job?'}
						</DialogTitle>
						<DialogActions>
							<Button onClick={handleClose} color='primary'>
								Cancel
							</Button>
							<Button onClick={handleApplyRecruitment} color='primary'>
								Ok
							</Button>
						</DialogActions>
					</Dialog>
					{/* Save Job */}
					<Dialog
						open={openDialogSave}
						TransitionComponent={Transition}
						keepMounted
						onClose={handleClose}
						aria-labelledby='alert-dialog-slide-title'
						aria-describedby='alert-dialog-slide-description'>
						<DialogTitle id='alert-dialog-slide-title'>
							{'Are you sure save this job?'}
						</DialogTitle>
						<DialogActions>
							<Button onClick={handleSaveRecruitmentClose} color='primary'>
								Cancel
							</Button>
							<Button onClick={handleSaveRecruitment} color='primary'>
								Save
							</Button>
						</DialogActions>
					</Dialog>
					{/* Unsaved Job */}
					<Dialog
						open={openDialogUnsaved}
						TransitionComponent={Transition}
						keepMounted
						onClose={handleClose}
						aria-labelledby='alert-dialog-slide-title'
						aria-describedby='alert-dialog-slide-description'>
						<DialogTitle id='alert-dialog-slide-title'>
							{'Are you sure save this job?'}
						</DialogTitle>
						<DialogActions>
							<Button onClick={handleCloseDialogUnsavedJob} color='primary'>
								Cancel
							</Button>
							<Button onClick={handleClickUnsavedJob} color='primary'>
								Unsaved
							</Button>
						</DialogActions>
					</Dialog>
					{/* Unapply job */}
					<Dialog
						open={openDialogCancelApply}
						TransitionComponent={Transition}
						keepMounted
						onClose={handleClose}
						aria-labelledby='alert-dialog-slide-title'
						aria-describedby='alert-dialog-slide-description'>
						<DialogTitle id='alert-dialog-slide-title'>
							{'Are you sure cancel this job?'}
						</DialogTitle>
						<DialogActions>
							<Button onClick={handleCloseDialogCancelApply} color='primary'>
								Cancel
							</Button>
							<Button onClick={handleClickCancelApply} color='primary'>
								OK
							</Button>
						</DialogActions>
					</Dialog>
				</>
			)}
		</>
	);
}

export default ViewRecruitmentInDetailForStudentPage;
