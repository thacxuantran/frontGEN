import React from 'react';
import PropTypes from 'prop-types';
import HeaderAuth from '../Header';
import { Box, Button, Container, Grid, makeStyles } from '@material-ui/core';
import InputField from '../../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import './styles.scss';
import userApi from '../../../../api/userApi';
import Footer from '../../../../components/Footer';

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(15),
		marginBottom: theme.spacing(30),
	},
	right: {
		margin: 'auto',
	},
	btn: {
		display: 'inline-block',
		margin: 'auto',
		marginTop: theme.spacing(3),
		borderRadius: '10px',
		height: '41px',
		textTransform: 'none',
	},

	input: {
		width: '80%',
		margin: 'auto',
	},

	formForgot: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column',
	},
}));

function ForgotPasswordForm(props) {
	const classes = useStyles();
	const schema = Yup.object().shape({
		email: Yup.string().email(),
	});

	const { handleSubmit, control, reset } = useForm({
		defaultValues: {
			email: '',
		},
		resolver: yupResolver(schema),
	});
	const onSubmit = (data) => {
		(async () => {
            try {
                const response = await userApi.forgotPassword("\""+data.email+"\"");
				console.log(response);
            } catch (error) {
                console.log('err', error)
            }

        })()
	};
	return (
		<>
			<HeaderAuth />
			<Box className={classes.root}>
				<Container>
					<Grid container>
						<Grid item xs={12} sm={12} md={6} lg={6}>
							<img src='/forgotpass.png' alt='Forgot Password' />
						</Grid>
						<Grid item xs={0} sm={0} md={6} lg={6} className={classes.right}>
							<Box className='main'>
								<h2 className='main__title'>Password assistance</h2>
								<p>
									Enter your username or email to recover your password. You
									will receive an email with instructions. If you are having
									problems recovering your password <span>contact</span>
								</p>
								<form onSubmit={handleSubmit(onSubmit)}>
									<Box className={classes.formForgot}>
										<InputField
											label='Email'
											name='email'
											control={control}
											className='input'
										/>
										<Button
											type="submit"
											color='primary'
											variant='contained'
											className={classes.btn}
											>
											Send
										</Button>
									</Box>
								</form>
							</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
			<Footer />
		</>
	);
}

ForgotPasswordForm.propTypes = {};

export default ForgotPasswordForm;
