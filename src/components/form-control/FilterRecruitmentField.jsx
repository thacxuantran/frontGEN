import React from 'react';
import PropTypes from 'prop-types';

FilterRecruitmentField.propTypes = {};

function FilterRecruitmentField(props) {
	const { name, label, control, className } = props;

	return (
		<Controller
			name={name}
			control={control}
			render={({ field }) => (
				<TextField
					variant='outlined'
					required
					// className='paper__form__container__textInput'
					className={className}
					color='primary'
					{...field}
					label={label}
				/>
			)}
		/>
	);
}

export default FilterRecruitmentField;
