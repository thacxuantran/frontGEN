import React from 'react';
import PropTypes from 'prop-types';
import Information from './Information';

InformationFeature.propTypes = {
    recruitment: PropTypes.object
};

InformationFeature.defaultProps = {
    recruitment: {}
}
function InformationFeature({ recruitment }) {
    return (
        <>
            <Information recruitment={recruitment} />
        </>
    );
}

export default InformationFeature;