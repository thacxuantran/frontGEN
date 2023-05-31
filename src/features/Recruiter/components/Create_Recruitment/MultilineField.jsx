import { TextField } from '@material-ui/core';
import React from 'react';
import { Controller } from 'react-hook-form';

MultilineField.propTypes = {};

function MultilineField(props) {
	const { name, label, form, className } = props;
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
					id='outlined-multiline-static'
					multiline
					rows={10}
					variant='outlined'
					className={className}
					color='primary'
					error={invalid}
					helperText={error?.message}
					onChange={onChange}
					onBlur={onBlur}
					name={name}
					value={value}
					label={label}
				/>
			)}
		/>
	);
}

export default MultilineField;
