import { yupResolver } from '@hookform/resolvers/yup';
import {
	Box,
	Container,
	Grid,
	makeStyles,
	Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import Footer from '../../../../components/Footer';
import PasswordField from '../../../../components/form-control/PasswordField';
import Loading from '../../../../components/Loading';
import HeaderAuth from '../../../Auth/components/Header';
import './styles.scss';

ChangePassForm.propTypes = {};
const useStyles = makeStyles((theme) => ({
	left: {
		width: '50%',
	},

	right: {
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

	login: {
		marginBottom: '250px',
	},
}));
function ChangePassForm({ onSubmit }) {
	const classes = useStyles();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	const schema = Yup.object().shape({
		// email: Yup.string().email(),
		// password: Yup.string().required(),
	});

	const { handleSubmit, control, reset } = useForm({
		defaultValues: {
			currentpassword: '',
			newpassword: '',
			confirmpassword: '',
		},
		resolver: yupResolver(schema),
	});

	const handleSubmited = (values) => {
		if (onSubmit) {
			onSubmit(values);
		}
		reset();
	};

	return (
		<Box>
			{loading ? (
				<Loading />
			) : (
				<div className='container'>
					<HeaderAuth />
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
									<div className='changepass_paper__image'>
										<img src='/changePass.png' alt='r' />
									</div>
								</Grid>
								<Grid item className={classes.right}>
									<div className='changepass_paper'>
										<img
											className='paper__ellipse-png'
											src='/Ellipse.png'
											alt='Ellipse'
										/>
										<Typography variant='h5' className='paper__title'>
											Change Password
										</Typography>
										<form
											className='paper__form'
											onSubmit={handleSubmit(handleSubmited)}>
											<div className='paper__form__container'>
												<PasswordField
													control={control}
													label='Current Password'
													name='currentpassword'
													className='paper__form__container__textInput'
												/>
											</div>
											<div className='paper__form__container'>
												<PasswordField
													control={control}
													label='New Password'
													name='newpassword'
													className='paper__form__container__textInput'
												/>
											</div>
											<div className='paper__form__container'>
												<PasswordField
													control={control}
													label='Confirm Password'
													name='confirmpassword'
													className='paper__form__container__textInput'
												/>
											</div>

											<div className='paper__form__container'>
												<button
													type='submit'
													className='paper__form__container__btn'>
													Change
												</button>
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

export default ChangePassForm;
