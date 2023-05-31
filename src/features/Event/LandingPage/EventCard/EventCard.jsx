import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { CardMedia } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
EventCard.propTypes = {};

function EventCard({ img, title }) {
  const history = useHistory();
  const location = useLocation();
  const handleViewDetailEvent = () => {
    console.log(location.pathname);
    if (
      location.pathname === "/event" ||
      location.pathname === "/event/manageEvent"
    ) {
      // history.replace("event/viewDetailEvent");
      history.push("event/viewDetailEvent");
    }
  };
  return (
    <div onClick={handleViewDetailEvent} className="eventCard-root">
      <div className="eventCard-root__image">
        <CardMedia
          image={img}
          style={{
            width: "100%",
            height: "180px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
      <div className="eventCard-root__main">
        <div className="eventCard-root__main__date">
          <p
            style={{
              fontFamily: "Samsung Sharp Sans Regular",
              fontSize: "16px",
              color: "#404040",
            }}
          >
            July
          </p>
          <p
            style={{
              marginTop: "10px",
              fontFamily: "Samsung Sharp Sans Bold",
              fontSize: "30px",
              color: "#0DAB42",
            }}
          >
            28
          </p>
        </div>
        <div className="eventCard-root__main__title">
          <p
            style={{
              width: "150px",
              fontFamily: "Samsung Sharp Sans Bold",
              fontSize: "14px",
              color: "#404040",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontFamily: "Samsung Sharp Sans Regular",
              marginTop: "10px",
              fontSize: "14px",
              color: "#404040",
            }}
          >
            Hai Chau, Da Nang
          </p>
          <div className="eventCard-root__main__title__join">
            <p
              style={{
                fontFamily: "Samsung Sharp Sans Regular",
                marginRight: "10px",
                fontSize: "14px",
                color: "#404040",
              }}
            >
              Join:
            </p>
            <img src="/join.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
