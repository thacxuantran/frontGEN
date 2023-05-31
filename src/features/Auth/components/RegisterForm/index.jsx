import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Container, Grid, makeStyles } from "@material-ui/core";
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import Footer from '../../../../components/Footer';
import InputField from '../../../../components/form-control/InputField';
import Loading from '../../../../components/Loading';
import HeaderAuth from '../Header';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
	left: {
		width: '50%',
	},

	right: {
		// flex: '1 1 0',

		width: '50%',
		height: '50vh',
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		boxSizing: 'border-box',
		marginTop: '5%',
	},
	google: {
		boxShadow: 'none !important',
	},
}));

function RegisterForm({ onSubmit, role, onHandleResponseGoogle }) {
	const classes = useStyles();
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	const schema = Yup.object().shape({
		email: Yup.string()
			.required('Please enter your email.')
			.email('Please enter an valid email address.'),
		password: Yup.string()
			.required('Please enter your password')
			.min(6, 'Please enter at least 6 character'),
		confirmPassword: Yup.string()
			.required('Please confirm your password.')
			.oneOf([Yup.ref('password')], 'Password does not match'),
	});

	const form = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		reValidateMode: 'onSubmit',

		resolver: yupResolver(schema),
	});

	const { isSubmitting } = form.formState;

	const handleSubmitted = async (values) => {
		if (onSubmit) {
			await onSubmit(values);
		}
		form.reset();
	};

	const responseGoogle = async (res) => {
		if (onHandleResponseGoogle) {
			await onHandleResponseGoogle(res);
		}
	};
	const switchHeader = 'signup';
	return (
		<Box>
			{loading ? (
				<Loading />
			) : (
				<Box className='containerAuth'>
					<HeaderAuth switchHeader={switchHeader} />
					<Box className='login'>
						<img src='/img2.png' alt='' className='login__img' />
						<Container component='main'>
							<Grid
								container
								spacing={2}
								classes={{
									container: classes.container, // class name, e.g. `classes-nesting-root-x`
								}}>
								<Grid item className={classes.left}>
									<div className='imageAuth'>
										{role === 'STUDENT' ? (
											<img
												style={{
													width: '500px',
													height: '500px',
													marginBottom: '30px',
												}}
												src='/signin_image.png'
												alt='Hiring'
											/>
										) : (
											<img src='/Hire.png' alt='Hiring' />
										)}
									</div>
								</Grid>
								<Grid item className={classes.right}>
									<div className='paperAuth'>
										<img
											className='paperAuth__ellipse-png'
											src='/Ellipse.png'
											alt='Ellipse'
										/>
										{isSubmitting && <LinearProgress />}
										<p className='paperAuth__title'>Sign up</p>

										<form
											className='paperAuth__form'
											noValidate
											onSubmit={form.handleSubmit(handleSubmitted)}>
											<div className='paperAuth__form__container'>
												<InputField
													label='Email'
													name='email'
													form={form}
													className='paperAuth__form__container__textInput'
												/>
											</div>
											<div className='paperAuth__form__container'>
												<InputField
													form={form}
													label='Password'
													name='password'
													className='paperAuth__form__container__textInput'
													type='password'
												/>
											</div>
											<div className='paperAuth__form__container'>
												<InputField
													form={form}
													label='Confirm Password'
													name='confirmPassword'
													className='paperAuth__form__container__textInput'
													type='password'
												/>
											</div>
											<div className='paperAuth__form__container'>
												<input
													disabled={isSubmitting}
													type='submit'
													value='Sign Up'
													className='paperAuth__form__container__btn'
												/>
											</div>

											<div className='center'>
												<p className='paperAuth__form__container__canva'>
													With
												</p>
											</div>
											<div className='center'>
												<div className='paperAuth__form__container__signinGG'>
													{/* <div className={classes.icon}>
														<img src='./google.png' alt='' />
													</div> */}
													<GoogleLogin
														clientId='805761381257-0os6p6hdlmc2ehmgk7snc97o7eodsg2h.apps.googleusercontent.com'
														buttonText='Sign up with google'
														onSuccess={responseGoogle}
														cookiePolicy={'single_host_origin'}
														className={classes.google}
													/>
												</div>
											</div>
										</form>
									</div>
								</Grid>
							</Grid>
						</Container>
					</Box>
					<Footer />
				</Box>
			)}
		</Box>
	);
}

export default RegisterForm;
