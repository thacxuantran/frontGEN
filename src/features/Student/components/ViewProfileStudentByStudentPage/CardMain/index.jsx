import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Typography,
  Container,
  Divider,
  makeStyles,
} from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ImageComponent from "../ImageComponent";
import PersonIcon from "@material-ui/icons/Person";
import "./styles.scss";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ApartmentIcon from "@material-ui/icons/Apartment";
import WarningRoundedIcon from "@material-ui/icons/WarningRounded";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from "@material-ui/icons/Settings";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  hashtag: {
    position: "relative",
    paddingBottom: "10px",
    display: "flex",
    "& span": {
      height: "17px",
      backgroundColor: "#A3EABB",
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      display: "inline-block",
      width: "25%",
      fontSize: "10px",
      textAlign: "center",
      borderRadius: "10px",
      fontWeight: "bold",
      lineHeight: "17px",
    },
  },
}));
var calculateDay = (date) => {
  const date1 = new Date(date);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays == 1) {
    return diffDays + " day ago";
  }
  return diffDays + " days ago";
};
function _usfTruncate(str, size = 100, description_words = "...") {
  if (!str) return "";
  if (str.length && str.length <= size) return str;
  return str.slice(0, size) + description_words;
}

const CardMain = (props) => {
  const {
    item,
    parent,
    mainPage,
    onSubmitUnSaveRercruitment,
    onSubmitHandleUnsubCompany,
  } = props;
  const history = useHistory();
  const [saveJob, setSaveJob] = useState(true);
  console.log({ item, parent });
  const handleUnSave = () => {
    if (mainPage == 2) {
      var tmp = !saveJob;
      setSaveJob(tmp);
      onSubmitUnSaveRercruitment(item["recruitments_ID"]);
    } else {
      console.log("item", item.r_ProfileID);
      onSubmitHandleUnsubCompany(item.r_ProfileID);
    }
  };
  let profile = {};
  if (mainPage != -1) {
    if (item)
      profile = item.s_ProfileID
        ? item.student_Profile
        : item.recruiter_Profile;
  }
  const classes = useStyles();
  const getClassLabel = () => {
    let classReturn = "";
    if (parent.state === "Approved") {
      classReturn += "approve";
    } else if (parent.state === "Rejected" || parent.state === "Rejected" || parent.state === "Cancel") {
      classReturn += "reject";
    } else {
      classReturn += "waiting";
    }
    return classReturn;
  };
  const Status = () => (
    <div className="root-card-main-aside__wrapper-body__footer">
      <span className="root-card-main-aside__wrapper-body__footer__status">
        Status:
      </span>
      {parent.state === "Cancel" ? (
        <span className="root-card-main-aside__wrapper-body__footer__cancelApply">
          Canceled
        </span>
      ) : (
        <span className="root-card-main-aside__wrapper-body__footer__apply">
          Applied
        </span>
      )}

      <span className="root-card-main-aside__wrapper-body__footer__date">
        (Update {parent.updatedate || "2020-20-12"})
      </span>
    </div>
  );
  const Like = () => (
    <div className="root-card-main-aside__wrapper-header">
      {
        <FavoriteIcon
          onClick={() => handleUnSave()}
          style={{ color: "#0DAB42", fontSize: 25, marginLeft: 15 }}
        />
      }
    </div>
  );
  const InsideLabel = () => {
    if (parent.state === "Approved") {
      return <CheckCircleIcon style={{ color: "#0DAB42", fontSize: 45 }} />;
    } else if (parent.state === "Rejected" || parent.state === "Reject" || parent.state === "Cancel") {
      return (
        <svg
          style={{ color: "#0DAB42", fontSize: 45 }}
          width="40"
          height="42"
          viewBox="0 0 40 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.85786 35.475C4.00069 33.5453 2.5275 31.2545 1.52241 28.7332C0.517315 26.212 1.95685e-08 23.5097 0 20.7808C-1.95685e-08 18.0518 0.517315 15.3495 1.52241 12.8283C2.5275 10.3071 4.00069 8.01622 5.85786 6.08654C7.71504 4.15687 9.91982 2.62617 12.3463 1.58184C14.7728 0.53751 17.3736 -2.03324e-08 20 0C22.6264 2.03324e-08 25.2272 0.53751 27.6537 1.58184C30.0802 2.62617 32.285 4.15687 34.1421 6.08654C37.8929 9.98369 40 15.2694 40 20.7808C40 26.2922 37.8929 31.5778 34.1421 35.475C30.3914 39.3721 25.3043 41.5615 20 41.5615C14.6957 41.5615 9.60859 39.3721 5.85786 35.475ZM15.0751 12.9102C14.7197 12.5661 14.2496 12.3788 13.7639 12.3877C13.2781 12.3966 12.8147 12.6011 12.4711 12.958C12.1276 13.3149 11.9308 13.7965 11.9223 14.3012C11.9137 14.8059 12.094 15.2943 12.4252 15.6636L17.3501 20.7808L12.4252 25.8979C12.241 26.0762 12.0932 26.2913 11.9908 26.5303C11.8883 26.7693 11.8332 27.0272 11.8287 27.2888C11.8243 27.5504 11.8706 27.8102 11.9649 28.0528C12.0592 28.2954 12.1996 28.5157 12.3776 28.7007C12.5556 28.8857 12.7677 29.0316 13.0012 29.1295C13.2346 29.2275 13.4847 29.2756 13.7365 29.271C13.9882 29.2664 14.2365 29.2092 14.4665 29.1027C14.6965 28.9962 14.9035 28.8427 15.0751 28.6513L20 23.5341L24.9249 28.6513C25.0965 28.8427 25.3035 28.9962 25.5335 29.1027C25.7635 29.2092 26.0118 29.2664 26.2635 29.271C26.5153 29.2756 26.7654 29.2275 26.9988 29.1295C27.2323 29.0316 27.4444 28.8857 27.6224 28.7007C27.8004 28.5157 27.9408 28.2954 28.0351 28.0528C28.1294 27.8102 28.1757 27.5504 28.1713 27.2888C28.1668 27.0272 28.1117 26.7693 28.0092 26.5303C27.9068 26.2913 27.759 26.0762 27.5748 25.8979L22.6499 20.7808L27.5748 15.6636C27.759 15.4853 27.9068 15.2702 28.0092 15.0312C28.1117 14.7923 28.1668 14.5343 28.1713 14.2727C28.1757 14.0111 28.1294 13.7513 28.0351 13.5087C27.9408 13.2661 27.8004 13.0458 27.6224 12.8608C27.4444 12.6758 27.2323 12.53 26.9988 12.432C26.7654 12.334 26.5153 12.2859 26.2635 12.2905C26.0118 12.2951 25.7635 12.3524 25.5335 12.4588C25.3035 12.5653 25.0965 12.7188 24.9249 12.9102L20 18.0274L15.0751 12.9102Z"
            fill="#FF5547"
          />
        </svg>
      );
    } else {
      return <WarningRoundedIcon style={{ color: "#FBBC05", fontSize: 45 }} />;
    }
  };

  const Label = () => (
    <div className={"root-card-main-aside-2 " + getClassLabel()}>
      {InsideLabel()}
    </div>
  );

  const handleViewDetailJob = () => {
    const win = window.open(
      `/student/listrecruitments/detail/${item.recruitments_ID}`,
      "_blank"
    );
    win.focus();
  };

  const handleViewDetailCompany = () => {
    history.push(`/student/viewRecruiterProfile/${item.r_ProfileID}`);
  };

  return (
    <div>
      <div className="root-card-main-aside">
        <div className="root-card-main-aside__wrapper-body">
          <ImageComponent
            imageSrc={profile ? profile.logo_Image_Link : item.logo_Image_Link}
            className="root-card-main-aside__wrapper-body__image"
          />
          {mainPage === 1 || mainPage === 2 ? <Like /> : null}
          {mainPage === 0 || mainPage === 2 || mainPage === 3 ? (
            <div styles={{ marginTop: "13px" }}>
              <span
                className="root-card-main-aside__wrapper-body__title"
                onClick={handleViewDetailJob}
              >
                {_usfTruncate(item && item.title, 30)}
              </span>
              <div
                className="root-card-main-aside__wrapper-body__down-up"
                style={{ paddingTop: "10px" }}
              >
                <MonetizationOnIcon
                  style={{ color: "#0DAB42", fontSize: 20, marginRight: 15 }}
                />
                <span className="root-card-main-aside__wrapper-body__down-up__text">
                  {item && item.min_Salary} USD - {item && item.max_Salary} USD
                </span>
              </div>
              <div className="root-card-main-aside__wrapper-body__down down_top">
                <div className="root-card-main-aside__wrapper-body__down__wrapper">
                  <ApartmentIcon
                    style={{ color: "#0DAB42", fontSize: 20, marginRight: 15 }}
                  />
                  <span className="root-card-main-aside__wrapper-body__down__wrapper__text">
                    {profile && profile.profileName}
                  </span>
                </div>
                <div className="root-card-main-aside__wrapper-body__down__wrapper">
                  <LocationOnOutlinedIcon
                    style={{
                      color: "#0DAB42",
                      fontSize: 20,
                      marginRight: 15,
                      marginLeft: 25,
                    }}
                  />
                  <span className="root-card-main-aside__wrapper-body__down__wrapper__text">
                    {_usfTruncate(item.location, 30)}, {item.city.name}
                  </span>
                </div>
              </div>
              <Box className={classes.hashtag}>
                {item && item.recruitmentTags
                  ? item.recruitmentTags.map((item, index) =>
                    index <= 3 ? (
                      <span key={index}>
                        {_usfTruncate(item.hashTag.hashTag_Name, 5)}
                      </span>
                    ) : null
                  )
                  : null}
              </Box>
              {mainPage === 0 || mainPage === 2 ? <Status /> : null}
            </div>
          ) : (
            <div className="mainPage1">
              <span
                className="root-card-main-aside__wrapper-body__title"
                onClick={handleViewDetailCompany}
              >
                {_usfTruncate(item.recruiter_Information.company_Name, 30)}
              </span>
              {/* <div className="root-card-main-aside__wrapper-body__down-up">
                                    <MonetizationOnIcon style={{ color: '#0DAB42', fontSize: 25, marginRight: 15 }} />
                                    <span className="root-card-main-aside__wrapper-body__down-up__text">{item.min_Salary}USD - {item.max_Salary}USD</span>
                                </div> */}
              <div className="root-card-main-aside__wrapper-body__down down_top">
                <div className="root-card-main-aside__wrapper-body__down__wrapper">
                  <LocationOnOutlinedIcon
                    style={{ color: "#0DAB42", fontSize: 25, marginRight: 15 }}
                  />
                  <span className="root-card-main-aside__wrapper-body__down__wrapper__text">
                    {_usfTruncate(item.recruiter_Information.address, 35)}
                  </span>
                </div>
              </div>
              <div className="root-card-main-aside__wrapper-body__downbehind">
                <div className="root-card-main-aside__wrapper-body__downbehind__wrapper">
                  <SettingsIcon
                    style={{ color: "#0DAB42", fontSize: 20, marginRight: 10 }}
                  />
                  <span className="root-card-main-aside__wrapper-body__downbehind__wrapper__text">
                    {_usfTruncate(
                      item.recruiter_Information.company_Industry,
                      15
                    )}
                  </span>
                </div>
                <div
                  //style={{ marginLeft: "-7%" }}
                  className="root-card-main-aside__wrapper-body__downbehind__wrapper"
                >
                  <MailOutlineIcon
                    style={{ color: "#0DAB42", fontSize: 20, marginRight: 10 }}
                  />
                  <span className="root-card-main-aside__wrapper-body__downbehind__wrapper__text1">
                    {_usfTruncate(item.recruiter_Information.contact_Email, 15)}
                  </span>
                </div>
                <div className="root-card-main-aside__wrapper-body__downbehind__wrapper">
                  <PhoneIcon
                    style={{ color: "#0DAB42", fontSize: 20, marginRight: 10 }}
                  />
                  <span className="root-card-main-aside__wrapper-body__downbehind__wrapper__text1">
                    {item.recruiter_Information.phone_Number}
                  </span>
                </div>
                <div className="root-card-main-aside__wrapper-body__downbehind__wrapper">
                  <PeopleAltIcon
                    style={{ color: "#0DAB42", fontSize: 20, marginRight: 10 }}
                  />
                  <span className="root-card-main-aside__wrapper-body__downbehind__wrapper__text">
                    {item.recruiter_Information.company_Size}
                  </span>
                </div>
              </div>
              <p className="root-card-aside__wrapper-body-follow__upper__left__title__job">
                {item.recruitments.length} Jobs Available
              </p>
            </div>
          )}
        </div>
        {mainPage == 0 ? <Label /> : null}
      </div>
    </div>
  );
};

export default CardMain;
