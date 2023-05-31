import React from "react";
import PropTypes from "prop-types";
import OverviewDetail from "./OverviewDetail";

OverviewFeature.propTypes = {
  canProfile: PropTypes.object,
};

OverviewFeature.defaultProps = {
  canProfile: {},
};
function OverviewFeature({
  canProfile,
  appState,
  recruitment,
  onSubmitApprove,
  onSubmitReject,
}) {
  return (
    <>
      <OverviewDetail
        canProfile={canProfile}
        appState={appState}
        recruitment={recruitment}
        onSubmitApprove={onSubmitApprove}
        onSubmitReject={onSubmitReject}
      />
    </>
  );
}

export default OverviewFeature;
