import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Typography,
  Container,
  makeStyles,
} from "@material-ui/core";
import "./styles.scss";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CartAsideFollow from "../CartAsideFollow";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
const useStyles = makeStyles((theme) => ({
  activeButton: {
    color: "#0DAB42",
  },
}));

const GroupButton = (props) => {
  const { mainPage, handlePageChange, loading } = props;
  return (
    <div className="root-main__wrapper__group-button">
      <div
        onClick={() => handlePageChange(0)}
        className={
          loading ? (mainPage === 0 ? "root-main__wrapper__group-button__entry exampleBtn" : "root-main__wrapper__group-button__entry disable-button") : (mainPage === 0 ? "root-main__wrapper__group-button__entry exampleBtn" : "root-main__wrapper__group-button__entry")
        }
      >
        <NotificationsNoneIcon style={{ fontSize: 25, marginRight: "5px" }} />
        <span className="root-main__wrapper__group-button__text">
          Applied jobs
        </span>
      </div>
      <div
        onClick={() => handlePageChange(1)}
        className={
          loading ? (mainPage === 1 ? "root-main__wrapper__group-button__company__entry exampleBtn" : "root-main__wrapper__group-button__company__entry disable-button") : (mainPage === 1 ? "root-main__wrapper__group-button__company__entry exampleBtn" : "root-main__wrapper__group-button__company__entry")
        }
      >
        <DoneAllIcon style={{ marginRight: "5px", fontSize: 25 }} />
        <p className="root-main__wrapper__group-button__company__text">
          Company Followed
        </p>
      </div>
      <div
        onClick={() => handlePageChange(2)}
        className={
          loading ? (mainPage === 2 ? "root-main__wrapper__group-button__entry exampleBtn" : "root-main__wrapper__group-button__entry disable-button") : (mainPage === 2 ? "root-main__wrapper__group-button__entry exampleBtn" : "root-main__wrapper__group-button__entry")
        }
      >
        <FavoriteBorderIcon style={{ marginRight: "5px", fontSize: 25 }} />
        <span className="root-main__wrapper__group-button__text">
          Saved Jobs
        </span>
      </div>
      <div
        onClick={() => handlePageChange(3)}
        className={
          loading ? (mainPage === 3 ? "root-main__wrapper__group-button__entry exampleBtn" : "root-main__wrapper__group-button__entry disable-button") : (mainPage === 3 ? "root-main__wrapper__group-button__entry exampleBtn" : "root-main__wrapper__group-button__entry")
        }
      >
        <OpenInBrowserIcon style={{ marginRight: "5px", fontSize: 25 }} />
        <span className="root-main__wrapper__group-button__text">
          Invited Jobs
        </span>
      </div>
    </div >
  );
};

export default GroupButton;
