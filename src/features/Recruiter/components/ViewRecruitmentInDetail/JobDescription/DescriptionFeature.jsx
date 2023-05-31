import React from 'react';
import PropTypes from 'prop-types';
import JobDescription from './JobDescription';

DescriptionFeature.propTypes = {
    recruitment: PropTypes.object
};
DescriptionFeature.defaultProps = {
    recruitment: {}
}

function DescriptionFeature({ recruitment }) {
    return (
        <>
            <JobDescription title='Job Description' description={recruitment.description} />
            <JobDescription title='Requirements' description={recruitment.requirement} />
        </>
    );
}

export default DescriptionFeature;