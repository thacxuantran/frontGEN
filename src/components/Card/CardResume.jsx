import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import ResumeItem from './ResumeItem';

CardResume.propTypes = {
	title: PropTypes.string,
	resume: PropTypes.array,
};

CardResume.defaultProps = {
	title: '',
	resume: [],
};

const useStyles = makeStyles((theme) => ({
	root: {
		boxShadow: '0px 4px 16px rgba(64, 64, 64, 0.1)',
		borderRadius: '40px',
		padding: '0 1rem',
		width: '95%',
		height: '230px',
		marginTop: theme.spacing(8),
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
		justifyContent: 'space-around',
		marginBottom: theme.spacing(3),

		'& > p': {
			fontSize: '80%',
		},
	},
}));

function CardResume({ title, resume }) {
	const classes = useStyles();
	return (
		<>
			<Box className={classes.root}>
				<Box className={classes.title}>
					<Typography variant='body1'>{title}</Typography>
				</Box>
				<Box className={classes.info}>
					{resume.map((item, index) => (
						<ResumeItem item={item} />
					))}
				</Box>
			</Box>
		</>
	);
}

export default CardResume;
