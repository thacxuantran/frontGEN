import React from 'react';
import Select from 'react-select';

function OptionFilterField(props) {
	const { name, className, placeholder, options, onChangeFilter, value } =
		props;

	const customTheme = (theme) => {
		return {
			...theme,
			colors: {
				...theme.colors,
				primary: '#0DAB42',
			},
		};
	};

	return (
		<Select
			defaultValue={value}
			name={name}
			value={value}
			placeholder={placeholder}
			options={options}
			className={className}
			theme={customTheme}
			onChange={onChangeFilter}
			isSearchable='true'
			classNamePrefix='select'
		/>
	);
}

export default OptionFilterField;
