import React from "react";
import PropTypes from "prop-types";
import InformationDetail from "./InformationDetail";

InformationFeature.propTypes = {
  canProfile: PropTypes.object,
};

InformationFeature.defaultProps = {
  canProfile: {},
};
function InformationFeature({ canProfile }) {
  return (
    <>
      <InformationDetail canProfile={canProfile} />
    </>
  );
}

export default InformationFeature;
