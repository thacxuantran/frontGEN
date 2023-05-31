import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';
import { Box, Grid, makeStyles } from '@material-ui/core';

SkeletonRecruitment.propTypes = {
	length: PropTypes.number,
};

SkeletonRecruitment.defaultProps = {
	length: 12,
};

const useStyles = makeStyles((theme) => ({
	main: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginBottom: theme.spacing(8),
		width: '270px',
		height: '270px',
		margin: 'auto',
	},
}));

function SkeletonRecruitment({ length }) {
	const classes = useStyles();
	return (
		<>
			<Box>
				<Grid container>
					{Array.from(new Array(length)).map((x, index) => (
						<Grid item key={index} xs={12} sm={6} md={4} lg={3}>
							<Box className={classes.main}>
								<Skeleton variant='circle' width={85} height={85} />

								<Skeleton width='60%' />

								<Skeleton width='60%' />
								<Skeleton width='60%' />
								<Skeleton width='60%' />
								<Skeleton width='60%' />
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>
		</>
	);
}

export default SkeletonRecruitment;
