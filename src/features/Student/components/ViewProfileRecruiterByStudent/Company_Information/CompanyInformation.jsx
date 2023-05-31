import React from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@material-ui/core";
import "./CompanyInformation.scss";
CompanyInformation.propTypes = {
  recruiterProfile: PropTypes.object,
};

CompanyInformation.defaultProps = {
  recruiterProfile: {},
};
function CompanyInformation({ recruiterProfile }) {
  return (
    <Box className="information">
      <Box className="information__industry">
        <Box className="information__industry__img">
          <img
            style={{ width: "25px", height: "25px" }}
            src="/Industryicon.png"
            alt=""
          />
        </Box>
        <Box className="information__industry__text">
          <Typography>
            {recruiterProfile.recruiter_Information.company_Industry}
          </Typography>
        </Box>
      </Box>
      <Box className="information__mail">
        <Box className="information__mail__img">
          <img
            style={{ width: "25px", height: "25px" }}
            src="/Mailicon.png"
            alt=""
          />
        </Box>
        <Box className="information__mail__text">
          <Typography>
            {recruiterProfile.recruiter_Information.contact_Email}
          </Typography>
        </Box>
      </Box>
      <Box className="information__cellphone">
        <Box className="information__cellphone__img">
          <img
            style={{ width: "20px", height: "20px" }}
            src="/Cellphoneicon.png"
            alt=""
          />
        </Box>
        <Box className="information__cellphone__text">
          <Typography>
            {recruiterProfile.recruiter_Information.phone_Number}
          </Typography>
        </Box>
      </Box>
      <Box className="information__size">
        <Box className="information__size__img">
          <img
            style={{ width: "25px", height: "25px" }}
            src="/Comsizeicon.png"
            alt=""
          />
        </Box>
        <Box className="information__size__text">
          <Typography>
            {recruiterProfile.recruiter_Information.company_Size}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default CompanyInformation;
