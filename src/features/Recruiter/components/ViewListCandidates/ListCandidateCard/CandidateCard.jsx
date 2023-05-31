import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Button, Avatar } from "@material-ui/core";
import "./CandidateCard.scss";
CandidateCard.propTypes = {
  candidate: PropTypes.object,
};

CandidateCard.defaultProps = {
  candidate: {},
};

function CandidateCard({ candidate, state, index, onCandidateChange }) {
  const handleOnClick = (index) => {
    if (onCandidateChange) {
      onCandidateChange(index);
    }
  };
  console.log(candidate);
  return (
    <Box className="card-container">
      <Box className="card-container__info">
        <Box className="card-container__info__image">
          <Avatar
            variant="rounded"
            src={candidate.avatar_link}
          // alt={candidate.profileName}
          />
        </Box>
        <Box className="card-container__info__detail">
          <Button onClick={() => handleOnClick(index)}>
            {candidate.profileName}
          </Button>

          <Typography>{candidate.jobTitle}</Typography>
          <Box className="card-container__info__detail__location">
            <img src="/carbon_location.png" alt="" />
            <Typography variant="body2">
              {candidate.personal_Information.province_City},{" "}
              {candidate.personal_Information.country}
            </Typography>
          </Box>
        </Box>
      </Box>
      {state === "Approved" ? (
        <Box className="card-container__approve">
          <img src="/VerifyIcon.png" alt="" />
        </Box>
      ) : state === "Waiting" ? (
        <Box className="card-container__waiting">
          <img src="/waiting.png" alt="" />
        </Box>
      ) : (
        <Box className="card-container__reject">
          <img src="/reject.png" alt="" />
        </Box>
      )}
    </Box>
  );
}

export default CandidateCard;
