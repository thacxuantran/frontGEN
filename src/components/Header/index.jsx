import { Avatar, Box, Menu, MenuItem } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SettingsIcon from '@material-ui/icons/Settings';
import { orderBy } from 'lodash';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import recruiterApi from '../../api/axiosRecruiter';
import messageApi from '../../api/messageApi';
import studentApi from '../../api/studentApi';
import { logout } from '../../features/Auth/userSlice';
import NotificationItem from '../NotificationItem';
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
	popOver: {
		maxHeight: '500px',
		'& .MuiPaper-elevation8': {
			boxShadow: ' 0px 4px 16px #e4e4e4',
			borderRadius: '10px',
			marginTop: '13px',
		},
	},
}));

const StyledBadge = withStyles((theme) => ({
	badge: {
		right: -3,
		top: 5,
		border: ` 0px 4px 22px rgb(218 218 218 / 70%)`,
		padding: '0 4px',
		color: '#fff',
		backgroundColor: 'rgb(220, 0, 78)',
	},
}))(Badge);

export default function Header(props) {
	const classes = useStyles();
	const loggedInUser = useSelector((state) => state.user.current);
	const isLoggedIn = !!loggedInUser.userId;
	const [anchorEl, setAnchorEl] = useState(null);
	const [messages, setMessages] = useState([]);
	const history = useHistory();
	const [unseenNoti, setUnseenNoti] = useState(0);
	const [anchorElNotify, setAnchorElNotify] = React.useState(null);
	const { enqueueSnackbar } = useSnackbar();
	const { closeSnackbar } = useSnackbar();

	useEffect(() => {
		if (isLoggedIn) {
			(async () => {
				await messageApi
					.getMessage(loggedInUser.userId, loggedInUser.device_token)
					.then((data) => {
						setMessages(data.data);
						setUnseenNoti();
					});
			})();
		}
	}, []);

	useEffect(() => {
		navigator.serviceWorker.addEventListener('message', onMessageReceive);
		return () => {
			navigator.serviceWorker.removeEventListener('message', onMessageReceive);
		};
	}, []);
	const onMessageReceive = (message) => {
		let data = message.data.data;
		console.log('messages', message);
		setMessages((currentState) => {
			console.log('currentState');
			let clone_messages = [...currentState];
			clone_messages.unshift(data);

			return clone_messages;
		});
		const action = (key) => (
			<React.Fragment>
				<Button
					onClick={() => {
						history.push(data.link);
						closeSnackbar(key);
					}}>
					View
				</Button>
				<Button
					onClick={() => {
						closeSnackbar(key);
					}}>
					Dismiss
				</Button>
			</React.Fragment>
		);

		enqueueSnackbar(data.content, {
			variant: 'info',
			autoHideDuration: 3000,
			action,
			anchorOrigin: {
				vertical: 'bottom',
				horizontal: 'right',
			},
		});
	};

	const dispatch = useDispatch();

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleClickNotification = async (event, index) => {
		let messageSorted = messages;
		let status = !(messageSorted[index].isRead.toString === 'true');
		if (status)
			await messageApi
				.updateMessage(loggedInUser.userId, messageSorted[index].id)
				.then((data) => {
					let clone_messages = [...messageSorted];
					clone_messages[index].isRead = status;
					setMessages(clone_messages);
				});
		history.push(messageSorted[index].link);
	};

	const handleUserClick = (e) => {
		setAnchorEl(e.currentTarget);
	};
	const [avt, setAvt] = useState('');
	const profileId = loggedInUser.profileId;
	const handleViewProfile = () => {
		history.push('/student/viewProfile/' + profileId);
	};
	useEffect(() => {
		if (isLoggedIn) {
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
		}
	}, []);
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

	const handleLogoutSwitchPage = () => {
		const action = logout();
		dispatch(action);
	};
	const [className, setClassName] = useState('');
	const myFunction = () => {
		setClassName('& > li:hover a:after');
		console.log('ok!');
	};

	const open = Boolean(anchorElNotify);
	const id = open ? 'simple-popover' : undefined;

	const handleClickNotify = (event) => {
		setAnchorElNotify(event.currentTarget);
	};

	const handleCloseNotify = () => {
		setAnchorElNotify(null);
	};

	return (
		<div className={classes.root}>
			<AppBar position='static' color='transparent' className={classes.app}>
				<Toolbar className={classes.main}>
					<img
						style={{ marginTop: '8px', width: '8%', cursor: 'pointer' }}
						onClick={() => history.push('/')}
						src='/logo.png'
						alt='logo GEN'
					/>

					<Box className='mainItem'>
						<ul className='mainItem__list-item'>
							<li onClick={myFunction} className={className}>
								<img
									style={{ width: '24px', height: '24px' }}
									src='/home_black.svg'
									alt='home'
								/>
								<Link to='/'>Home</Link>
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
								<Link to='/student/listrecruitments'>Find Jobs</Link>
							</li>

							<li>
								<img
									style={{ width: '24px', height: '24px' }}
									src='/business.png'
									alt='home'
								/>
								<Link target='_blank' to='/recruiter' rel='noopener noreferrer'>
									Recruiter
								</Link>
							</li>
						</ul>
					</Box>

					{!isLoggedIn && (
						<div className='buttonMain'>
							<Button color='inherit'>
								<Link to='/auth/selectRole/signup' className='buttonMain__link'>
									Sign up
								</Link>
							</Button>
							<Button style={{ marginLeft: '15px' }} color='inherit'>
								<Link to='/auth/selectRole/signin' className='buttonMain__link'>
									Sign in
								</Link>
							</Button>
						</div>
					)}

					{isLoggedIn && (
						<div className='buttonMain'>
							<div
								aria-describedby={id}
								variant='contained'
								className='buttonMain__notify'>
								<IconButton aria-label='notification'>
									<StyledBadge
										key='stylebadge'
										anchorOrigin={{
											vertical: 'bottom',
											horizontal: 'right',
										}}
										badgeContent={
											messages.filter((x) => x.isRead.toString() === 'false')
												.length
										}
										color='secondary'>
										<NotificationsIcon
											style={{ width: '25px', height: '25px' }}
											color='primary'
											fontSize='large'
											onClick={handleClickNotify}
										/>
									</StyledBadge>
								</IconButton>
								<Popover
									id={id}
									open={open}
									anchorEl={anchorElNotify}
									className={classes.menu}
									onClose={handleCloseNotify}
									anchorOrigin={{
										vertical: 'bottom',
										horizontal: 'right',
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									className={classes.popOver}>
									{messages ? (
										messages.map(
											(mess, index) => {
												return (
													<NotificationItem
														onClickNotify={handleClickNotification}
														i={index}
														key={index}
														mess={mess}></NotificationItem>
												);
											}
										)
									) : (
										<div className='notification-empty'>
											<MoodBadIcon style={{ color: '#0DAB42' }}></MoodBadIcon>
											<Typography variant='body2'>
												Notification is Empty!
											</Typography>
										</div>
									)}
								</Popover>
							</div>
							<Avatar
								onClick={handleUserClick}
								alt='Remy Sharp'
								src={loggedInUser.avatarLink}
								className='buttonMain__avatarMain__avatar'
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
								className={classes.menu}
								getContentAnchorEl={null}>
								<MenuItem>
									<DashboardIcon
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
										to='/student/dashboard'>
										Dashboard
									</Link>
								</MenuItem>

								<MenuItem onClick={handleViewProfile}>
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
										}}>
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
