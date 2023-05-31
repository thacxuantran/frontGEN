import React from 'react';
import PropTypes from 'prop-types';
import Location from './Location';

LocationFeature.propTypes = {
    recruitment: PropTypes.object
};

LocationFeature.defaultProps = {
    recruitment: {}
}
function LocationFeature({ recruitment }) {
    return (
        <>
            <Location recruitment={recruitment} />
        </>
    );
}

export default LocationFeature;