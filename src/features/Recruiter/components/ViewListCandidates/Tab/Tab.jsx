import React from "react";
import PropTypes from "prop-types";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import "./TabStyle.scss";
Tab.propTypes = {};

const useStyles = makeStyles((theme) => ({}));

function Tab({ onSwitchChangeList, onSwitchChangeRecruitment, isDetail }) {
  const classes = useStyles();
  return (
    <Box className="tablist-container">
      <div className="tablist-container__wrapper">
        <p
          className={!isDetail ? "un-active" : "active"}
          onClick={() => onSwitchChangeRecruitment()}
          color="primary"
        >
          Recruitment Detail
        </p>
        <p
          className={isDetail ? "un-active" : "active"}
          onClick={() => onSwitchChangeList()}
          color="primary"
        >
          List Candidates
        </p>
      </div>
      <div
        className={!isDetail ? "animation_change2" : "animation_change"}
      ></div>
    </Box>
  );
}

export default Tab;
