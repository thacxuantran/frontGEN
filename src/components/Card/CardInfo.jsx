import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import CallIcon from '@material-ui/icons/Call';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import PublicOutlinedIcon from '@material-ui/icons/PublicOutlined';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		boxShadow: '0px 4px 16px rgba(64, 64, 64, 0.1)',
		borderRadius: '40px',
		padding: '0 1rem',
		width: '95%',
		height: '280px',
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
			boxShadow: '0px 4px 16px rgba(64, 64, 64, 0.1)',
			fontWeight: 'bolder',
		},
	},

	info: {
		marginTop: theme.spacing(4),
	},

	item: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: '10px',

		'& > p': {
			marginLeft: theme.spacing(1.5),
			fontSize: '80%',
			width: '80%',
			wordBreak: 'break-word',
		},
	},
}));

function formatDate(date) {
	var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;

	return [day, month, year].join('/');
}

function CardInfo({ info }) {
	const dOB = formatDate(info.date_Of_Birth);
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Box className={classes.title}>
				<Typography variant='body1'>Personal Information</Typography>
			</Box>
			<Box className={classes.info}>
				<Grid container>
					<Grid item xs={12} sm={6} md={6} lg={6}>
						<Box className={classes.item}>
							<DateRangeIcon color='primary' />
							<Typography variant='body2'>{dOB}</Typography>
						</Box>
						<Box className={classes.item} mt={5}>
							<CallIcon color='primary' />
							<Typography variant='body2'>{info.ceil_number}</Typography>
						</Box>
						<Box className={classes.item} mt={5}>
							<LocationOnOutlinedIcon color='primary' />
							<Typography variant='body2'>
								{info.province_City}, {info.country}
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={6} lg={6}>
						<Box className={classes.item}>
							<PersonIcon color='primary' />
							{info.gender === true ? (
								<Typography variant='body2'>Male</Typography>
							) : (
								<Typography variant='body2'>Female</Typography>
							)}
						</Box>
						<Box className={classes.item} mt={5}>
							<MailIcon color='primary' />
							<Typography variant='body2'>{info.email}</Typography>
						</Box>
						<Box className={classes.item} mt={5}>
							<PublicOutlinedIcon color='primary' />
							<Typography variant='body2'>{info.country}</Typography>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}

export default CardInfo;
