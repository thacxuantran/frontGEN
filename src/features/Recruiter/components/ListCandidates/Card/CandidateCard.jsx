import React, { useEffect } from "react";
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
import { HistoryOutlined } from "@material-ui/icons";
import Aos from "aos";
import "aos/dist/aos.css";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 5px 31px rgba(0, 0, 0, 0.1)",
    borderRadius: "40px",
    width: "280px",
    height: "280px",
    margin: "auto",
    marginBottom: theme.spacing(9),
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.1)",
      transitionDuration: "0.5s",
      border: "1px solid #0DAB42",
    },
  },

  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: "75px",
    height: "75px",
    border: "2px solid #0DAB42",
    borderRadius: "50px",
  },

  time: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  div_text: {
    width: "80%",
    display: "inline-block",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginTop: "7%",
    fontFamily: "Samsung Sharp Sans",
    fontSize: "18px",
    "&:hover": {
      color: "#0DAB42",
      cursor: "pointer",
    },
  },
  div_title: {
    width: "80%",
    display: "inline-block",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    marginTop: "7%",
    fontFamily: "Samsung Sharp Sans Regular",
    fontSize: "15px",
  },
  text: {
    fontSize: "15px",
    fontWeight: "bolder",
    "&:hover": {
      fontSize: "16px",
      color: "#0DAB42",
      cursor: "pointer",
    },
  },

  textTitle: {
    fontSize: "15px",
    fontWeight: "bold",
    marginTop: theme.spacing(1),
  },

  location: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(1),
    alignItems: "center",
  },

  money: {
    display: "flex",
    marginTop: theme.spacing(0.3),
  },

  textLocation: {
    marginTop: "5px",
    fontFamily: "Samsung Sharp Sans Regular",
    fontSize: "13px",
    width: "100%",
    display: "inline-block",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: "#404040",
  },

  icon: {
    marginTop: theme.spacing(0.5),
    marginRight: "5px",
    width: "20px",
  },

  iconMoney: {
    marginLeft: "-5px",
  },

  hashtag: {
    marginTop: theme.spacing(1),
    width: "100%",
    position: "relative",
    textAlign: "center",
    "& span": {
      // width: "max-content",
      height: "17px",
      backgroundColor: "#A3EABB",
      padding: "9px",
      // display: "block",
      fontSize: "11px",
      textAlign: "center",
      borderRadius: "10px",
      fontWeight: "bold",
      lineHeight: "1px",
      margin: "5px 5px",
      width: "40%",
      display: "inline-block",
      textAlign: "center",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  div_hashtag: {},
  btn: {
    display: "flex",
    justifyContent: "space-evenly",

    "& Button": {
      backgroundColor: "#0DAB42",
      borderRadius: "20px",
      marginTop: theme.spacing(1.5),
      color: "white",
      textTransform: "none",
      marginRight: theme.spacing(1.2),
      height: "32px",

      "&:hover": {
        backgroundColor: "#A3EABB",
      },
    },
  },
}));

function CandidateCard({ candidate }) {
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    Aos.init({});
  }, []);
  const viewStudentDetail = () => {
    const win = window.open(
      `/recruiter/listcandidates/detail/${candidate.s_profileid}`,
      "_blank"
    );
    win.focus();
    // history.push(
    //   `/recruiter/listcandidates/detail/${candidate.s_profileid}`,
    //   "_blank"
    // );
  };
  return (
    <Box
      data-aos="fade-up"
      onClick={viewStudentDetail}
      padding={1}
      minHeight="250px"
      width="250px"
      className={classes.root}
    >
      <Container className={classes.card}>
        <Box padding={1}>
          <Avatar
            src={candidate.avatar_link}
            width="100%"
            alt="GEN"
            className={classes.image}
          />
        </Box>
        <div className={classes.div_text}>{candidate.profilename}</div>
        <div className={classes.div_title}>{candidate.jobtitle}</div>

        <Box className={classes.location}>
          <img className={classes.icon} src="/icon_location.png" />
          <Box className={classes.textLocation}>
            {candidate.province_city}, {candidate.country}
          </Box>
        </Box>

        <Box className={classes.hashtag}>
          {candidate.skill_name
            ? candidate.skill_name.map((item, index) =>
                index <= 3 ? (
                  <span className={classes.div_hashtag} key={index}>
                    {item}
                  </span>
                ) : null
              )
            : null}
        </Box>
        {/* <Box className={classes.btn}>
          <Button>View</Button>
        </Box> */}
      </Container>
    </Box>
  );
}

export default CandidateCard;
