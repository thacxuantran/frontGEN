import { TextField } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';
InputFieldNormal.propTypes = {};

function InputFieldNormal(props) {
	const { name, form, className } = props;
	const { control } = form;

	return (
		<Controller
			name={name}
			control={control}
			render={({
				field: { onChange, onBlur, value, name },
				fieldState: { invalid, error },
			}) => (
				<TextField
					className={className}
					inputProps={{ 'aria-label': 'naked' }}
					color='primary'
					error={invalid}
					helperText={error?.message}
					onChange={onChange}
					onBlur={onBlur}
					name={name}
					value={value}
				/>
			)}
		/>
	);
}

export default InputFieldNormal;
