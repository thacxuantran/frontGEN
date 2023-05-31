import React from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography } from "@material-ui/core";
import SchoolIcon from "@material-ui/icons/School";
CardEducation.propTypes = {
  title: PropTypes.string,
  educations: PropTypes.array,
};

CardEducation.defaultProps = {
  title: "",
  educations: [],
};

const useStyles = makeStyles((theme) => ({
  root: {
    //border: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0px 4px 16px rgba(64, 64, 64, 0.1)",
    borderRadius: "40px",
    padding: "0 1rem",
    width: "95%",
    marginTop: theme.spacing(8.3),
  },
  title: {
    textAlign: "center",

    "& > p": {
      display: "inline-block",
      backgroundColor: "#0DAB42",
      width: "252px",
      height: "50px",
      borderRadius: "0 0 40px 40px",
      textAlign: "center",
      color: "#FFF",
      lineHeight: "50px",
      boxShadow: "0px 4px 16px rgba(64, 64, 64, 0.1)",
      fontWeight: "bolder",
    },
  },

  info: {
    margin: "25px",
    display: "flex",

    "& > div:last-child": {
      marginLeft: "20px",
      wordBreak: "break-word",

      "& > p": {
        marginBottom: theme.spacing(1),
        fontSize: "80%",
      },
      "& > p:first-child": {
        fontWeight: "bolder",
      },
    },
  },
}));

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  return [month, year].join("/");
}

function CardEducation({ title, educations }) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="body1">{title}</Typography>
      </Box>
      {educations.map((item, key) => (
        <Box className={classes.info}>
          <Box>
            <SchoolIcon color="primary" />
          </Box>
          <Box className={classes.desc}>
            <Typography style={{ fontSize: "15px" }} variant="body1">
              {item.education.school}
            </Typography>
            <Typography variant="body2">
              {formatDate(item.education.from_Date)} -{" "}
              {formatDate(item.education.to_Date)}
            </Typography>
            <Typography variant="body2">
              Major: {item.education.major}
            </Typography>
            <Typography variant="body2">
              Achievement: {item.education.achievements}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default CardEducation;
