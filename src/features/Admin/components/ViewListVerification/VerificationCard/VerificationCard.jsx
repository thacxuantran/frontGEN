import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Button, Typography } from "@material-ui/core";
import "./VerificationCard.scss";

VerificationCard.propTypes = {
  verification: PropTypes.object,
};

VerificationCard.defaultProps = {
  verification: {},
};

function VerificationCard({
  verification,
  index,
  onVerificationChange,
  avatar,
}) {
  const handleOnClick = (index) => {
    if (onVerificationChange) {
      onVerificationChange(index);
    }
  };
  return (
    <Box className="verification-card-container">
      <Box className="verification-card-container__image">
        <Avatar src={avatar} />
      </Box>
      <Box className="verification-card-container__detail">
        <Button onClick={() => handleOnClick(index)}>
          {verification.company_Name}
        </Button>
        <Typography variant="body2">{verification.company_Industry}</Typography>
      </Box>
    </Box>
  );
}

export default VerificationCard;
