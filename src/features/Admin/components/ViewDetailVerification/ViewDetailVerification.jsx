import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@material-ui/core";
import "./ViewDetailVerification.scss";
import DialogMessage from "../../../../components/Popup/DialogMessage";

ViewDetailVerification.propTypes = {};

function ViewDetailVerification({
  defaultVerification,
  onSubmitApprove,
  rId,
  onSubmitReject,
}) {
  const [open, setOpen] = React.useState(false);
  const [openReject, setOpenReject] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleApproved = () => {
    onSubmitApprove(rId);
    setOpen(false);
  };

  const handleRejectClickOpen = () => {
    setOpenReject(true);
  };

  const handleRejectClose = () => {
    setOpenReject(false);
  };

  const handleRejected = () => {
    onSubmitReject(rId);
    setOpenReject(false);
  };
  return (
    <Box className="verify-detail-container">
      <Box className="verify-detail-container__title">
        <svg
          width="150"
          height="23"
          viewBox="0 0 150 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.94 17.2C10.82 17.2 13.28 15.52 14.56 13.04L12.08 11.74C11.3 13.34 9.9 14.48 7.88 14.48C5.16 14.48 3.14 12.36 3.14 9.7C3.14 6.98 5.16 4.88 7.94 4.88C9.84 4.88 11.1 5.82 11.96 7.34L14.34 5.82C13.06 3.64 10.68 2.2 7.94 2.2C3.72 2.2 0.44 5.34 0.44 9.7C0.44 13.86 3.44 17.2 7.94 17.2ZM21.3233 17.24C24.6833 17.24 27.3833 14.52 27.3833 11.16C27.3833 7.74 24.6833 5.06 21.3233 5.06C17.9433 5.06 15.2633 7.74 15.2633 11.16C15.2633 14.52 17.9433 17.24 21.3233 17.24ZM21.3233 14.7C19.3833 14.7 17.9233 13.1 17.9233 11.16C17.9233 9.18 19.3833 7.6 21.3233 7.6C23.2433 7.6 24.7233 9.18 24.7233 11.16C24.7233 13.1 23.2433 14.7 21.3233 14.7ZM28.573 17H31.273V10.52C31.273 8.44 32.393 7.4 33.913 7.4C35.533 7.4 36.373 8.42 36.373 10.1V17H39.113V10.46C39.113 8.4 40.233 7.4 41.693 7.4C43.373 7.4 44.233 8.48 44.233 10.18V17H46.993V9.96C46.993 6.9 45.413 5.06 42.233 5.06C40.553 5.06 39.193 5.86 38.393 7.08C37.693 5.8 36.433 5.06 34.593 5.06C33.153 5.06 31.993 5.68 31.253 6.66V5.3H28.573V17ZM55.0339 17.24C57.8539 17.24 60.7739 15 60.7739 11.16C60.7739 7.28 57.9539 5.06 55.0139 5.06C53.4139 5.06 52.0339 5.76 51.2139 6.86V5.3H48.5339V22.38H51.2139V15.62C52.0339 16.66 53.4339 17.24 55.0339 17.24ZM54.5939 14.76C52.5739 14.76 51.1139 13.14 51.1139 11.12C51.1139 9.12 52.5739 7.52 54.5939 7.52C56.5739 7.52 58.1139 9.1 58.1139 11.12C58.1139 13.16 56.5739 14.76 54.5939 14.76ZM67.3709 17.24C68.9109 17.24 70.3109 16.58 71.1709 15.48V17H73.8709V5.3H71.1709V6.7C70.3109 5.68 68.9509 5.06 67.4109 5.06C64.4509 5.06 61.6109 7.28 61.6109 11.16C61.6109 15 64.5509 17.24 67.3709 17.24ZM67.8109 14.76C65.8109 14.76 64.2709 13.16 64.2709 11.12C64.2709 9.1 65.8109 7.52 67.8109 7.52C69.8309 7.52 71.3109 9.12 71.3109 11.12C71.3109 13.14 69.8309 14.76 67.8109 14.76ZM75.5066 17H78.2066V10.58C78.2066 8.52 79.4066 7.4 80.9466 7.4C82.7066 7.4 83.5866 8.52 83.5866 10.34V17H86.3266V10.06C86.3266 6.88 84.6266 5.06 81.6866 5.06C80.1666 5.06 78.9666 5.72 78.1866 6.74V5.3H75.5066V17ZM89.0616 22.4H91.8016L98.7816 5.3H95.9416L92.8616 13.18L89.6016 5.3H86.7216L91.5216 16.42L89.0616 22.4ZM104.807 17H107.527V2.4H104.807V17ZM109.354 17H112.054V10.58C112.054 8.52 113.254 7.4 114.794 7.4C116.554 7.4 117.434 8.52 117.434 10.34V17H120.174V10.06C120.174 6.88 118.474 5.06 115.534 5.06C114.014 5.06 112.814 5.72 112.034 6.74V5.3H109.354V17ZM120.906 7.72H122.886V17H125.626V7.72H128.026V5.3H125.626C125.626 3.6 125.866 3.1 128.026 3.1V0.599999H127.786C124.226 0.599999 122.886 1.92 122.886 5.28V5.3H120.906V7.72ZM134.233 17.24C137.593 17.24 140.293 14.52 140.293 11.16C140.293 7.74 137.593 5.06 134.233 5.06C130.853 5.06 128.173 7.74 128.173 11.16C128.173 14.52 130.853 17.24 134.233 17.24ZM134.233 14.7C132.293 14.7 130.833 13.1 130.833 11.16C130.833 9.18 132.293 7.6 134.233 7.6C136.153 7.6 137.633 9.18 137.633 11.16C137.633 13.1 136.153 14.7 134.233 14.7Z"
            fill="black"
          />
          <path
            d="M141.759 13.688C141.759 15.992 143.199 17.576 145.647 17.576C148.095 17.576 149.583 15.992 149.583 13.688C149.583 11.336 148.143 9.752 145.695 9.752C143.247 9.752 141.759 11.336 141.759 13.688Z"
            fill="#0DAB42"
          />
        </svg>
      </Box>
      <Box style={{ padding: "0 60px" }}>
        <Box style={{ padding: "12px 0" }}>
          <Typography variant="body2">Company Name</Typography>
          <Box
            style={{
              marginTop: "10px",
              padding: "12px 4px",
              boxShadow: "0px 4px 12px 0px #00000026",
              borderRadius: "5px",
            }}
          >
            {defaultVerification.company_Name}
          </Box>
        </Box>
        <Box style={{ padding: "12px 0" }}>
          <Typography variant="body2">Location</Typography>
          <Box
            style={{
              marginTop: "10px",
              padding: "12px 4px",
              boxShadow: "0px 4px 12px 0px #00000026",
              borderRadius: "5px",
            }}
          >
            {defaultVerification.address}
          </Box>
        </Box>
        <Box style={{ padding: "12px 0" }}>
          <Typography variant="body2">Phone Number</Typography>
          <Box
            style={{
              marginTop: "10px",
              padding: "12px 4px",
              boxShadow: "0px 4px 12px 0px #00000026",
              borderRadius: "5px",
            }}
          >
            {defaultVerification.phone_Number}
          </Box>
        </Box>
        <Box style={{ padding: "12px 0" }}>
          <Typography variant="body2">Company Industry</Typography>
          <Box
            style={{
              marginTop: "10px",
              padding: "12px 4px",
              boxShadow: "0px 4px 12px 0px #00000026",
              borderRadius: "5px",
            }}
          >
            {defaultVerification.company_Industry}
          </Box>
        </Box>
        <Box style={{ padding: "12px 0" }}>
          <Typography variant="body2">Company Size</Typography>
          <Box
            style={{
              marginTop: "10px",
              padding: "12px 4px",
              boxShadow: "0px 4px 12px 0px #00000026",
              borderRadius: "5px",
            }}
          >
            {defaultVerification.company_Size}
          </Box>
        </Box>
        <Box style={{ padding: "12px 0" }}>
          <Typography variant="body1" color="primary">
            Tax Code
          </Typography>
          <Box
            style={{
              marginTop: "10px",
              padding: "12px 4px",
              boxShadow: "0px 4px 12px 0px #00000026",
              borderRadius: "5px",
            }}
          >
            {defaultVerification.tax_code}
          </Box>
        </Box>
        <Box
          style={{
            justifyContent: "center",
            display: "flex",
            marginBottom: "8%",
          }}
        >
          <Box className="rootOverviewCan__btn" style={{ width: "45%" }}>
            <Button
              color="primary"
              variant="contained"
              className="rootOverviewCan__btn__item"
              onClick={handleClickOpen}
              style={{
                boxShadow: "0px 4px 12px 0px #00000026",
                borderRadius: "15px",
              }}
            >
              Approve
            </Button>
            <DialogMessage
              title="Approve Verification Request"
              message={` Do you want to approve verification request of ${defaultVerification.company_Name} company?`}
              open={open}
              onClickClose={handleClose}
              onSubmit={() => handleApproved()}
            />
            <Button
              color="default"
              variant="contained"
              className="rootOverviewCan__btn__item"
              onClick={handleRejectClickOpen}
              style={{
                boxShadow: "0px 4px 12px 0px #00000026",
                borderRadius: "15px",
              }}
            >
              Reject
            </Button>
            <DialogMessage
              title="Reject Verification Request"
              message={` Do you want to reject verification request of ${defaultVerification.company_Name} company?`}
              open={openReject}
              onClickClose={handleRejectClose}
              onSubmit={() => handleRejected()}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ViewDetailVerification;
