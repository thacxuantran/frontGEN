import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@material-ui/core";
import "./InformationStyle.scss";

Information.propTypes = {};

function Information({ recruitment }) {
  return (
    <Box className="content-container">
      <Box className="content-container__benefits-container">
        <Typography color="primary" variant="h5">
          Benefits
        </Typography>
        <Box className="content-container__benefits-container__wrapper">
          <Box className="content-container__benefits-container__wrapper__benefits-details">
            <Box className="margin-content">
              {recruitment.benefits && recruitment.benefits.split("\n").map((i, key) => {
                return (
                  <Box
                    key={key}
                    className="content-container__benefits-container__wrapper__benefits-details__content"
                  >
                    <Box style={{ marginLeft: "-4%" }}>
                      <p
                        style={{
                          fontSize: "15px",
                          fontFamily: "Samsung Sharp Sans Regular",
                        }}
                        key={key}
                      >
                        {i}
                      </p>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box className="content-container__benefits-container__wrapper__other-info">
            <Box className="boxInfo">
              <Box className="content-container__benefits-container__wrapper__other-info__content-line">
                <img
                  src="/bi_calendar-check.png"
                  width="35px"
                  height="35px"
                  alt=""
                />
                <Box className="generalAlign">
                  <Typography>Posted Date - Expiry Date</Typography>
                  <Typography>
                    {recruitment.create_Date} - {recruitment.end_Date}
                  </Typography>
                </Box>
              </Box>
              <Box className="content-container__benefits-container__wrapper__other-info__content-line">
                <img
                  src="/ic_outline-work.png"
                  width="35px"
                  height="35px"
                  alt=""
                />
                <Box className="generalAlign">
                  <Typography>Job Category</Typography>
                  <Typography>{recruitment.job_Category}</Typography>
                </Box>
              </Box>
              <Box className="content-container__benefits-container__wrapper__other-info__content-line">
                <img src="/ion_time.png" width="35px" height="35px" alt="" />
                <Box className="generalAlign">
                  <Typography variant="body1">Type of Job</Typography>
                  {recruitment.isFullTime ? (
                    <Typography>Full-Time</Typography>
                  ) : (
                    <Typography>Part-Time</Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Information;
