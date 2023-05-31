import { useSnackbar } from 'notistack';
import React from 'react';
import { useHistory } from 'react-router';
import LoginForm from '../LoginForm';

LoginAdmin.propTypes = {};

function LoginAdmin(props) {
	const history = useHistory();
	const { enqueueSnackbar } = useSnackbar();

	const handleSubmit = async (values) => {
		const result = {
			email: values.email,
			password: values.password,
		};
		console.log('admin', result);
		if (result.email === 'admin' && result.password === 'admin') {
			localStorage.setItem('admin', 'admin');
			history.push('/admin/viewListVerification');
		} else {
			return enqueueSnackbar('Invalid username or password!', {
				variant: 'error',
			});
		}
	};

	return (
		<>
			<LoginForm onSubmit={handleSubmit} />
		</>
	);
}

export default LoginAdmin;
