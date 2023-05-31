import { Chip, TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import './tagInput.scss';
TagInput.propTypes = {};
function TagInput(props) {
	const [normalSelectOption, setNormalSelectOption] = useState(props.names);
	const { name, label, control, className, onSetTags } = props;
	const top100Films = [
		{ label: 'Java', value: '1' },
		{ label: 'JavaScript', value: '2' },
		{ label: '.Net Core', value: '3' },
		{ label: 'ReactJS', value: '4' },
	];

	const handleChange = (e, value) => {
		setNormalSelectOption(value);
		onSetTags(value);
	};
	return (
		<div>
			<Controller
				name={name}
				render={({ field }) => (
					<Autocomplete
						multiple
						required
						id='tags-filled'
						options={top100Films.map((option) => option.label)}
						freeSolo
						onChange={handleChange}
						value={normalSelectOption}
						renderTags={(value, getTagProps) =>
							value.map((option, index) => (
								<Chip
									className='chip'
									variant='outlined'
									color='primary'
									label={option}
									size='medium'
									{...getTagProps({ index })}
									{...field}
								/>
							))
						}
						renderInput={(params) => (
							<TextField
								{...params}
								class='text_field'
								variant='filled'
								placeholder='Input Job tag'
							/>
						)}
					/>
				)}
				control={control}
			/>
		</div>
	);
}
export default TagInput;
