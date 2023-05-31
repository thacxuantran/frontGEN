import { useSnackbar } from 'notistack';
import React from 'react';
import { useParams } from 'react-router-dom';
import userApi from '../../../../api/userApi';
import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
	const { role } = useParams();
	const { enqueueSnackbar } = useSnackbar();

	const handleSubmit = async (values) => {
		try {
			values.role = role;
			const result = await userApi.signup({
				email: values.email,
				password: values.password,
				role: values.role,
			});

			enqueueSnackbar(
				`${result.data.message}. Please confirm your email 💚💚💚`,
				{ variant: 'success' }
			);
		} catch (error) {
			enqueueSnackbar(error.message, { variant: 'error' });
		}
	};

	const handleResponseGoogle = async (data) => {
		try {
			const result = await userApi.signup({
				email: data.profileObj.email,
				password: '',
				role: role,
			});
			enqueueSnackbar(
				`${result.data.message}. Please confirm your email 💚💚💚`,
				{ variant: 'success' }
			);
		} catch (error) {
			//console.log(error);
			enqueueSnackbar(error.message, { variant: 'error' });
		}
	};
	return (
		<RegisterForm
			onSubmit={handleSubmit}
			role={role}
			onHandleResponseGoogle={handleResponseGoogle}
		/>
	);
}

export default Register;
