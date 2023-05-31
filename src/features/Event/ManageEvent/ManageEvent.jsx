import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Avatar, Box, Button, Grid } from "@material-ui/core";
import EventCard from "../LandingPage/EventCard/EventCard";
import { Pagination } from "@material-ui/lab";
ManageEvent.propTypes = {};

function ManageEvent(props) {
  const [change, setChange] = useState(true);
  const [clickStateLeftA, setClickStateLeftA] = useState(
    "recruiter_management_left_a_click"
  );
  const [clickStateLeftButton, setClickStateLeftButton] = useState(
    "recruiter_management_left_button_click"
  );
  const [clickStateRightA, setClickStateRightA] = useState(
    "recruiter_management_right_a_unclick"
  );
  const [clickStateRightButton, setClickStateRightButton] = useState(
    "recruiter_management_Right_button_unclick"
  );

  const changestageLeft = () => {
    if (clickStateLeftA === "recruiter_management_left_a_unclick") {
      setClickStateLeftA("recruiter_management_left_a_click");
      setClickStateLeftButton("recruiter_management_left_button_click");
      setColorLeft("primary");
      setClickStateRightA("recruiter_management_right_a_unclick");
      setClickStateRightButton("recruiter_management_right_button_unclick");
      setColorRight("black");
      setChange(true);
    }
  };
  const changestageRight = () => {
    if (clickStateRightA === "recruiter_management_right_a_unclick") {
      setClickStateRightA("recruiter_management_right_a_click");
      setClickStateRightButton("recruiter_management_right_button_click");
      setColorRight("primary");
      setClickStateLeftA("recruiter_management_left_a_unclick");
      setClickStateLeftButton("recruiter_management_left_button_unclick");
      setColorLeft("black");
      setChange(false);
    }
  };

  const [colorLeft, setColorLeft] = useState("primary");
  const [colorRight, setColorRight] = useState("black");
  return (
    <div className="manage-event">
      <div className="manage-event__header">
        <div className="manage-event__header__info">
          <div className="manage-event__header__info__avt">
            <Avatar src="/eventcard2.jpeg" />
          </div>
          <div>
            <div className="manage-event__header__info__info_name">
              <p style={{ fontSize: "18px" }}>Xuan Thac</p>

              <img
                style={{ width: "15px", height: "15px", marginLeft: "8px" }}
                src="/VerifyIcon.png"
                alt=""
              />
            </div>
            <p
              style={{
                fontSize: "16px",
                fontFamily: "Samsung Sharp Sans Regular",
                marginTop: "10px",
              }}
            >
              UX/Ui Designer
            </p>
          </div>
        </div>
        <div className="manage-event__header__postedEvent">
          <p
            style={{
              fontSize: "36px",
              color: "#0dab42",
            }}
          >
            12
          </p>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Samsung Sharp Sans Regular",
              marginTop: "10px",
            }}
          >
            Posted Event
          </p>
        </div>
        <div className="manage-event__header__postedEvent">
          <p
            style={{
              fontSize: "36px",
              color: "#0dab42",
            }}
          >
            123
          </p>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Samsung Sharp Sans Regular",
              marginTop: "10px",
            }}
          >
            Joined Event
          </p>
        </div>
        <div className="manage-event__header__postedEvent">
          <p
            style={{
              fontSize: "36px",
              color: "#0dab42",
            }}
          >
            1
          </p>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Samsung Sharp Sans Regular",
              marginTop: "10px",
            }}
          >
            Deleted Event
          </p>
        </div>
        <div className="manage-event__header__create" usemap="#header_create">
          <a
            href="/recruiter/createRecruitment"
            className="manage-event__header__create__img"
          >
            {" "}
            <img href="/event/createEvent" src="/add_icon.png" alt="add_icon" />
          </a>

          <a href="/event/createEvent">Create Event</a>
        </div>
      </div>
      <div className="manage-event__body">
        <div className="manage-event__body__left">
          <a className={clickStateLeftA} onClick={changestageLeft}>
            <Button
              className={clickStateLeftButton}
              style={{
                textTransform: "none",
                fontSize: "18px",
                marginBottom: "-5px",
              }}
              color={colorLeft}
            >
              Posted Event
            </Button>
          </a>
          <a className={clickStateRightA} onClick={changestageRight}>
            <Button
              className={clickStateRightButton}
              style={{
                textTransform: "none",
                fontSize: "18px",
                marginBottom: "-5px",
              }}
              color={colorRight}
            >
              Joined Event
            </Button>
          </a>
          <img
            style={{ width: "303px", height: "298px" }}
            src="/manageevent.png"
            alt="manageevent"
          />
        </div>
        <div className="recruiter_management_body_space"></div>
        <div className="manage-event__body__right">
          <div className="upcoming__upcomingEvent__main">
            <Grid container>
              <Grid item xs={12} sm={6} md={2} lg={6}>
                <EventCard
                  img="/event1.jpg"
                  title="Student Achievement Awards"
                />
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={6}>
                <EventCard
                  img="/eventcard2.jpeg"
                  title="AXIE INFINITY - Hanh Trinh Ty Do"
                />
              </Grid>
            </Grid>
          </div>
          <div className="upcoming__upcomingEvent__main">
            <Grid container>
              <Grid item xs={12} sm={6} md={2} lg={6}>
                <EventCard img="/eventcard1.png" title="Olympic from home" />
              </Grid>
              <Grid item xs={12} sm={6} md={2} lg={6}>
                <EventCard img="/eventcard5.jpeg" title="Oh I Know!" />
              </Grid>
            </Grid>
          </div>
          <Box className="upcoming__upcomingEvent__page">
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                flexFlow: "row nowrap",
                marginTop: "10px",
              }}
            >
              <Pagination
                color="primary"
                shape="rounded"
                count="3"
              ></Pagination>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default ManageEvent;
