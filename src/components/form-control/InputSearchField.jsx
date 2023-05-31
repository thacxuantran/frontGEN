import { TextField } from '@material-ui/core';
import React from 'react';

import { Controller } from 'react-hook-form';

function InputSearchField(props) {
	const { name, label, control, className, placeholder, required } = props;

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					required={required}
					// className='paper__form__container__textInput'
					className={className}
					placeholder={placeholder}
					{...field}
				/>
			)}
		/>
	);
}

export default InputSearchField;
