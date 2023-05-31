import React from 'react';
import InformationDetail from './InformationDetail';

InformationFeature.propTypes = {};

function InformationFeature({ studentProfile }) {
	return (
		<>
			<InformationDetail studentProfile={studentProfile} />
		</>
	);
}

export default InformationFeature;
