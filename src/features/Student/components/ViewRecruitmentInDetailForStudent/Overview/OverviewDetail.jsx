import { Avatar, Box, Button } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React from 'react';
import { useSelector } from 'react-redux';
import './OverviewDetail.scss';

OverviewDetail.propTypes = {};

function OverviewDetail({
	recruitment,
	onClick,
	onOpenSaveJob,
	apply,
	onOpenDialogCancelApply,
	handleOpenDialogUnsavedJob,
	saveJob,
	state,
}) {
	const loggedInUser = useSelector((state) => state.user.current);
	console.log(recruitment);
	const handleClickApply = () => {
		if (onClick) {
			onClick();
		}
	};

	const handleClickUnApply = () => {
		if (onOpenDialogCancelApply) {
			onOpenDialogCancelApply();
		}
	};

	const handleClickSaveJob = () => {
		if (onOpenSaveJob) {
			onOpenSaveJob();
		}
	};

	const handleClickUnSaveJob = () => {
		if (handleOpenDialogUnsavedJob) {
			handleOpenDialogUnsavedJob();
		}
	};
	const viewRecruimentDetail = () => {
		if (recruitment.r_ProfileID) {
			const win = window.open(
				`/student/viewRecruiterProfile/${recruitment.r_ProfileID}`,
				'_blank'
			);
			win.focus();
		} else {
			const win = window.open(
				`/student/viewStudentProfile/${recruitment.s_ProfileID}`,
				'_blank'
			);
			win.focus();
		}
	};

	return (
		<Box className='main-overview'>
			<div className='main-overview__wrapper'>
				<Avatar
					style={{
						width: '130px',
						height: '130px',
						marginLeft: '3%',
					}}
					src={recruitment.authorImage}
				/>
				<div className='main-overview__info'>
					<p
						style={{
							fontSize: '20px',
							color: '#404040',
							fontFamily: 'Samsung Sharp Sans',
						}}>
						{recruitment.title}
					</p>
					<p
						style={{
							fontSize: '1rem',
							marginTop: '15px',
							color: '#404040',
							cursor: 'pointer',
							fontFamily: 'Samsung Sharp Sans Regular',
						}}
						className='main-overview__info__companyName'
						onClick={viewRecruimentDetail}>
						{recruitment.authorName}
					</p>
					<p
						style={{
							fontSize: '1rem',
							marginTop: '15px',
							color: '#404040',
							fontFamily: 'Samsung Sharp Sans Regular',
						}}>
						{recruitment.city.name}
					</p>
					<p
						style={{
							fontSize: '1rem',
							marginTop: '15px',
							color: '#404040',
							fontFamily: 'Samsung Sharp Sans Regular',
						}}>
						$ {recruitment.min_Salary} - $ {recruitment.max_Salary}
					</p>
				</div>
				{loggedInUser.profileId !== recruitment.s_ProfileID ? (
					<div className='main-overview__group-button'>
						{recruitment.isClosed ? (
							<Button
								color='primary'
								variant='contained'
								disabled='true'
								onClick={handleClickApply}>
								Closed
							</Button>
						) : !apply ? (
							!state ? (
								<Button
									color='primary'
									variant='contained'
									onClick={handleClickApply}>
									Apply
								</Button>
							) : state === 'Approved' ? (
								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										alignItems: 'center',
										marginLeft: 5,
									}}>
									<CheckCircleOutlineIcon style={{ color: '#0DAB42' }} />
									<span style={{ color: '#0DAB42', marginLeft: 5 }}>
										{state}
									</span>
								</div>
							) : (
								<div
									style={{
										display: 'flex',
										flexWrap: 'wrap',
										alignItems: 'center',
										marginLeft: 5,
									}}>
									<HighlightOffIcon style={{ color: 'red' }} />
									<span style={{ color: 'red', marginLeft: 5 }}>{state}</span>
								</div>
							)
						) : (
							<Button
								color='primary'
								variant='contained'
								onClick={handleClickUnApply}>
								Unapplied
							</Button>
						)}
						{!saveJob ? (
							<Button
								color='primary'
								variant='contained'
								onClick={handleClickSaveJob}>
								Save Job
							</Button>
						) : (
							<Button
								color='primary'
								variant='contained'
								onClick={handleClickUnSaveJob}>
								Unsaved
							</Button>
						)}
					</div>
				) : (
					<div className='main-overview__group-button'></div>
				)}
			</div>
		</Box>
	);
}

export default OverviewDetail;
