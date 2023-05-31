import { useSnackbar } from 'notistack';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import userApi from '../../../../api/userApi';
import ChangePassForm from '../ChangePassForm/ChangePassForm';

function ChangePass(props) {
	const loggedInUser = useSelector((state) => state.user.current);
	const userId = loggedInUser.userId;
	const { enqueueSnackbar } = useSnackbar();
	const history = useHistory();
	const handleSubmit = (values) => {
		try {
			// Auto set role = 'EMPLOYER'
			if (values.newpassword === values.confirmpassword) {
				(async () => {
					const result = {
						accountId: userId,
						oldPassword: values.currentpassword,
						newPassword: values.newpassword,
					};
					try {
						const response = await userApi.changePassword(result);
						console.log(response);
						enqueueSnackbar('Change Password Successfully!', {
							variant: 'success',
						});
						history.push('/account/viewAccount');
					} catch (error) {
						enqueueSnackbar('Change Password Fail!', { variant: 'error' });
					}
				})();
			} else {
				enqueueSnackbar('Confirm Password is wrong!', { variant: 'error' });
			}
		} catch (error) {
			console.log('Confirm password is wrong!');
			// enqueueSnackbar(error.message, { variant: "error" });
		}
	};
	return (
		<div>
			<ChangePassForm onSubmit={handleSubmit} />
		</div>
	);
}

export default ChangePass;
