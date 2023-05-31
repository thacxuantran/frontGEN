import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import AlarmIcon from "@material-ui/icons/Alarm";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 4px 10px rgba(64, 64, 64, 0.24)",
    borderRadius: "40px",
    margin: "auto",
    marginBottom: "0px",
  },
  image: {
    width: "39px",
    height: "39px",
  },

  title: {
    display: "flex",
    justifyContent: "space-between",
  },

  time: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  text: {
    fontSize: "12px",
    fontWeight: "100",
    color: "#716868",
  },

  textTitle: {
    fontSize: "13px",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
  },
  textLocation: {
    color: "#404040",
    marginTop: theme.spacing(0.5),
  },
  imageTime: {
    width: "16px",
    height: "16px",
    marginLeft: theme.spacing(1),
  },
  content: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },

  location: {
    display: "flex",
  },

  money: {
    display: "flex",
    marginTop: theme.spacing(0.3),
  },
  textType: {
    color: "#404040",
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
  },
  textMoney: {
    color: "#404040",
    marginTop: theme.spacing(0.5),
  },
  textLocation: { color: "#404040", marginTop: theme.spacing(0.5) },

  icon: {
    marginTop: theme.spacing(0.5),
    marginLeft: "-5px",
    color: "#404040",
  },

  iconMoney: {
    color: "#404040",
    marginLeft: "-5px",
  },
  hashtag: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    "& span": {
      width: "40%",
      height: "17px",
      backgroundColor: "#A3EABB",
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      display: "inline-block",
      fontSize: "10px",
      textAlign: "center",
      borderRadius: "10px",
      fontWeight: "bold",
      lineHeight: "17px",
    },
  },

  btn: {
    display: "flex",
    justifyContent: "space-evenly",
    "& Button": {
      backgroundColor: "#A3EABB",
      borderRadius: "20px",
      marginTop: theme.spacing(1.5),
      color: "white",
      textTransform: "none",
      marginRight: theme.spacing(1.2),

      "&:hover": {
        backgroundColor: "#0DAB42",
      },
    },
  },
}));

function PopularJob(props) {
  const classes = useStyles();
  return (
    <Box padding={1} minHeight="250px" width="250px" className={classes.root}>
      <Container>
        <Box padding={1} className={classes.title}>
          <img
            src="/gg.png"
            width="100%"
            alt="google"
            className={classes.image}
          />
          <Box className={classes.time}>
            <Typography className={classes.text}>8 days ago</Typography>
            <img src="/fluent.png" alt="fluent" className={classes.imageTime} />
          </Box>
        </Box>
        <Typography
          variant="subtitle1"
          display="inline"
          fontSize="16px"
          className={classes.text}
        >
          Google Inc
        </Typography>

        <Typography
          variant="caption"
          display="block"
          className={classes.textTitle}
        >
          Senior UX Designer
        </Typography>
        <Box className={classes.location}>
          <AlarmIcon className={classes.icon} style={{ fontSize: 17 }} />

          <Typography component="div" color="textSecondary">
            <Box fontWeight={100} fontSize={12} className={classes.textType}>
              Full Time
            </Box>
          </Typography>
        </Box>
        <Box className={classes.location}>
          <LocationOnOutlinedIcon className={classes.icon} fontSize="small" />
          <Typography component="div" color="textSecondary">
            <Box
              fontWeight={100}
              fontSize={12}
              className={classes.textLocation}
            >
              Boston, American
            </Box>
          </Typography>
        </Box>

        <Box className={classes.money}>
          <AttachMoneyOutlinedIcon
            fontSize="small"
            className={classes.iconMoney}
          />
          <Typography component="div" color="textSecondary">
            <Box fontWeight={100} fontSize={12} className={classes.textMoney}>
              1000 USD - 2000 USD
            </Box>
          </Typography>
        </Box>
        <Typography component="div" color="textSecondary">
          <Box
            style={{ color: "#404040" }}
            fontWeight={100}
            mt={0.2}
            fontSize={12}
          >
            Application: 2 +
          </Box>
        </Typography>
        <Box className={classes.hashtag}>
          <span>Full Time</span>
          <span>Designer</span>
          <span>UI-UX</span>
        </Box>
        <Box className={classes.btn}>
          <Button>View</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default PopularJob;
