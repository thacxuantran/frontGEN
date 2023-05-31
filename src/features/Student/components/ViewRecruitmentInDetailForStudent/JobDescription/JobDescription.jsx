import React from "react";
import PropTypes from "prop-types";
import "./Description.scss";
import { Box, Button, Typography } from "@material-ui/core";
JobDescription.propTypes = {
  title: PropTypes.string,
};

function JobDescription({ title, description }) {
  return (
    <Box className="description-container">
      <Typography color="primary" variant="h5">
        {title}
      </Typography>
      <Box className="description-container__description-content">
        <ul>
          {description.split("\n").map((i, key) => {
            return (
              <li
                style={{
                  fontSize: "15px",
                  fontFamily: "Samsung Sharp Sans Regular",
                }}
                key={key}
              >
                {i}
              </li>
            );
          })}
        </ul>
      </Box>
    </Box>
  );
}

export default JobDescription;
