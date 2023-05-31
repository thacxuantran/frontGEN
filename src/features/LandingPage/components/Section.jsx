import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
Section.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "200px",
    marginBottom: "100px",
    display: "flex",
    flexDirection: "column",
  },
  circle: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "-300px",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    width: "45%",
    marginLeft: "60px",
  },
  text1: {},
}));

function Section(props) {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className={classes.root}>
      <div className={classes.circle}>
        <img
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          style={{ width: "200px" }}
          src="/landingpage/image2.png"
          alt=""
        />
      </div>
      <div className={classes.main}>
        <img
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          src="/landingpage/image.png"
          alt=""
        />
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-easing="ease-in-sine"
          className={classes.text}
        >
          <Typography
            variant="h5"
            style={{
              textAlign: "center",
              fontFamily: "Samsung Sharp Sans",
              textSize: "30px",
            }}
          >
            “Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. ”
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Section;
