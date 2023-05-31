import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs";
import EventCard from "../components/EventCard";
import EventDesc from "../components/EventDesc";
import IntroSearch from "../components/IntroSearch";
import PopularJob from "../components/PopularJob";
import Section from "../components/Section";
import TopRecruiter from "../components/TopRecruiter";
import Aos from "aos";
import "aos/dist/aos.css";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(20),
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

  grid: {
    height: "100%",
  },

  event: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    maxWidth: "100%",
    marginTop: theme.spacing(9),
  },
  eventtitle: {
    display: "flex",
    flexDirection: "row",
    margin: "auto 60px",
  },
  eventcircle: {
    marginBottom: "-45%",
  },
  eventimg: {
    marginRight: theme.spacing(2),
  },
  cardEvent: {
    marginTop: theme.spacing(32),
  },
  topRecruiter: {
    marginTop: theme.spacing(16),
  },
  aboutus: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(20),
  },
}));

function HomePage(props) {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <Box className={classes.root}>
      <Container>
        <IntroSearch />
      </Container>
      <Section />
      <Container data-aos="zoom-in-up" data-aos-duration="1000">
        <Typography
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          variant="h5"
          className={classes.text}
        >
          Popular job<span>.</span>{" "}
        </Typography>

        <Grid data-aos="zoom-in-up" data-aos-duration="1000" container>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <PopularJob />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <PopularJob />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <PopularJob />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <PopularJob />
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.event}>
        <div>
          <div className={classes.eventcircle}>
            <img src="/eventcircle.png" />
          </div>
          <div className={classes.eventtitle}>
            <EventDesc />
            <div className={classes.eventimg}>
              <img
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                src="/eventImage.png"
                height="593px"
                width="544px"
              />
            </div>
          </div>
        </div>

        <div className={classes.topRecruiter}>
          <TopRecruiter />
        </div>
        <div className={classes.aboutus}>
          <AboutUs />
        </div>
      </Box>
    </Box>
  );
}

export default HomePage;
