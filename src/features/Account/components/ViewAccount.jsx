import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Loading from "../../../components/Loading";
import { Box, Typography, Container, Avatar } from "@material-ui/core";
import InfoCard from "./InfoCard";
import { useSelector } from "react-redux";
import recruiterApi from "../../../api/axiosRecruiter";
import studentApi from "../../../api/studentApi";
ViewAccount.propTypes = {};

function ViewAccount() {
  const loggedInUser = useSelector((state) => state.user.current);
  const profileId = loggedInUser.profileId;

  //const profileId = "73e4947c-6848-2878-5e69-eab3c948e915";
  const Role = loggedInUser.role;
  //Call API User
  const [user, setUser] = useState({});
  const [verify, setVerify] = useState(false);
  const [avt, setAvt] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      if (Role === "STUDENT") {
        const userfake1 = await studentApi.getStudentProfileDetail(profileId);
        setUser(userfake1.data);
        setAvt(userfake1.data.avatar_link);
        console.log("avt ne", userfake1.data.personal_Information);
      } else {
        const userfake2 = await recruiterApi.getRecruiterProfileDetail(
          profileId
        );
        setVerify(userfake2.data.verify);
        setAvt(userfake2.data.logo_Image_Link);
        setUser(userfake2.data.recruiter_Information);
      }
      console.log("user is", user);
      setLoading(false);
    })();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="ViewAccount">
          <div className="ViewAccount_circle">
            <svg
              width="84"
              height="231"
              viewBox="0 0 84 231"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="103"
                cy="142"
                r="87"
                stroke="#404040"
                stroke-width="4"
              />
              <circle cx="117" cy="89" r="89" fill="#A3EABB" />
              <circle cx="26" cy="184" r="26" fill="#0DAB42" />
            </svg>
          </div>
          <div className="ViewAccount_circle2">
            <svg
              width="160"
              height="249"
              viewBox="0 0 160 249"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="18.8667"
                cy="124.867"
                r="122"
                transform="rotate(176.732 18.8667 124.867)"
                stroke="#404040"
                stroke-width="4"
              />
              <circle
                cx="123.385"
                cy="60.8048"
                r="36"
                transform="rotate(176.732 123.385 60.8048)"
                fill="#0DAB42"
              />
            </svg>
          </div>
          <Box className="root">
            <div className="root__avatar1">
              <Avatar
                style={{
                  border: "2px solid #0DAB42",
                  width: "170px",
                  height: "170px",
                }}
                src={avt}
              />
            </div>
            <div className="root__img"></div>
            {/* // <img src="./sologan.png" className="img" /> */}
            <Typography variant="h2" className="root__name">
              {Role === "STUDENT" ? user.profileName : user.company_Name}
            </Typography>
            <Typography variant="subtitle1" className="root__title">
              {Role === "STUDENT" ? user.jobTitle : user.company_Industry}
            </Typography>

            <InfoCard title="Account Settings" />
          </Box>
        </div>
      )}
    </div>
  );
}

export default ViewAccount;
