import React from "react";
import PropTypes from "prop-types";
import "./Information.scss";
import { Box, Typography } from "@material-ui/core";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import InformationDialog from "../InformationDialog/InformationDialog";
import LocationOnIcon from "@material-ui/icons/LocationOn";
Information.propTypes = {};

function Information({ recruiterProfile, onSubmit }) {
  const [openInformationDiaLog, setOpenInformationDiaLog] =
    React.useState(false);
  const handleClickOpenInformationDiaLog = () => {
    setOpenInformationDiaLog(true);
  };

  const handleClickCloseInformationDiaLog = () => {
    setOpenInformationDiaLog(false);
  };
  return (
    <Box className="infor-profile">
      <Box className="infor-profile__header">
        <p style={{ fontFamily: "Samsung Sharp Sans", fontSize: "20px" }}>
          Company Information
        </p>
        <Box className="infor-profile__header__editIcon">
          <BorderColorOutlinedIcon
            onClick={handleClickOpenInformationDiaLog}
            style={{ color: "#0DAB42", fontSize: 25 }}
          />
        </Box>
      </Box>
      <hr />
      <Box className="infor-profile__body">
        <p
          style={{
            marginTop: "3%",
            fontFamily: "Samsung Sharp Sans",
            color: "#0DAB42",
            fontSize: "30px",
          }}
        >
          {recruiterProfile.recruiter_Information.company_Name}
        </p>
        <p
          style={{
            marginTop: "2%",
            fontFamily: "Samsung Sharp Sans",
            fontSize: "20px",
          }}
        >
          {recruiterProfile.recruiter_Information.company_Industry}
        </p>
        <Box className="infor-profile__body__address">
          <LocationOnIcon style={{ color: "#0DAB42", fontSize: 25 }} />
          <p
            style={{
              marginLeft: "5px",
              fontFamily: "Samsung Sharp Sans Regular",
              fontSize: "15px",
            }}
          >
            {recruiterProfile.recruiter_Information.address}
          </p>
        </Box>
      </Box>
      <Box className="infor-profile__detail">
        <Box className="infor-profile__detail__industry">
          <Box className="infor-profile__detail__industry__img">
            <img
              tyle={{ width: "25px", height: "25px" }}
              src="/Industryicon.png"
              alt=""
            />
          </Box>
          <Box className="infor-profile__detail__industry__text">
            <p
              style={{
                fontFamily: "Samsung Sharp Sans Regular",
                fontSize: "15px",
              }}
            >
              {recruiterProfile.recruiter_Information.company_Industry}
            </p>
          </Box>
        </Box>
        <Box className="infor-profile__detail__mail">
          <Box className="infor-profile__detail__mail__img">
            <img
              tyle={{ width: "25px", height: "25px" }}
              src="/Mailicon.png"
              alt=""
            />
          </Box>
          <Box className="infor-profile__detail__mail__text">
            <p
              style={{
                fontFamily: "Samsung Sharp Sans Regular",
                fontSize: "15px",
              }}
            >
              {" "}
              {recruiterProfile.recruiter_Information.contact_Email}
            </p>
          </Box>
        </Box>
        <Box className="infor-profile__detail__cellphone">
          <Box className="infor-profile__detail__cellphone__img">
            <img
              src="/Cellphoneicon.png"
              style={{ width: "25px", height: "25px" }}
              alt=""
            />
          </Box>
          <Box className="infor-profile__detail__cellphone__text">
            <p
              style={{
                fontFamily: "Samsung Sharp Sans Regular",
                fontSize: "15px",
              }}
            >
              {recruiterProfile.recruiter_Information.phone_Number}
            </p>
          </Box>
        </Box>
        <Box className="infor-profile__detail__size">
          <Box className="infor-profile__detail__size__img">
            <img
              tyle={{ width: "25px", height: "25px" }}
              src="/Comsizeicon.png"
              alt=""
            />
          </Box>
          <Box className="infor-profile__detail__size__text">
            <p
              style={{
                fontFamily: "Samsung Sharp Sans Regular",
                fontSize: "15px",
              }}
            >
              {recruiterProfile.recruiter_Information.company_Size}
            </p>
          </Box>
        </Box>
      </Box>
      <InformationDialog
        open={openInformationDiaLog}
        handleClose={handleClickCloseInformationDiaLog}
        defaultRecruiter={recruiterProfile}
        onSubmit={onSubmit}
      />
    </Box>
  );
}

export default Information;
