import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, makeStyles, Typography, Button } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    height: "100%",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    "& > div": {
      display: "flex",
      justifyContent: "center",

      "& > button": {
        backgroundColor: "#0DAB42",
        textTransform: "none",
        borderRadius: "15px",
        // width: '89px',
        // height: '48px',
        // fontSize: '20px',
      },
    },

    "& > h3": {
      textAlign: "center",
      fontSize: "40px",
      fontWeight: "bolder",
      marginBottom: theme.spacing(5.5),

      "& > span": {
        color: "#0DAB42",
        fontSize: "4rem",
      },
    },

    "& > p": {
      textAlign: "center",
      marginBottom: theme.spacing(6.5),
    },
  },
  text: {
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bolder",

    marginBottom: theme.spacing(8),

    "& > span": {
      color: "#0DAB42",
      fontSize: "4rem",
    },
  },
}));

function EventDesc(props) {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Box className={classes.root}>
      <Typography data-aos="zoom-in-up" className={classes.text}>
        Top Event<span>.</span>
      </Typography>

      <Typography
        data-aos="zoom-in-up"
        variant="h6"
        style={{
          textAlign: "center",
          fontFamily: "Samsung Sharp Sans",
          textSize: "30px",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta aperiam
        quia deserunt minus fuga repudiandae asperiores obcaecati quis suscipit
        quidem!
      </Typography>
      <Box data-aos="zoom-in-up" style={{ marginTop: "52px" }}>
        <Button color="secondary">Post</Button>
      </Box>
    </Box>
  );
}

export default EventDesc;
