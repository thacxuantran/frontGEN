import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const useStyles = makeStyles((theme) => ({
	root: {
		boxShadow: '0px 4px 10px rgba(64, 64, 64, 0.24)',
		borderRadius: '40px',
		margin: 'auto',
		marginBottom: theme.spacing(9),
	},
	image: {
		width: '109px',
	},
	content: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	},

	text: {
		fontWeight: 'bold !important',
		marginBottom: theme.spacing(2),
	},

	location: {
		display: 'flex',
		marginBottom: theme.spacing(1.5),
	},

	textLocation: {},

	icon: {
		marginTop: theme.spacing(1.1),
		color: '#b9c9d6',
	},
}));

function CompanyCard(props) {
	const classes = useStyles();
	return (
		<Box padding={1} minHeight='250px' width='250px' className={classes.root}>
			<div className={classes.content}>
				<Box padding={1}>
					<img src='/gg.png' width='100%' alt='test' className={classes.image} />
				</Box>
				<Typography
					variant='subtitle1'
					display='inline'
					fontSize='16px'
					className={classes.text}>
					Google Inc
				</Typography>
				<Box className={classes.location}>
					<LocationOnOutlinedIcon className={classes.icon} fontSize='small' />
					<Typography component='div' color='textSecondary'>
						<Box fontWeight={100} m={1}>
							Boston, American
						</Box>
					</Typography>
				</Box>
				<Typography component='div' color='primary'>
					<Box fontWeight={800}>6 Jobs Available</Box>
				</Typography>
			</div>
		</Box>
	);
}

CompanyCard.propTypes = {};

export default CompanyCard;
