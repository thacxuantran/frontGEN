import React from 'react';
import PropTypes from 'prop-types';
import {
	Box,
	Button,
	Container,
	makeStyles,
	Typography,
} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import UpdateIcon from '@material-ui/icons/Update';
const useStyles = makeStyles((theme) => ({
	root: {
		boxShadow: '0px 4px 10px rgba(64, 64, 64, 0.24)',
		borderRadius: '40px',
		margin: 'auto',
		marginBottom: theme.spacing(8),
		width: '240px',
		minHeight: '200px',
	},

	title: {
		display: 'flex',
	},

	time: {
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems: 'center',
	},

	text: {
		fontSize: '12px',
		fontWeight: '100',
	},

	textTitle: {
		fontSize: '12px',
		fontWeight: 'bold',
		marginTop: theme.spacing(1.3),
	},

	imageTime: {
		width: '16px',
		height: '16px',
		marginLeft: theme.spacing(1),
	},
	content: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	},

	location: {
		display: 'flex',
	},

	money: {
		display: 'flex',
		marginTop: theme.spacing(1.5),
	},

	textLocation: {
		marginTop: theme.spacing(0.5),
	},

	icon: {
		marginTop: theme.spacing(0.5),
		marginLeft: '-5px',
		marginRight: '5px',
	},

	iconMoney: {
		marginLeft: '-5px',
		marginRight: '5px',
	},

	btn: {
		display: 'flex',
		justifyContent: 'space-evenly',
		'& Button': {
			backgroundColor: '#A3EABB',
			borderRadius: '20px',
			marginTop: theme.spacing(1.5),
			color: 'white',
			textTransform: 'none',
			marginRight: theme.spacing(1.2),

			'&:hover': {
				backgroundColor: '#0DAB42',
			},
		},
	},
}));

function EventCard(props) {
	const classes = useStyles();
	return (
		<Box padding={1} minHeight='250px' width='250px' className={classes.root}>
			<Container>
				<Box padding={1} className={classes.title}>
					<img
						src='/landingpage/logoevent.png'
						width='100%'
						alt='google'
						className={classes.image}
					/>
				</Box>

				<Box className={classes.location}>
					<LocationOnOutlinedIcon
						color='primary'
						className={classes.icon}
						fontSize='small'
					/>
					<Typography component='div' color='textSecondary'>
						<Box
							fontWeight={100}
							fontSize={13}
							className={classes.textLocation}>
							Boston, American
						</Box>
					</Typography>
				</Box>

				<Box className={classes.money} mt={1}>
					<UpdateIcon
						fontSize='small'
						color='primary'
						className={classes.iconMoney}
					/>
					<Typography component='div' color='textSecondary'>
						<Box fontWeight={100} fontSize={13}>
							14:00 30/05/2021
						</Box>
					</Typography>
				</Box>
				<Typography component='div' color='textSecondary'>
					<Box fontWeight={100} mt={2} fontSize={13}>
						Join:{' '}
					</Box>
				</Typography>

				<Box className={classes.btn}>
					<Button>View</Button>
				</Box>
			</Container>
		</Box>
	);
}

export default EventCard;
