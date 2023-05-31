import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";
import AlarmIcon from "@material-ui/icons/Alarm";
import Aos from "aos";
import "aos/dist/aos.css";

function _usfTruncate(str, size = 100, description_words = "...") {
  if (!str) return "";
  if (str.length && str.length <= size) return str;
  return str.slice(0, size) + description_words;
}
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 4px 21px rgba(64, 64, 64, 0.12)",
    borderRadius: "40px",
    margin: "auto",
    marginBottom: theme.spacing(9),
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
    cursor: "pointer",
    "&:hover": {
      color: "green",
    },
  },

  textTitle: {
    fontSize: "12px",
    fontWeight: "bold",
    marginTop: theme.spacing(1.3),
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
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
  textType: {
    color: "#404040",
    marginTop: theme.spacing(0.5),
    marginLeft: theme.spacing(0.5),
  },
  textMoney: {
    color: "#404040",
    marginTop: theme.spacing(0.5),
  },
  money: {
    display: "flex",
    marginTop: theme.spacing(0.3),
  },

  textLocation: {
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

function RecruitmentCard({ recruitment }) {
  const classes = useStyles();
  const history = useHistory();
  const loggedInUser = useSelector((state) => state.user.current);
  const [apply, setApply] = useState(false);
  useEffect(() => {
    Aos.init({});
  }, []);
  console.log(recruitment);

  // useEffect(() => {
  // 	if  (recruitment.applications.length > 0)  {
  // 		recruitment.applications.forEach((element) => {
  // 			if  (element.s_ProfileID === loggedInUser.userId)  {
  // 				setApply(true);
  // 			}
  // 		});
  // 	}
  // }, [apply]);

  const handleClickViewJob = () => {
    history.push(
      `/student/listrecruitments/detail/${recruitment.recruitments_id}`
    );
  };

  const handleClickViewDetailCompany = () => {
    history.push(`/student/viewRecruiterProfile/${recruitment.r_profileid}`);
  };
  const time = new Date().getTime();
  const time_end = new Date(recruitment.end_date).valueOf();
  //const time_end = new Date("2021-07-21T00:34:43.009Z").valueOf();
  const difference_day = (time_end - time) / (1000 * 3600 * 24);
  // console.log("DATE", time);
  // console.log("DATE_END", time_end);
  // console.log("RANGE", Math.round(difference_day));
  return (
    <Box
      data-aos="fade-up"
      padding={1}
      minHeight="250px"
      width="250px"
      className={classes.root}
    >
      <Container>
        <Box padding={1} className={classes.title}>
          <Avatar
            src={recruitment.logo_image_link}
            width="100%"
            alt="G"
            className={classes.image}
          />
          <Box className={classes.time}>
            <Typography className={classes.text}>
              {Math.round(difference_day)} days left
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
          {recruitment.profilename}
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
              {recruitment.city}
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
              {recruitment.min_salary} USD - {recruitment.max_salary} USD
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
            Application: {recruitment.total_application}
          </Box>
        </Typography>
        <Box className={classes.hashtag}>
          {/* {recruitment.recruitmentTags.map((hashtag) => (
						<span key={hashtag.hashTag_ID}>{hashtag.hashTag.hashTag_Name}</span>
					))} */}
          <span>{_usfTruncate(recruitment.hashtag_name, 7, "..")}</span>
        </Box>
        <Box className={classes.btn}>
          {/* <Button>{apply ? 'Applied' : 'Apply'}</Button> */}
          <Button onClick={handleClickViewJob}>View job</Button>
        </Box>
      </Container>
    </Box>
  );
}

export default RecruitmentCard;
