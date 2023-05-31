import React from 'react';
import FilterForm from './FilterForm';

function FilterFeature({ onSubmit, filterCareer, filterCountry, filterEducation, filterLanguage, filterLocation, onReset }) {

	return (
		<>
			<FilterForm onReset={onReset} onSubmit={onSubmit} filterCareer={filterCareer} filterLocation={filterLocation} filterCountry={filterCountry} filterEducation={filterEducation} filterLanguage={filterLanguage} />
		</>
	);
}

export default FilterFeature;
