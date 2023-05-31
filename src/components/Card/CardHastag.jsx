import React from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

CardHashtag.propTypes = {
  skills: PropTypes.array,
};

CardHashtag.defaultProps = {
  skills: [],
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
		backgroundColor: 'white',
		width: '90%',
		border: '1px solid rgba(64, 64, 64, 0.1)',
		boxShadow: '0px 2px 17px 1px rgba(0, 0, 0, 0.15)',
		borderRadius: '10px',
		marginBottom: theme.spacing(4),
		alignItems: 'center',
		justifyContent: 'center',
		height: '31px',
		display: 'flex',
		'& > p': {
			color: '#0DAB42',
			fontWeight: 'bolder',
			textAlign: 'center',
			fontSize: '75%',
		},
	},
	align: {
		'& > div': {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	},
}));

function CardHashtag({ title, skills }) {
	const classes = useStyles();
	return (
		<>
			<Box className={classes.root}>
				<Box className={classes.title}>
					<Typography variant='body1'>{title}</Typography>
				</Box>
				<Box className={classes.info}>
					{title === 'Skills' ? (
						<Grid container className={classes.align}>
							{skills.map((item, index) => (
								<Grid
									key={item.skill.skill_ID}
									item
									xs={12}
									sm={6}
									md={4}
									lg={4}>
									<Box className={classes.item}>
										<Typography variant='body1'>
											{item.skill.skill_Name}
										</Typography>
									</Box>
								</Grid>
							))}
						</Grid>
					) : (
						<Grid container className={classes.align}>
							{skills.map((item, index) => (
								<Grid
									key={item.language.language_ID}
									item
									xs={12}
									sm={6}
									md={4}
									lg={4}>
									<Box className={classes.item}>
										<Typography variant='body1'>
											{item.language.locale}
										</Typography>
									</Box>
								</Grid>
							))}
						</Grid>
					)}
				</Box>
			</Box>
		</>
	);
}

export default CardHashtag;
