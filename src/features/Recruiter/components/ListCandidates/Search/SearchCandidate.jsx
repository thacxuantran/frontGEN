import React from 'react';
import SearchCandidateForm from './SearchCandidateForm';

function SearchCandidate({ handleSubmitSearch }) {
	return (
		<>
			<SearchCandidateForm onSubmit={handleSubmitSearch} />
		</>
	);
}

export default SearchCandidate;
