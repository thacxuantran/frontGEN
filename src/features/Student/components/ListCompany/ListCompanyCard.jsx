import { Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import CompanyCard from './CompanyCard';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	main: {
		margin: '0 auto',
	},
});

export default function ListCompanyCard() {
	const classes = useStyles();

	return (
		<Box>
			<Container>
				<Grid container className={classes.main}>
					<Grid item xs={12} sm={6} md={4} lg={3} className={classes.main}>
						<CompanyCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<CompanyCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<CompanyCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<CompanyCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<CompanyCard />
					</Grid>
					<Grid item xs={12} sm={6} md={4} lg={3}>
						<CompanyCard />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}
