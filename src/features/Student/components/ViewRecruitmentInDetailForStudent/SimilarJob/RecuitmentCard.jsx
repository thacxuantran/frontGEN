import React from "react";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import { useHistory } from "react-router-dom";
import AlarmIcon from "@material-ui/icons/Alarm";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 4px 21px rgba(64, 64, 64, 0.12)",
    borderRadius: "40px",
    margin: "auto",
    marginBottom: theme.spacing(9),
    marginTop: "10%",
  },
  image: {
    width: "42px",
    height: "42px",
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
  textType: {
    color: "#404040",
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
  },
  text: {
    fontSize: "12px",
    fontWeight: "100",
    color: "#716868",
    cursor: "pointer",
  },
  dayleft: {
    fontSize: "12px",
    fontWeight: "100",
    color: "#716868",
  },
  textTitle: {
    fontSize: "12px",
    fontWeight: "bold",
    marginTop: theme.spacing(1.3),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "70%",
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

  textLocation: {
    color: "#404040",
    marginTop: theme.spacing(0.7),
  },

  icon: {
    marginTop: theme.spacing(0.5),
    marginLeft: "-5px",
    color: "#404040",
  },

  iconMoney: {
    color: "#404040",
    marginLeft: "-5px",
  },
  textMoney: {
    color: "#404040",
    marginTop: theme.spacing(0.5),
  },
  hashtag: {
    position: "relative",
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

function RecruitmentCard({ recruitment }) {
  const classes = useStyles();
  const history = useHistory();
  const handleClickViewJob = () => {
    history.push(
      `/student/listrecruitments/detail/${recruitment.recruitments_ID}`
    );
    history.go(0);
  };
  const handleClickViewDetailCompany = () => {
    if (recruitment.r_ProfileID) {
      const win = window.open(
        `/student/viewRecruiterProfile/${recruitment.r_ProfileID}`,
        "_blank"
      );
      win.focus();
    } else {
      const win = window.open(
        `/student/viewStudentProfile/${recruitment.s_ProfileID}`,
        "_blank"
      );
      win.focus();
    }
  };
  return (
    <Box padding={1} minHeight="250px" width="250px" className={classes.root}>
      <Container style={{ padding: "0 15px" }}>
        <Box padding={1} className={classes.title}>
          <Avatar
            src={recruitment.authorImage}
            width="100%"
            className={classes.image}
          />
          <Box className={classes.time}>
            <Typography className={classes.dayleft}>
              {recruitment.daysLeft} days left
            </Typography>
            <img src="/fluent.png" alt="fluent" className={classes.imageTime} />
          </Box>
        </Box>
        <Typography
          variant="subtitle1"
          display="inline"
          fontSize="16px"
          className={classes.text}
          onClick={handleClickViewDetailCompany}
        >
          {recruitment.authorName}
        </Typography>

        <Typography
          variant="caption"
          display="block"
          className={classes.textTitle}
        >
          {recruitment.title}
        </Typography>
        <Box className={classes.location}>
          <AlarmIcon className={classes.icon} style={{ fontSize: 17 }} />

          <Typography component="div" color="textSecondary">
            <Box fontWeight={100} fontSize={12} className={classes.textType}>
              {recruitment.isFullTime ? <> Full Time</> : <> Part Time</>}
            </Box>
          </Typography>
        </Box>
        <Box className={classes.location}>
          <LocationOnOutlinedIcon className={classes.icon} fontSize="small" />
          <Typography component="div" color="textSecondary">
            <Box
              fontWeight={100}
              fontSize={13}
              className={classes.textLocation}
            >
              {recruitment.city.name}
            </Box>
          </Typography>
        </Box>

        <Box className={classes.money}>
          <AttachMoneyOutlinedIcon
            fontSize="small"
            className={classes.iconMoney}
          />
          <Typography component="div" color="textSecondary">
            <Box fontWeight={100} fontSize={13} textMoney>
              {recruitment.min_Salary} USD-{recruitment.max_Salary} USD
            </Box>
          </Typography>
        </Box>
        <Typography component="div" color="textSecondary">
          <Box fontWeight={100} mt={0.2} fontSize={13}>
            Application:{" "}
            <span
              style={{
                color: "#0DAB42",
              }}
            >
              {" "}
              {recruitment.applications.length}
            </span>
          </Box>
        </Typography>
        <Box className={classes.hashtag}>
          {recruitment.recruitmentTags.map((item, index) =>
            index <= 2 ? (
              <span key={item.hashTag.hashTag_ID}>
                {item.hashTag.hashTag_Name}
              </span>
            ) : null
          )}
        </Box>
        <Box className={classes.btn}>
          <Button onClick={handleClickViewJob}>View job</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default RecruitmentCard;
