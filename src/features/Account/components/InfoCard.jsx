import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import userApi from '../../../api/userApi';
import './style.scss';
InfoCard.propTypes = {
	title: PropTypes.string,
	experiences: PropTypes.array,
};

InfoCard.defaultProps = {
	title: '',
	experiences: [],
};

const useStyles = makeStyles((theme) => ({
	root: {
		border: '1px solid rgba(0, 0, 0, 0.1)',
		boxShadow: '0px 4px 10px rgba(64, 64, 64, 0.24)',
		borderRadius: '40px',
		padding: '0 1rem',
		width: '65%',
		height: '350px',
		marginTop: '40px',
		isplay: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: '100px',
	},
	title: {
		textAlign: 'center',

		'& > p': {
			display: 'inline-block',
			backgroundColor: '#0DAB42',
			width: '252px',
			height: '50px',
			borderRadius: '0 0 40px 40px',
			textAlign: 'center',
			color: '#FFF',
			lineHeight: '50px',
			boxShadow: '0px 4px 10px rgba(64, 64, 64, 0.24)',
			fontWeight: 'bolder',
		},
	},

	info: {
		marginTop: theme.spacing(2.4),
		marginBottom: theme.spacing(2.4),
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	desc: {
		'& > p': {
			marginBottom: theme.spacing(1),
		},
		'& > p:first-child': {
			fontWeight: 'bolder',
		},
	},
	main: {
		width: '500px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
	},
	textinput: {
		width: '100%',
		height: '40px',
		fontSize: '15px',
		borderRadius: '5px',
		borderStyle: 'none',
		boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
		marginTop: '10px',
		fontFamily: 'Samsung Sharp Sans Regular',
	},
	textinput1: {
		width: '60%',
		height: '40px',
		fontSize: '35px',
		borderRadius: '5px',
		borderStyle: 'none',
		boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
		marginTop: '5px',
		marginRight: '10px',
		fontFamily: 'Samsung Sharp Sans Regular',
	},
	password: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
}));

function InfoCard({ title, experiences }) {
	const classes = useStyles();
	const [account, setAccount] = useState({});
	const loggedInUser = useSelector((state) => state.user.current);
	const userId = loggedInUser.userId;
	useEffect(() => {
		(async () => {
			try {
				await userApi.getAccount(userId).then((data) => {
					setAccount(data.data);
				});
			} catch (error) {
				console.log('err', error);
				// setLoading(false);
			}
		})();
	}, []);

	return (
		<Box className={classes.root}>
			<Box className={classes.title}>
				<Typography variant='body1'>{title}</Typography>
			</Box>
			<Box className={classes.info}>
				<Box className={classes.desc}>
					<Box className={classes.main}>
						<Typography style={{ marginTop: '25px' }}>Email Address</Typography>
						<input
							type='text'
							placeholder={account.email}
							disabled='true'
							fontSize='20px'
							className={classes.textinput}
						/>
						<Typography style={{ marginTop: '25px' }}>Password</Typography>
						<Box className={classes.password}>
							<input
								type='password'
								value={account.password}
								disabled='true'
								fontSize='20px'
								className={classes.textinput1}
							/>
							{account.password !== null ? (
								<Link to='/account/changePassword' className='root__changepass'>
									Change Password
								</Link>
							) : null}
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default InfoCard;
