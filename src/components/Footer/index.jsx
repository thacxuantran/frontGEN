import {
	Box,
	Container,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import React from 'react';
import './styles.scss';

function Copyright() {
	return (
		<Typography variant='body2' className='borderFooter'>
			{' © Copyright'} {new Date().getFullYear()}
			{', GEN.com'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	footer: {
		padding: theme.spacing(3, 2),
		marginTop: 'auto',
		position: 'relative',
	},
	main: {
		margin: '0 auto',
	},

	icon: {
		listStyle: 'none',
		display: 'flex',
		color: '#A3EABB',
		borderRadius: '10px',
	},

	item: {
		paddingRight: '35px',
	},

	columnFirst: {
		margin: 'auto',
	},

	text: {
		fontWeight: 'bold !important',
		fontSize: '18px',
		marginTop: theme.spacing(1.2),
		marginBottom: theme.spacing(4),
	},
	root: {
		position: 'relative',
		marginBottom: theme.spacing(6),
		marginTop: '30px',
	},
	ellipse: {
		position: 'absolute',
		top: '-30px',
		right: 0,
	},
}));

function Footer(props) {
	const classes = useStyles();
	return (
		<Box className='fixed-position'>
			<div className='ellipseParent'>
				<img
					src='/Ellipsefooter.png'
					alt=''
					className={classes.ellipseParent}
				/>
			</div>
			<Container className={classes.root}>
				<Grid container className={classes.main}>
					<Grid item xs={12} sm={6} md={5} lg={4} className={classes.main}>
						<Box className={classes.columnFirst}>
							<img src='/logo.png' alt='logo GEN' />
							<Typography variant='body2' className={classes.text}>
								Subscribe to Gen on:
							</Typography>
							<div className={classes.mainIcon}>
								<ul className={classes.icon}>
									<li className={classes.item}>
										<FacebookIcon fontSize='large' />
									</li>
									<li className={classes.item}>
										<InstagramIcon fontSize='large' />
									</li>
									<li className={classes.item}>
										<TwitterIcon fontSize='large' />
									</li>
								</ul>
							</div>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={5} lg={2}>
						<div className='item'>
							<h3>Employer</h3>
							<ul>
								<li>Browse Candidates</li>
								<li>Post a post</li>
								<li>Employer Listing</li>
								<li>Resume Page</li>
								<li>Dashboard</li>
								<li>Job Packages</li>
							</ul>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={5} lg={2}>
						<div className='item'>
							<h3>Candidate</h3>
							<ul>
								<li>Browse Jobs</li>
								<li>Submit Resume</li>
								<li>Dashboard</li>
								<li>Browse Candidates</li>
								<li>My Bookmarks</li>
								<li>Candidates Listing</li>
							</ul>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={5} lg={2}>
						<div className='item'>
							<h3>Account</h3>
							<ul>
								<li>My account</li>
								<li>Checkout</li>
								<li>Team and Conditions</li>
								<li>Contact information</li>
							</ul>
						</div>
					</Grid>
					<Grid item xs={12} sm={6} md={5} lg={2}>
						<div className='item'>
							<h3>Helpful Links</h3>
							<ul>
								<li>Employer</li>
								<li>Candidates</li>
								<li>Blog</li>
								<li>Pricing Plan</li>
								<li>Contact</li>
							</ul>
						</div>
					</Grid>
				</Grid>
				<img src='/Ellipsefooter.png' alt='' className={classes.ellipse} />
			</Container>
			<footer className={classes.footer}>
				<img src='/EllipseLargeFooter.png' alt='' className='iconLargeFooter' />
				<Container>
					<Copyright />
				</Container>
			</footer>
		</Box>
	);
}

export default Footer;
