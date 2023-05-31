import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
AboutUs.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
  },
  main: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
  image: {},
  grid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: "200px",
    "& .MuiTypography-body1": {
      lineHeight: "30px",
    },
  },
  text: {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bolder",
    "& > span": {
      color: "#0DAB42",
      fontSize: "4rem",
    },
  },
}));

function AboutUs(props) {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <Box className={classes.root}>
      <div className={classes.main}>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className={classes.grid}
        >
          <Typography className={classes.text}>What People Say</Typography>
          <Typography className={classes.text}>
            About Us <span>.</span>
          </Typography>
        </div>
        <div className={classes.image}>
          <img data-aos="flip-up" src="/landingpage/aboutuscard.png" alt="" />
        </div>
      </div>
    </Box>
  );
}

export default AboutUs;
