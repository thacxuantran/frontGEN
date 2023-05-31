import { yupResolver } from '@hookform/resolvers/yup';
import {
	Box,
	Checkbox,
	Container,
	FormControlLabel,
	Grid,
	makeStyles,
} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import React, { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
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
		marginTop: '3%',
	},
	google: {
		boxShadow: 'none !important',
	},

	login: {
		marginBottom: '250px',
	},
}));

function LoginForm({ onSubmit, role, onHandleResponseGoogle, googleSubmit }) {
	const classes = useStyles();
	const [loading, setLoading] = useState(false);
	const switchHeader = 'signin';
	//const {handleSubmit} = useForm()
	const history = useHistory();
	console.log('history', history);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	const schema = Yup.object().shape({
		email: Yup.string()
			.required('Please enter your email.')
			.email('Please enter a valid email'),
		password: Yup.string()
			.required('Please enter your password')
			.min(6, 'Please enter valid password'),
	});

	const form = useForm({
		defaultValues: {
			email: '',
			password: '',
		},
		reValidateMode: 'onSubmit',
		resolver: yupResolver(schema),
	});

	const { isSubmitting } = form.formState;

	const handleSubmited = (values) => {
		if (onSubmit) {
			onSubmit(values);
		}
		form.reset();
	};

	const responseGoogle = (res) => {
		console.log(res);
		if (onHandleResponseGoogle) {
			onHandleResponseGoogle(res);
		}
	};

	return (
		<Box>
			{loading ? (
				<Loading />
			) : (
				<div className='containerAuth'>
					<HeaderAuth switchHeader={switchHeader} />
					<Box className='login'>
						<Container component='main'>
							<img src='/img2.png' alt='' className='login__img' />
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
										{(isSubmitting || googleSubmit) && <LinearProgress />}

										<p className='paperAuth__title'>Sign in</p>
										<form
											className='paperAuth__form'
											onSubmit={form.handleSubmit(handleSubmited)}>
											<div className='paperAuth__form__container'>
												<InputField
													form={form}
													label='Email'
													name='email'
													className='paperAuth__form__container__textInput'
													variant='filled'
												/>
											</div>
											<div className='paperAuth__form__container'>
												<InputField
													form={form}
													label='Password'
													name='password'
													type='password'
													className='paperAuth__form__container__textInput'
												/>
											</div>

											<div className='checkBoxContainer'>
												<FormControlLabel
													control={
														<Checkbox value='remember' color='primary' />
													}
													label='Remember me'
													className='formCheckbox'
												/>

												<Link
													to='/'
													variant='body2'
													className='checkBoxContainer__link'>
													Forgot password?
												</Link>
											</div>

											<div className='paperAuth__form__container'>
												<button
													type='submit'
													className='paperAuth__form__container__btn'>
													Sign In
												</button>
											</div>

											<div className='center'>
												<p className='paperAuth__form__container__canva'>Or</p>
											</div>
											<div className='center'>
												<div className='paperAuth__form__container__signinGG'>
													{/* <div className={classes.icon}>
														<img src='./google.png' alt='' />
													</div> */}
													<GoogleLogin
														clientId='805761381257-0os6p6hdlmc2ehmgk7snc97o7eodsg2h.apps.googleusercontent.com'
														buttonText='Sign in with google'
														onSuccess={responseGoogle}
														onFailure={responseGoogle}
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
				</div>
			)}
		</Box>
	);
}

export default LoginForm;
