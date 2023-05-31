import React from "react";
import PropTypes from "prop-types";
import "./LocationStyle.scss";
import { Box, Button, Typography } from "@material-ui/core";

Location.propTypes = {};

function Location({ recruitment }) {
  return (
    <Box className="location-container">
      <Box className="location-container__info">
        <Typography color="primary" variant="h5">
          Work Location
        </Typography>
        <Box className="location-container__location-content">
          <Box>
            <img
              style={{ width: "25px", height: "25px" }}
              src="/location.png"
              alt=""
            />
          </Box>
          <Box>
            <p
              style={{
                fontSize: "15px",

                fontFamily: "Samsung Sharp Sans Regular",
                marginLeft: "15px",
              }}
            >
              {recruitment.location}, {recruitment.city.name}
            </p>
          </Box>
        </Box>
      </Box>
      {/* <Box className="location-container__image">
        <img src="/ship.png" alt="" />
      </Box> */}
    </Box>
  );
}

export default Location;
