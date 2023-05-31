import React from "react";
import "./styles.scss";
import SelectDot from "../SelectDot";
import Divider from "@material-ui/core/Divider";
import EventNoteIcon from "@material-ui/icons/EventNote";
import PhoneIcon from "@material-ui/icons/Phone";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import PublicIcon from "@material-ui/icons/Public";

const formatDate = (str) => {
  let date = new Date(str);
  return (
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
    "/" +
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "/" +
    date.getFullYear()
  );
};
const PersonalInformation = ({ info }) => {
  return (
    <div className="personal-content">
      <div className="personal-content__wrapper">
        <div className="personal-content__item">
          <EventNoteIcon
            style={{ color: "#0DAB42", fontSize: 25, marginRight: 15 }}
          />
          <span>{formatDate(info.date_Of_Birth)}</span>
        </div>
        <div className="personal-content__item">
          <PhoneIcon
            style={{ color: "#0DAB42", fontSize: 25, marginRight: 15 }}
          />
          <span>{info.ceil_number}</span>
        </div>
        <div className="personal-content__item">
          <LocationOnOutlinedIcon
            style={{ color: "#0DAB42", fontSize: 25, marginRight: 15 }}
          />
          <span>
            {info.province_City}, {info.country}
          </span>
        </div>
        <div className="personal-content__item">
          <PersonIcon
            style={{ color: "#0DAB42", fontSize: 25, marginRight: 15 }}
          />
          <span>{info.gender ? "Male" : "Female"}</span>
        </div>
        <div className="personal-content__item">
          <MailIcon
            style={{ color: "#0DAB42", fontSize: 25, marginRight: 15 }}
          />
          <span>{info.email}</span>
        </div>
        <div className="personal-content__item">
          <PublicIcon
            style={{ color: "#0DAB42", fontSize: 25, marginRight: 15 }}
          />
          <span>{info.country}</span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
