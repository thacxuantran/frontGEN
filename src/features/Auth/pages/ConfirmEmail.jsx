import React, { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import userApi from '../../../api/userApi';
import Loading from "../../../components/Loading";
import queryString from 'query-string'
import { useSnackbar } from 'notistack';

ConfirmEmail.propTypes = {};
function ConfirmEmail(props) {
	const history = useHistory();
	const search = window.location.search;
	const params = new URLSearchParams(search);
	const { enqueueSnackbar } = useSnackbar();

	const token = encodeURIComponent(params.get('token'));
	const userId = encodeURIComponent(params.get('userId'));
	console.log(token, userId);
	const [resultConfirm, setResultConfirm] = useState(false);
	useEffect(() => {
        (async () => {
            try {
                const response = await userApi.confirmEmail(token,userId);
				console.log(response);
                setResultConfirm(response !== null);
				history.push('/')
				enqueueSnackbar(
					'Confirm email successfully !!! Please login to use my website 💟💟💟   ',
					{ variant: 'success' }
				);

            } catch (error) {
                console.log('err', error)
            }

        })()
    }, [])
	

	return (
		<>
		{
		!resultConfirm ? <Loading/>  : 		
			<div></div>
		}
		</>

	);
}

export default ConfirmEmail;
