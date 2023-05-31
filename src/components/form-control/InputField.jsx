import { TextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

InputField.propTypes = {};

function InputField(props) {
	const { name, label, form, className, type, required, placeholder } = props;
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
					{...props}
					variant='outlined'
					required={required}
					className={className}
					color='primary'
					error={invalid}
					helperText={error?.message}
					onChange={onChange}
					onBlur={onBlur}
					name={name}
					value={value}
					label={label}
					type={type}
					placeholder={placeholder}
				/>
			)}
		/>
	);
}

export default InputField;
