import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';

PasswordField.propTypes = {};

function PasswordField(props) {
	const { control, name, label, className } = props;
	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					variant='outlined'
					required
					className={className}
					type='password'
					{...field}
					label={label}
					{...props}
				/>
			)}
		/>
	);
}

export default PasswordField;
