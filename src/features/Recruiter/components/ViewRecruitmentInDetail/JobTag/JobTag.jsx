import React from "react";
import PropTypes from "prop-types";
import { Typography, makeStyles, Chip } from "@material-ui/core";

JobTag.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4%",

    "& .MuiTypography-h5": {
      fontSize: "20px",
      fontFamily: " Samsung Sharp Sans",
      fontWeight: "bold",
      lineHeight: "1.334",
    },
  },
  info: {
    marginTop: "2%",
    width: "68%",
    paddingTop: "25px",
  },
  chip: {
    marginRight: "2%",
    boxShadow: "0px 5px 21px rgba(0, 0, 0, 0.10)",
    border: "white",
    fontSize: "15px",
  },
}));
function JobTag({ recruitment }) {
  const classes = useStyles();
  const defaultValue = recruitment.recruitmentTags;
  return (
    <div className={classes.root}>
      <Typography color="primary" variant="h5">
        Job Tags
      </Typography>
      <div className={classes.info}>
        {defaultValue.map((option, index) => (
          <Chip
            className="chip"
            variant="outlined"
            color="primary"
            className={classes.chip}
            // onDelete={handleDelete}
            label={option.hashTag.hashTag_Name}
            size="large"
          />
        ))}
      </div>
    </div>
  );
}

export default JobTag;
