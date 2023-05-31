import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import "./ProfileBody.scss";
ProfileBody.propTypes = {
  recruiterProfile: PropTypes.object,
};

ProfileBody.defaultProps = {
  recruiterProfile: {},
};

function ProfileBody({ recruiterProfile }) {
  return (
    <Box className="body">
      <Typography variant="h5">
        Overall<span className="dot">.</span>
      </Typography>
      <Typography variant="body2" className="body__desc ck-content">
        {recruiterProfile.description
          ? ReactHtmlParser(recruiterProfile.description)
          : ""}
      </Typography>
      <Typography variant="h5" className="body__job">
        Jobs<span className="dot">.</span>
      </Typography>
    </Box>
  );
}

export default ProfileBody;
