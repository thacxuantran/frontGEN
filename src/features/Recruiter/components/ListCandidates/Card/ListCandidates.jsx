import React from 'react';
import CandidateCard from './CandidateCard';

function ListCandidates({ candidate }) {
	return (
		<>
			<CandidateCard candidate={candidate}  />
		</>
	);
}

export default ListCandidates;
