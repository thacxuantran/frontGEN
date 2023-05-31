import { Avatar, Box, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import recruiterApi from '../../api/axiosRecruiter';
import studentApi from '../../api/studentApi';
import { logout } from '../../features/Auth/userSlice';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	menu: {
		'& .MuiPaper-elevation8': {
			boxShadow: ' 0px 4px 22px rgb(218 218 218 / 70%)',
			marginTop: '13px',
		},
	},
	app: {
		boxShadow: 'none !important',
	},

	main: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	avatar: {
		border: '1px solid black',
	},
}));

export default function HeaderRecruiter({ isRecruiterPage }) {
	const classes = useStyles();

	const loggedInUser = useSelector((state) => state.user.current);
	const isLoggedIn = !!loggedInUser.userId;
	const [anchorEl, setAnchorEl] = useState(null);
	const history = useHistory();

	const dispatch = useDispatch();
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleUserClick = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleLogoutClick = () => {
		if (loggedInUser.role === 'STUDENT') {
			const action = logout();
			dispatch(action);
			history.push('/');
		} else {
			const action = logout();
			dispatch(action);
			history.push('/recruiter');
		}
	};
	const [avt, setAvt] = useState('');
	const profileId = loggedInUser.profileId;
	useEffect(() => {
		(async () => {
			if (loggedInUser.role === 'STUDENT') {
				const userfake1 = await studentApi.getStudentProfileDetail(profileId);
				setAvt(userfake1.data.avatar_link);
			} else {
				const userfake2 = await recruiterApi.getRecruiterProfileDetail(
					profileId
				);
				setAvt(userfake2.data.logo_Image_Link);
			}
		})();
	}, []);
	const handleLogoutSwitchPage = () => {
		const action = logout();
		dispatch(action);
	};

	return (
		<div className={classes.root}>
			<AppBar position='static' color='transparent' className={classes.app}>
				<Toolbar className={classes.main}>
					<img
						style={{ marginTop: '8px', width: '8%' }}
						src='/logo.png'
						alt='logo GEN'
					/>

					<Box className='headerRecruiter__mainItem'>
						<ul className='headerRecruiter__mainItem__list-item'>
							<li>
								<img
									style={{ width: '24px', height: '24px' }}
									src='/home_black.svg'
									alt='home'
								/>

								<Link to='/recruiter/manage'>Home</Link>
							</li>
							<li>
								<img
									style={{
										width: '16px',
										height: '16px',
										marginTop: '3px',
										marginRight: '15px',
									}}
									src='/event.png'
									alt='home'
								/>
								<Link to='/event'>Event</Link>
							</li>

							<li>
								<img
									style={{ width: '24px', height: '24px' }}
									src='/search.png'
									alt='home'
								/>
								<Link to='/recruiter/listcandidates'>Candidates</Link>
							</li>

							<li>
								<img
									style={{ width: '24px', height: '24px' }}
									src='/icon_student.png'
									alt='home'
								/>
								<Link
									target='_blank'
									to='/'
									rel='noopener noreferrer'
									onClick={handleLogoutSwitchPage}>
									Student
								</Link>
							</li>
						</ul>
					</Box>

					{!isLoggedIn && (
						<div className='headerRecruiter__buttonMain'>
							<Button color='inherit'>
								<Link
									to='/auth/selectRole/signup'
									className='headerRecruiter__buttonMain__link'>
									Sign up
								</Link>
							</Button>
							<Button style={{ marginLeft: '15px' }} color='inherit'>
								<Link
									to='/auth/selectRole/signin'
									className='headerRecruiter__buttonMain__link'>
									Sign in
								</Link>
							</Button>
						</div>
					)}

					{isLoggedIn && (
						<div className='headerRecruiter__buttonMain'>
							<div className='headerRecruiter__buttonMain__notify'>
								<NotificationsIcon
									style={{ width: '25px', height: '25px' }}
									color='primary'
									fontSize='large'
								/>
							</div>
							<Avatar
								onClick={handleUserClick}
								alt='Remy Sharp'
								src={loggedInUser.avatarLink}
								className='headerRecruiter__buttonMain__avatarMain__avatar'
							/>

							<Menu
								id='simple-menu'
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'right',
								}}
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								getContentAnchorEl={null}
								className={classes.menu}>
								<MenuItem>
									<AccountCircleIcon
										style={{
											color: '#404040',
											fontSize: 20,
											marginRight: 15,
											marginLeft: 5,
										}}
									/>
									<Link
										style={{
											fontSize: '15px',
											marginRight: 5,
											color: '#404040',
											fontFamily: 'Samsung Sharp Sans Regular',
										}}
										to={
											loggedInUser.role === 'STUDENT'
												? '/recruiter/profile'
												: `/recruiter/profile/${loggedInUser.profileId}`
										}>
										Profile
									</Link>
								</MenuItem>
								<MenuItem>
									<SettingsIcon
										style={{
											color: '#404040',
											fontSize: 20,
											marginRight: 15,
											marginLeft: 5,
										}}
									/>
									<Link
										style={{
											fontSize: '15px',
											marginRight: 5,
											color: '#404040',
											fontFamily: 'Samsung Sharp Sans Regular',
										}}
										to='/account/viewAccount'>
										Account
									</Link>
								</MenuItem>
								<MenuItem
									style={{
										fontSize: '15px',
										marginRight: 5,
										color: '#404040',
										fontFamily: 'Samsung Sharp Sans Regular',
									}}
									onClick={handleLogoutClick}>
									{' '}
									<ExitToAppIcon
										style={{
											color: '#404040',
											fontSize: 20,
											marginRight: 15,
											marginLeft: 5,
										}}
									/>
									Logout
								</MenuItem>
							</Menu>
						</div>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
