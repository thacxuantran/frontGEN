import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";
TopRecruiter.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
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
  },
  gridFirst: {
    "& > img:first-child": {
      marginBottom: theme.spacing(3.5),
    },
  },

  gridSecond: {
    "& > img:first-child": {
      marginBottom: theme.spacing(4),
    },
  },
  gridThird: {
    display: "flex",
    justifyContent: "space-around",

    "& > div > img:first-child": {
      marginBottom: theme.spacing(6),
    },
  },

  gridFourth: {
    "& > img:first-child": {
      marginBottom: theme.spacing(5),
    },
  },
  image: {
    width: "60%",
  },
  divImage: {
    display: "flex",
    justifyContent: "center",
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

function TopRecruiter(props) {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <Box data-aos="zoom-in-up" className={classes.root}>
      <Typography className={classes.text}>
        Top Recruiter<span>.</span>{" "}
      </Typography>
      {/* <Grid container className={classes.grid}>
				<Grid item xs={12} sm={6} md={6} lg={2} className={classes.gridFirst}>
					<img src='/landingpage/shopee.png' alt='shopee' />
					<img src='/landingpage/fb.png' alt='facebook' />
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={2} className={classes.gridSecond}>
					<img src='/landingpage/amazon.png' alt='shopee' />
					<img src='/landingpage/fpt.png' alt='shopee' />
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={5} className={classes.gridThird}>
					<img src='/landingpage/apple.png' alt='shopee' />
					<Box>
						<img src='/landingpage/tch.png' alt='shopee' />
						<img src='/landingpage/ms.png' alt='shopee' />
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={3} className={classes.gridFourth}>
					<img src='/landingpage/adidas.png' alt='shopee' />
					<img src='/landingpage/airbnb.png' alt='shopee' />
				</Grid>
			</Grid> */}
      <div className={classes.divImage}>
        <div className={classes.image}>
          <img styles={{ width: "216px" }} src="/toprecruiter.png" alt="" />
        </div>
      </div>
    </Box>
  );
}

export default TopRecruiter;
