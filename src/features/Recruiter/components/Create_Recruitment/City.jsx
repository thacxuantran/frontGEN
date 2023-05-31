import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import recruiterApi from '../../../../api/axiosRecruiter';

function City(props) {
	const [normalSelectOption, setNormalSelectOption] = useState(null);
	var options = [];
	const [city, setCity] = useState([]);
	const [loading, setLoading] = useState(true);
	const { name, label, control, className } = props;

	useEffect(() => {
		(async () => {
			try {
				await Promise.all([recruiterApi.getCity()]).then((data) => {
					setCity(data[0].data);
					setLoading(true);
				});
			} catch (error) {
				console.log('err', error);
			}
		})();
	}, []);
	for (let i = 0; i < city.length; i++) {
		options.push({
			value: city[i].city_ID,
			label: city[i].name,
		});
	}
	const handleChange = (normalSelectOption) => {
		setNormalSelectOption(normalSelectOption);
	};

	return (
		<div style={{ width: '100%' }}>
			<>
				<Controller
					name={name}
					control={control}
					render={({ field }) => (
						<Select
							isSearchable
							required
							value={normalSelectOption}
							onChange={handleChange}
							placeholder='City'
							color='primary'
							options={options}
							className={className}
							{...field}
						/>
					)}
				/>
			</>
		</div>
	);
}

export default City;
