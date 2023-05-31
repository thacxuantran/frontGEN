import { Input, TextField } from "@material-ui/core";
import React from "react";
import { Controller } from "react-hook-form";

InputFieldNormal.propTypes = {};

function InputFieldNormal(props) {
  //const classes = useStyles();
  const { name, label, control, className, type, required } = props;

  return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<input
					//className={classes}
					required={required}
					type={type}
					className={className}
					color='primary'
					{...field}
					placeholder={label}
				/>
			)}
		/>
	);
}

export default InputFieldNormal;
