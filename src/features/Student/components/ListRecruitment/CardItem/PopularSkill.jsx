import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles } from '@material-ui/core';

PopularSkill.propTypes = {};

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-evenly',
	},
	item: {
		backgroundColor: 'white',
		width: '10%',
		height: '25px',
		border: '1px solid #0DAB42',
		boxShadow: '0px 4px 17px 1px rgba(0, 0, 0, 0.15)',
		borderRadius: '10px',
		marginBottom: theme.spacing(4),

		'& > p': {
			//marginLeft: theme.spacing(2.7),
			color: 'black',
			fontWeight: 'bolder',
			textAlign: 'center',
			lineHeight: '25px',
			fontSize: '80%',
		},
	},
}));

function PopularSkill(props) {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Box className={classes.item}>
				<Typography variant='body2'>#Java</Typography>
			</Box>
			<Box className={classes.item}>
				<Typography variant='body2'>#Designer</Typography>
			</Box>
			<Box className={classes.item}>
				<Typography variant='body2'>#Javascript</Typography>
			</Box>
			<Box className={classes.item}>
				<Typography variant='body2'>#ReactJS</Typography>
			</Box>
			<Box className={classes.item}>
				<Typography variant='body2'>#VueJS</Typography>
			</Box>
		</Box>
	);
}

export default PopularSkill;
