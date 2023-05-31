import React from "react";
import PropTypes from "prop-types";
import OverviewDetail from "../Overview/OverviewDetail";

OverviewDetailFeature.propTypes = {
  recruitment: PropTypes.object,
};

OverviewDetailFeature.defaultProps = {
  recruitment: {},
};
function OverviewDetailFeature({ recruitment, onCloseChange, onDeleteChange }) {
  return (
    <>
      <OverviewDetail
        recruitment={recruitment}
        onCloseChange={onCloseChange}
        onDeleteChange={onDeleteChange}
      />
    </>
  );
}

export default OverviewDetailFeature;
