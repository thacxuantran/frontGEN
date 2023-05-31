import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Button, Typography } from "@material-ui/core";
import "./styles.scss";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import studentApi from "../../../../../api/studentApi";

const AvatarProfile = ({ studentInfo }) => {
  const history = useHistory();
  const checkName =
    studentInfo.personal_Information.first_Name &&
    studentInfo.personal_Information.last_Name;
  const [avt, setAvt] = useState("");
  const loggedInUser = useSelector((state) => state.user.current);
  const profileId = loggedInUser.profileId;
  const handleViewProfile = () => {
    history.push("/student/viewProfile/" + profileId);
  };
  useEffect(() => {
    (async () => {
      const userfake1 = await studentApi.getStudentProfileDetail(profileId);
      setAvt(userfake1.data.avatar_link);
    })();
  }, []);
  return (
    <Box className="root-avt">
      <div className="root__avatar1">
        {/* {avt === "" ? (
          <img
            style={{ border: "2px solid #0DAB42", borderRadius: "50%" }}
            src="/ship.png"
          />
        ) : (
          <img
            style={{ border: "2px solid #0DAB42", borderRadius: "50%" }}
            src={avt}
          />
        )} */}
        <Avatar
          src={avt}
          style={{
            width: "170px",
            height: "170px",
            border: "2px solid #0DAB42",
          }}
        />
      </div>
      <p className="root-avt__name">
        {checkName
          ? `${studentInfo.personal_Information.first_Name} ${studentInfo.personal_Information.last_Name}`
          : `${studentInfo.personal_Information.email}`}
      </p>
      <p className="root-avt__title">{studentInfo.jobTitle}</p>
      <Box className="header-avt__name__btn" onClick={handleViewProfile}>
        <Box className="header-avt__name__btn__content">
          <div className="header-avt__name__btn__icon">
            <EditIcon
              style={{ height: "18px", width: "18px" }}
              color="primary"
            />
          </div>
          <p
            color="secondary"
            className="header-avt__name__btn__text"
            style={{ textSize: "15px" }}
          >
            Edit Profile
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default AvatarProfile;
