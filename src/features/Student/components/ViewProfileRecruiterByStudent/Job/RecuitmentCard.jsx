import {
  Avatar,
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AttachMoneyOutlinedIcon from "@material-ui/icons/AttachMoneyOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import React from "react";
import AlarmIcon from "@material-ui/icons/Alarm";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 4px 21px rgba(64, 64, 64, 0.12)",
    borderRadius: "40px",
    margin: "auto",
    marginBottom: "0px",
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

  text: {
    fontSize: "12px",
    fontWeight: "100",
    color: "#716868",
  },

  textTitle: {
    fontSize: "13px",
    fontWeight: "bold",

    marginTop: theme.spacing(1.3),

    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "70%",
  },
  textType: {
    color: "#404040",
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
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
  textMoney: {
    color: "#404040",
    marginTop: theme.spacing(0.5),
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

  hashtag: {
    position: "relative",
    "& span": {
      width: "29%",
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
function _usfTruncate(str, size = 100, description_words = '...') {
  if (!str)
    return "";
  if (str.length && str.length <= size)
    return str;
  return str.slice(0, size) + description_words
}
function RecruitmentCard({ recruiment, avt, nameCompany }) {
  const classes = useStyles();
  const history = useHistory();
  const handleViewJob = () => {
    history.push(
      `/student/listrecruitments/detail/${recruiment.recruitments_ID}`
    );
  };

  return (
    <Box padding={1} minHeight="250px" width="250px" className={classes.root}>
      <Container style={{ width: "109%" }}>
        <Box padding={1} className={classes.title}>
          <Avatar
            src={avt}
            width="100%"
            alt="google"
            className={classes.image}
          />
          <Box className={classes.time}>
            <Typography className={classes.text}>
              {" "}
              {recruiment.daysLeft} days left
            </Typography>
            <img src="/fluent.png" alt="fluent" className={classes.imageTime} />
          </Box>
        </Box>
        <Typography
          variant="subtitle1"
          display="inline"
          fontSize="16px"
          className={classes.text}
        >
          {nameCompany}
        </Typography>

        <Typography
          variant="caption"
          display="block"
          className={classes.textTitle}
        >
          {recruiment.title}
        </Typography>
        <Box className={classes.location}>
          <AlarmIcon className={classes.icon} style={{ fontSize: 17 }} />

          <Typography component="div" color="textSecondary">
            <Box fontWeight={100} fontSize={12} className={classes.textType}>
              {recruiment.isFullTime ? <> Full Time</> : <> Part Time</>}
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
              {recruiment.city.name}
            </Box>
          </Typography>
        </Box>

        <Box className={classes.money}>
          <AttachMoneyOutlinedIcon
            fontSize="small"
            className={classes.iconMoney}
          />
          <Typography component="div" color="textSecondary">
            <Box fontWeight={100} fontSize={13} className={classes.textMoney}>
              {recruiment.min_Salary} USD - {recruiment.max_Salary} USD
            </Box>
          </Typography>
        </Box>
        <Typography component="div" color="textSecondary">
          <Box
            style={{ color: "#404040" }}
            fontWeight={100}
            mt={0.2}
            fontSize={13}
          >
            Application:
            <span
              style={{
                color: "#0DAB42",
              }}
            >
              {" "}
              {recruiment.applications.length}
            </span>
          </Box>
        </Typography>
        <Box className={classes.hashtag}>
          {recruiment.recruitmentTags.map((item, index) =>
            index <= 2 ? (
              <span key={item.hashTag.hashTag_ID}>
                {_usfTruncate(item.hashTag.hashTag_Name, 7, '..')}
              </span>
            ) : null
          )}
        </Box>
        <Box className={classes.btn}>
          <Button onClick={handleViewJob}>View</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default RecruitmentCard;
