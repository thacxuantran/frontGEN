import React from "react";
import PropTypes from "prop-types";
import OverviewDetail from "./OverviewDetail";

OverviewFeature.propTypes = {};

function OverviewFeature({ studentProfile, options, onSelectOption, isRecruiterView }) {
  return (
    <>
      <OverviewDetail
        studentProfile={studentProfile}
        options={options}
        onSelectOption={onSelectOption}
        isRecruiterView={isRecruiterView}
      />
    </>
  );
}

export default OverviewFeature;
